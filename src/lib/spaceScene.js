// Real-time WebGL2 space backdrop — procedural nebula, planet, stars, and drift.
// Opt-in alternative to the CSS starfield; inspired by the spirit of web-ocean
// (from-scratch GPU scene, no engine), but original space shading.

const VERT = `#version 300 es
in vec2 a_pos;
out vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

const FRAG = `#version 300 es
precision highp float;

in vec2 v_uv;
out vec4 fragColor;

uniform vec2 u_res;
uniform float u_time;
uniform float u_strength;
uniform vec2 u_look;
uniform float u_motion;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float hash3(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));
  p += dot(p, p.yzx + 19.19);
  return fract(p.x * p.y * p.z);
}

float noise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash3(i), hash3(i + vec3(1,0,0)), f.x),
        mix(hash3(i + vec3(0,1,0)), hash3(i + vec3(1,1,0)), f.x), f.y),
    mix(mix(hash3(i + vec3(0,0,1)), hash3(i + vec3(1,0,1)), f.x),
        mix(hash3(i + vec3(0,1,1)), hash3(i + vec3(1,1,1)), f.x), f.y),
    f.z
  );
}

float fbm(vec3 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = p * 2.07 + vec3(1.7, 9.2, 2.3);
    a *= 0.5;
  }
  return v;
}

mat3 lookAt(vec3 ro, vec3 ta) {
  vec3 f = normalize(ta - ro);
  vec3 r = normalize(cross(vec3(0.0, 1.0, 0.0), f));
  vec3 u = cross(f, r);
  return mat3(r, u, f);
}

vec3 starField(vec3 rd) {
  // Angular lattice → small round dots via smoothstep on angular distance
  vec3 col = vec3(0.0);
  float az = atan(rd.z, rd.x);
  float el = asin(clamp(rd.y, -1.0, 1.0));
  for (float layer = 0.0; layer < 2.0; layer++) {
    float scale = 28.0 + layer * 36.0;
    vec2 cell = floor(vec2(az, el) * scale);
    for (int j = -1; j <= 1; j++)
    for (int i = -1; i <= 1; i++) {
      vec2 g = cell + vec2(float(i), float(j));
      float n = hash(g + layer * 13.7);
      if (n < 0.86) continue;
      vec2 center = (g + vec2(hash(g + 1.7), hash(g + 3.1))) / scale;
      float dAz = abs(az - center.x);
      dAz = min(dAz, 6.2831853 - dAz);
      vec2 d = vec2(dAz, el - center.y);
      float dist = length(d) * scale;
      float radius = mix(0.045, 0.12, hash(g + 5.3));
      float bri = smoothstep(radius, 0.0, dist);
      bri *= bri;
      float tw = 0.75 + 0.25 * sin(u_time * (0.5 + n) * u_motion + n * 30.0);
      vec3 tint = mix(vec3(0.75, 0.85, 1.0), vec3(1.0, 0.9, 0.75), hash(g + 8.2));
      col += tint * bri * tw * (0.35 + layer * 0.25) * smoothstep(0.86, 1.0, n);
    }
  }
  return col;
}

vec3 nebula(vec3 rd) {
  vec3 p = rd * 2.0 + vec3(0.15, 0.0, u_time * 0.01 * u_motion);
  float n1 = fbm(p * 1.25);
  float n2 = fbm(p * 2.6 + vec3(4.1, -2.3, 1.7));
  float dens = smoothstep(0.48, 0.9, n1) * (0.4 + 0.6 * n2);

  vec3 cA = vec3(0.28, 0.18, 0.62);
  vec3 cB = vec3(0.08, 0.36, 0.48);
  vec3 cC = vec3(0.48, 0.22, 0.32);
  vec3 tint = mix(cA, cB, n2);
  tint = mix(tint, cC, smoothstep(0.45, 0.85, n1) * 0.4);

  float filaments = pow(abs(n1 - n2), 1.35);
  dens *= 0.55 + 0.6 * (1.0 - filaments);

  // Keep nebula toward the upper corners; calm the content column
  float band = smoothstep(0.05, 0.95, rd.y * 0.85 + abs(rd.x) * 0.35);
  return tint * dens * band * 0.62;
}

