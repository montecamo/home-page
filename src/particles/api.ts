export enum EVENT_TYPE {
  RESIZE = 'resize',
  MOUSEMOVE = 'mousemove',
  CLICK = 'click',
  INIT = 'init',
  COLOR = 'color',
}

export type ResizeEvent = {
  type: EVENT_TYPE.RESIZE;
  data: { width: number; height: number };
};
export type InitEvent = {
  type: EVENT_TYPE.INIT;
  data: {
    canvas: OffscreenCanvas | HTMLCanvasElement;
    width: number;
    height: number;
  };
};
export type MoveEvent = {
  type: EVENT_TYPE.MOUSEMOVE;
  data: { x: number; y: number };
};
export type ClickEvent = {
  type: EVENT_TYPE.CLICK;
  data: void;
};
export type ColorEvent = {
  type: EVENT_TYPE.COLOR;
  data: string;
};

export type CanvasEvent =
  | ResizeEvent
  | MoveEvent
  | ClickEvent
  | InitEvent
  | ColorEvent;

export type CanvasEventData = CanvasEvent['data'];

type Listener<T> = (event: T) => void;

export type Api = {
  on: <T extends CanvasEventData>(type: EVENT_TYPE, cb: Listener<T>) => void;
  resize: (event: ResizeEvent['data']) => void;
  mousemove: (event: MoveEvent['data']) => void;
  click: () => void;
  init: (event: InitEvent['data'], transfter: any[]) => void;
  color: (event: ColorEvent['data']) => void;
};

export function makeApi({
  emit,
  on,
}: {
  emit?: (event: CanvasEvent, transfter?: any[]) => void;
  on?: (cb: (event: MessageEvent<CanvasEvent>) => void) => void;
}): Api {
  return {
    on: (type, cb) => {
      if (on) {
        on((message) => {
          if (message.data.type === type) {
            // @ts-ignore
            cb(message.data.data);
          }
        });
      }
    },
    resize: (data) => {
      emit({ type: EVENT_TYPE.RESIZE, data });
    },
    mousemove: (data) => {
      emit({ type: EVENT_TYPE.MOUSEMOVE, data });
    },
    click: () => {
      emit({ type: EVENT_TYPE.CLICK, data: undefined });
    },
    init: (data, transfer) => {
      emit({ type: EVENT_TYPE.INIT, data }, transfer);
    },
    color: (data) => {
      emit({ type: EVENT_TYPE.COLOR, data });
    },
  };
}
