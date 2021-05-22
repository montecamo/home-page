import Particles from "@theboringindustries/particles.js";

import { makeProtocol, EVENT_TYPE } from "./protocol";
import type { CanvasEvent } from "./protocol";
import { makeInsideBridge } from "./bridge";

import { makeConfig } from "./config";

const bridge = makeInsideBridge<CanvasEvent>();
const protocol = makeProtocol(bridge.post, bridge.on);

let particles;

protocol.on(EVENT_TYPE.INIT, (e) => {
  if ("canvas" in e) {
    particles = new Particles(e.canvas, makeConfig("#000"), {
      pixelRatio: 2,
    });
  }
});
protocol.on(EVENT_TYPE.RESIZE, (e) => {
  if ("width" in e && particles) {
    particles.fn.vendors.resize(e.width, e.height);
  }
});
protocol.on(EVENT_TYPE.CLICK, () => {
  if (particles) {
    particles.fn.vendors.click();
  }
});
protocol.on(EVENT_TYPE.MOUSEMOVE, (e) => {
  if ("x" in e && particles) {
    particles.fn.vendors.mousemove(e.x, e.y);
  }
});
protocol.on(EVENT_TYPE.COLOR, (e) => {
  if ("color" in e && particles) {
    particles.particles.line_linked.color = e.color;
    particles.particles.color.value = e.color;
    particles.fn.particlesRefresh();
  }
});
