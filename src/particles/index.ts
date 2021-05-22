// @ts-ignore
import url from "./particles.worker";

import { makeProtocol, EVENT_TYPE } from "./protocol";
import { makeOutsideBridge } from "./bridge";

export function makeParticles(
  canvas: HTMLCanvasElement
): {
  click: () => void;
  move: (e: MouseEvent) => void;
  resize: () => void;
  color: (color: string) => void;
} {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const bridge = makeOutsideBridge(url);

  const protocol = makeProtocol(bridge.post);

  const offscreen = canvas.transferControlToOffscreen
    ? canvas.transferControlToOffscreen()
    : canvas;

  protocol.send(
    EVENT_TYPE.INIT,
    {
      canvas: offscreen,
      width: canvas.width,
      height: canvas.height,
    },
    [offscreen]
  );

  return {
    click: () => protocol.send(EVENT_TYPE.CLICK),
    move: (e) =>
      protocol.send(EVENT_TYPE.MOUSEMOVE, { x: e.clientX, y: e.clientY }),
    color: (color) => protocol.send(EVENT_TYPE.COLOR, { color }),
    resize: () =>
      protocol.send(EVENT_TYPE.RESIZE, {
        width: canvas.offsetWidth,
        height: canvas.offsetHeight,
      }),
  };
}
