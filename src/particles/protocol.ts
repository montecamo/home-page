export enum EVENT_TYPE {
  RESIZE,
  MOUSEMOVE,
  CLICK,
  INIT,
  COLOR,
}

type ResizeEvent = {
  type: EVENT_TYPE.RESIZE;
  data: { width: number; height: number };
};
type InitEvent = {
  type: EVENT_TYPE.INIT;
  data: { canvas: OffscreenCanvas; width: number; height: number };
};
type MoveEvent = {
  type: EVENT_TYPE.MOUSEMOVE;
  data: { x: number; y: number };
};
type ClickEvent = {
  type: EVENT_TYPE.CLICK;
  data: {};
};
type ColorEvent = {
  type: EVENT_TYPE.COLOR;
  data: { color: string };
};

type CanvasEvent =
  | ResizeEvent
  | MoveEvent
  | ClickEvent
  | InitEvent
  | ColorEvent;
export type CanvasEventData = CanvasEvent["data"];

type Listener = (event: CanvasEventData) => void;

export function makeProtocol(
  postMessage: (event: CanvasEvent) => void
): {
  on: (type: EVENT_TYPE, cb: Listener) => void;
  send: (type: EVENT_TYPE, data?: CanvasEventData, transfer?: any[]) => void;
  message: (event: MessageEvent<CanvasEvent>) => void;
} {
  const listeners: { [type in EVENT_TYPE]: Listener[] } = {
    [EVENT_TYPE.CLICK]: [],
    [EVENT_TYPE.MOUSEMOVE]: [],
    [EVENT_TYPE.RESIZE]: [],
    [EVENT_TYPE.INIT]: [],
    [EVENT_TYPE.COLOR]: [],
  };

  return {
    on: (type, cb) => {
      listeners[type] = listeners[type].concat(cb);
    },
    send: (type, data, transfer) => {
      // @ts-ignore
      postMessage({ type, data }, transfer);
    },
    message: (e) => {
      const type = e.data.type;

      listeners[type].forEach((cb) => cb(e.data.data));
    },
  };
}
