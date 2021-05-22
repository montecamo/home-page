type Bridge<T> = {
  on: (cb: (event: MessageEvent<T>) => void) => void;
  post: (event: T) => void;
};

const BRIDGE_ID = "OFFSCREEN_CANVAS";

export function makeOutsideBridge<T>(url: string): Bridge<T> {
  const isWorker = Boolean(
    document.createElement("canvas").transferControlToOffscreen
  );

  if (isWorker) {
    const worker = new Worker(url, { type: "module" });

    return {
      on: (cb) => {
        worker.onmessage = cb;
      },
      post: worker.postMessage.bind(worker),
    };
  }

  var script = document.createElement("script");
  script.type = "module";
  script.src = url;
  script.defer = true;

  document.head.appendChild(script);

  const listeners = [];
  const messages = [];

  const bridge: Bridge<T> = {
    on: (cb) => {
      messages.forEach(cb);

      listeners.push(cb);
    },
    post: (event) => {
      const message = new MessageEvent("bridge", { data: event });

      messages.push(message);

      listeners.forEach((cb) => cb(message));
    },
  };

  window[BRIDGE_ID] = bridge;

  return bridge;
}

export function makeInsideBridge<T>(): Bridge<T> {
  const isWorker = typeof window !== "object";

  if (isWorker) {
    return {
      // @ts-ignore
      on: (cb) => {
        onmessage = cb;
      },
      // @ts-ignore
      post: postMessage,
    };
  }

  const bridge = window[BRIDGE_ID];

  delete window[BRIDGE_ID];

  return bridge;
}
