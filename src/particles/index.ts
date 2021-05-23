// @ts-ignore
import url from './particles.worker';

import { makeApi } from './api';
import type { Api } from './api';
import { makeOutsideBridge } from './bridge';

export function makeParticles(canvas: HTMLCanvasElement): Api {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const emit = makeOutsideBridge(url);

  const api = makeApi({ emit });

  const offscreen = canvas.transferControlToOffscreen
    ? canvas.transferControlToOffscreen()
    : canvas;

  api.init(
    {
      canvas: offscreen,
      width: canvas.width,
      height: canvas.height,
    },
    [offscreen],
  );

  return api;
}