vec3 planet(vec3 rd, vec3 lightDir) {
  // Large world parked lower-left so the hero column stays clear
  vec3 center = vec3(-1.15, -0.55, 2.8);
  float radius = 1.15;
  vec3 ro = vec3(0.0);
  vec3 oc = ro - center;
  float b = dot(oc, rd);
  float c = dot(oc, oc) - radius * radius;
  float h = b * b - c;
  if (h < 0.0) {
    float ang = acos(clamp(dot(normalize(center), rd), -1.0, 1.0));
    float rim = asin(clamp(radius / length(center), 0.0, 1.0));
    float atm = smoothstep(rim + 0.07, rim - 0.005, ang);
    float scatter = pow(max(dot(rd, lightDir), 0.0), 3.5);
    return vec3(0.3, 0.48, 0.95) * atm * (0.12 + 0.5 * scatter);
  }
  float t = -b - sqrt(h);
  vec3 pos = ro + rd * t;
  vec3 nor = normalize(pos - center);

  float ndl = max(dot(nor, lightDir), 0.0);
  float day = smoothstep(-0.05, 0.35, ndl);

  float land = fbm(nor * 3.2 + vec3(2.0, 0.5, -1.0));
  float coast = smoothstep(0.4, 0.52, land);
  vec3 oceanCol = vec3(0.06, 0.14, 0.34);
  vec3 landCol = vec3(0.2, 0.34, 0.2);
  vec3 desert = vec3(0.4, 0.32, 0.2);
  vec3 albedo = mix(oceanCol, mix(landCol, desert, smoothstep(0.55, 0.78, land)), coast);

  float clouds = smoothstep(0.58, 0.82, fbm(nor * 5.5 + vec3(u_time * 0.008 * u_motion, 0.2, -0.4)));
  albedo = mix(albedo, vec3(0.82, 0.86, 0.95), clouds * 0.5 * day);

  vec3 diffuse = albedo * (0.08 + 0.92 * ndl);
  vec3 halfV = normalize(lightDir - rd);
  float water = 1.0 - coast;
  float spec = pow(max(dot(nor, halfV), 0.0), 56.0) * water * ndl;
  diffuse += vec3(0.55, 0.72, 1.0) * spec * 0.4;

  float fres = pow(1.0 - max(dot(nor, -rd), 0.0), 2.6);
  vec3 atm = vec3(0.32, 0.55, 1.0) * fres * (0.3 + 0.7 * day);

  // Soft night-side glow instead of gridded city squares
  float nightGlow = (1.0 - day) * smoothstep(0.45, 0.7, fbm(nor * 8.0 + 3.0));
  diffuse += vec3(0.35, 0.28, 0.55) * nightGlow * 0.12;

  return diffuse + atm;
}

vec3 sunDisc(vec3 rd, vec3 sunDir) {
  float d = max(dot(rd, sunDir), 0.0);
  vec3 core = vec3(1.0, 0.96, 0.88) * smoothstep(0.9995, 0.99997, d) * 2.8;
  vec3 glow = vec3(1.0, 0.72, 0.4) * pow(d, 220.0) * 0.9;
  vec3 haze = vec3(0.55, 0.4, 0.85) * pow(d, 14.0) * 0.18;
  return core + glow + haze;
}

vec3 shootingStar(vec3 rd) {
  if (u_motion < 0.5) return vec3(0.0);
  float cycle = mod(u_time * 0.07, 11.0);
  if (cycle > 0.9) return vec3(0.0);
  float t = cycle / 0.9;
  vec3 a = normalize(vec3(-0.55, 0.62, 0.35));
  vec3 b = normalize(vec3(0.65, 0.05, 0.5));
  vec3 p = normalize(mix(a, b, t));
  float d = max(dot(rd, p), 0.0);
  float head = pow(d, 6000.0);
  float trail = pow(d, 280.0) * (1.0 - t);
  return vec3(0.9, 0.95, 1.0) * (head * 1.6 + trail * 0.25) * (1.0 - t);
}

