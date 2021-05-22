import esbuild from "esbuild";
import path from "path";

const isWorker = (path) => /\.(worker)\..+$/.test(path);
const isViteWorker = (path) => /\?worker_file/.test(path);

export default function webworkerPlugin() {
  let config;

  return {
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    resolveId(source, importer) {
      if (isWorker(source) && !isViteWorker(source)) {
        return path.resolve(path.dirname(importer), source);
      }
    },
    load(id) {
      if (isWorker(id) && !isViteWorker(id)) {
        if (config.command !== "build") {
          return `export default '${id.match(/(src\/.*)/)[0]}?worker_file';`;
        }

        const result = esbuild.buildSync({
          entryPoints: [id],
          write: false,
          minify: true,
          bundle: true,
        });

        const content = result.outputFiles[0].contents;

        return `export default '__VITE_ASSET__${this.emitFile({
          type: "asset",
          name: path.basename(id).replace(/\.ts/, ".js"),
          source: content,
        })}__'`;
      }
    },
  };
}
