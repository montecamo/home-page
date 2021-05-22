import Particles from "@theboringindustries/particles.js";

import { makeApi, EVENT_TYPE } from "./api";
import type {
  CanvasEvent,
  MoveEvent,
  ColorEvent,
  ClickEvent,
  InitEvent,
  ResizeEvent,
} from "./api";
import { makeInsideBridge } from "./bridge";

import { makeConfig } from "./config";

const on = makeInsideBridge<CanvasEvent>();

const api = makeApi({ on });

let particles: ReturnType<Particles>;

api.on<InitEvent["data"]>(EVENT_TYPE.INIT, (e) => {
  particles = new Particles(e.canvas, makeConfig("#000"), {
    pixelRatio: 2,
  });
});
api.on<ResizeEvent["data"]>(EVENT_TYPE.RESIZE, (e) => {
  if (particles) {
    particles.fn.vendors.resize(e.width, e.height);
  }
});
api.on<ClickEvent["data"]>(EVENT_TYPE.CLICK, () => {
  if (particles) {
    particles.fn.vendors.click();
  }
});
api.on<MoveEvent["data"]>(EVENT_TYPE.MOUSEMOVE, (e) => {
  if (particles) {
    particles.fn.vendors.mousemove(e.x, e.y);
  }
});

api.on<ColorEvent["data"]>(EVENT_TYPE.COLOR, (e) => {
  if (particles) {
    particles.particles.line_linked.color = e;
    particles.particles.color.value = e;
    particles.fn.particlesRefresh();
  }
});
