export default function myPlugin() {
  return {
    name: "my-plugin", // required, will show up in warnings and errors
    resolveId(id) {
      if (/\.css/.test(id)) {
        return id;
      }
    },
    load(id) {
      if (/\.css/.test(id)) {
        return `export const msg = "from virtual file"`;
      }
    },
  };
}
