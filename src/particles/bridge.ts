type BridgeListener<T> = (cb: (event: MessageEvent<T>) => void) => void;
type BridgeEmitter<T> = (event: T) => void;

type Bridge<T> = {
  on: BridgeListener<T>;
  emit: BridgeEmitter<T>;
};

const BRIDGE_ID = "OFFSCREEN_CANVAS_BRIDGE";

function isWorker() {
  return (
    typeof window !== "object" ||
    Boolean(document.createElement("canvas").transferControlToOffscreen)
  );
}

function loadScript(url: string) {
  var script = document.createElement("script");
  script.type = "module";
  script.src = url;
  script.defer = true;

  document.head.appendChild(script);
}

function makeBridge<T>(): Bridge<T> {
  const listeners = [];
  const messages = [];

  return {
    on: (cb) => {
      messages.forEach(cb);

      listeners.push(cb);
    },
    emit: (event) => {
      const message = new MessageEvent("bridge", { data: event });

      messages.push(message);

      listeners.forEach((cb) => cb(message));
    },
  };
}

export function makeOutsideBridge<T>(url: string): BridgeEmitter<T> {
  if (isWorker()) {
    const worker = new Worker(url, { type: "module" });

    return worker.postMessage.bind(worker);
  }

  loadScript(url);

  const bridge = makeBridge<T>();

  window[BRIDGE_ID] = bridge;

  return bridge.emit;
}

export function makeInsideBridge<T>(): BridgeListener<T> {
  if (isWorker()) {
    const listeners = [];

    onmessage = (e) => {
      listeners.forEach((cb) => cb(e));
    };

    return (cb) => {
      listeners.push(cb);
    };
  }

  const bridge = window[BRIDGE_ID];

  return bridge.on;
}