vec3 tonemap(vec3 x) {
  const float a = 2.51;
  const float b = 0.03;
  const float c = 2.43;
  const float d = 0.59;
  const float e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / u_res.y;
  uv *= 1.0 + 0.025 * dot(uv, uv);

  float yaw = -0.35 + u_look.x + u_time * 0.006 * u_motion;
  float pitch = -0.08 + u_look.y + sin(u_time * 0.05 * u_motion) * 0.02;
  vec3 ro = vec3(0.0);
  vec3 ta = vec3(sin(yaw) * cos(pitch), sin(pitch), cos(yaw) * cos(pitch));
  mat3 ca = lookAt(ro, ta);
  vec3 rd = normalize(ca * vec3(uv, 1.45));

  // Light the face we see so continents/clouds read clearly
  vec3 sunDir = normalize(vec3(0.15, 0.45, 0.35));

  vec3 col = vec3(0.008, 0.01, 0.025);
  col += nebula(rd);
  col += starField(rd);
  col += planet(rd, sunDir);
  col += sunDisc(rd, sunDir);
  col += shootingStar(rd);

  // Dim the content column so hero copy stays crisp
  float safe = smoothstep(0.15, 0.85, length(uv * vec2(1.35, 0.95)));
  col *= mix(0.55, 1.0, safe);

  float vig = smoothstep(1.4, 0.3, length(uv * vec2(1.05, 1.0)));
  col *= mix(0.7, 1.0, vig);

  col *= u_strength;
  col = tonemap(col);
  float dither = (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  col += dither;

  fragColor = vec4(col, 1.0);
}`;

function compile(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(info || "Shader compile failed");
  }
  return shader;
}

function createProgram(gl, vertSrc, fragSrc) {
  const vs = compile(gl, gl.VERTEX_SHADER, vertSrc);
  const fs = compile(gl, gl.FRAGMENT_SHADER, fragSrc);
  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  gl.deleteShader(vs);
  gl.deleteShader(fs);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error(info || "Program link failed");
  }
  return program;
}

/**
 * @param {HTMLCanvasElement} canvas
 * @returns {{ resize: () => void, setStrength: (n: number) => void, setReducedMotion: (b: boolean) => void, setLook: (x: number, y: number) => void, start: () => void, stop: () => void, destroy: () => void } | null}
 */
export function createSpaceScene(canvas) {
  const gl = canvas.getContext("webgl2", {
    alpha: false,
    antialias: false,
    depth: false,
    stencil: false,
    preserveDrawingBuffer: true,
    powerPreference: "high-performance",
  });
  if (!gl) return null;

  let program;
  try {
    program = createProgram(gl, VERT, FRAG);
  } catch {
    return null;
  }

  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(program, "a_pos");
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const uniforms = {
    res: gl.getUniformLocation(program, "u_res"),
    time: gl.getUniformLocation(program, "u_time"),
    strength: gl.getUniformLocation(program, "u_strength"),
    look: gl.getUniformLocation(program, "u_look"),
    motion: gl.getUniformLocation(program, "u_motion"),
  };

  let strength = 1;
  let motion = 1;
  let lookX = 0;
  let lookY = 0.05;
  let raf = 0;
  let running = false;
  let startMs = performance.now();
  let frozenTime = 0;

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    const w = Math.max(1, Math.floor(canvas.clientWidth * dpr));
    const h = Math.max(1, Math.floor(canvas.clientHeight * dpr));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
  };

  const draw = (now) => {
    if (!running) return;
    raf = requestAnimationFrame(draw);
    resize();
    const t = motion > 0.5 ? (now - startMs) * 0.001 : frozenTime;
    if (motion <= 0.5) frozenTime = frozenTime || (now - startMs) * 0.001;

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.useProgram(program);
    gl.bindVertexArray(vao);
    gl.uniform2f(uniforms.res, canvas.width, canvas.height);
    gl.uniform1f(uniforms.time, t);
    gl.uniform1f(uniforms.strength, strength);
    gl.uniform2f(uniforms.look, lookX, lookY);
    gl.uniform1f(uniforms.motion, motion);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };

  const onVisibility = () => {
    if (document.hidden) {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    } else if (running && !raf) {
      startMs = performance.now() - frozenTime * 1000;
      raf = requestAnimationFrame(draw);
    }
  };

  document.addEventListener("visibilitychange", onVisibility);

  return {
    resize,
    setStrength(value) {
      strength = value;
    },
    setReducedMotion(enabled) {
      motion = enabled ? 0 : 1;
    },
    setLook(x, y) {
      lookX = x;
      lookY = y;
    },
    start() {
      if (running) return;
      running = true;
      startMs = performance.now() - frozenTime * 1000;
      raf = requestAnimationFrame(draw);
    },
    stop() {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    },
    destroy() {
      this.stop();
      document.removeEventListener("visibilitychange", onVisibility);
      gl.deleteBuffer(buf);
      gl.deleteVertexArray(vao);
      gl.deleteProgram(program);
    },
  };
}

export function isSpaceSceneSupported() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2"));
  } catch {
    return false;
  }
}
