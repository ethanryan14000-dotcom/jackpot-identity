/* Jackpot Identity - game script.
   Loaded by index.html. No dependencies, no external assets, no network.
   Every identifier referenced here is defined in this file. */

(function () {
'use strict';

/* ============================================================== CONTENT == */
var REGIONS = [
  {k:'butt',n:'BUTT',i:'A',band:[0,4]},
  {k:'hips',n:'HIPS',i:'B',band:[2,99]},
  {k:'waist',n:'WAIST',i:'C',band:[2,99]},
  {k:'thighs',n:'THIGHS',i:'D',band:[2,99]},
  {k:'chest',n:'CHEST',i:'E',band:[3,99]},
  {k:'legs',n:'LEGS',i:'F',band:[4,99]},
  {k:'feet',n:'FEET',i:'G',band:[4,99]},
  {k:'hands',n:'GLOVES',i:'H',band:[5,99]},
  {k:'pendant',n:'BLUE STAR',i:'I',band:[5,99]},
  {k:'face',n:'FACE',i:'J',band:[6,99]},
  {k:'eyes',n:'GOLDEN EYES',i:'K',band:[7,99]},
  {k:'hair',n:'SNOW-WHITE HAIR',i:'L',band:[7,99]},
  {k:'voice',n:'VOICE',i:'M',band:[8,99]},
  {k:'headband',n:'GOLD HEADBAND',i:'N',band:[9,99]}
];
var SEQ = {
  butt:['Warmth floods the seat under you, spreading up through your hips like water finding its level.',
    'The cushion gives differently. Wider. Heavier. The chair creaks a complaint it has never made before.',
    'Your trousers pull tight, then re-weave into a black-and-white skirt hem across your lap.',
    'You look down. The silhouette below you is not the one you sat down in.'],
  hips:['Bone and muscle slide outward without pain - your hips widening into a shape that seats differently against the chair.',
    'Your stance, even sitting, changes. The seat back meets a curve it does not recognise.',
    'The skirt settles over a waist-to-hip line you have never seen on yourself.'],
  waist:['Something cinches inside you, tighter than any belt.',
    'Your belt pops open on its own and dissolves into blue light before it lands.',
    'The dress moulds to a cinched hourglass.'],
  thighs:['Your thighs thicken and soften, filling out in a rush of warmth.',
    'The skirt splits along the left side - a long slit opening to reveal sheer black tights beneath.',
    'Sitting, your thighs press together for the first time, full against the narrow stool.'],
  chest:['The shirt front swells outward, buttons straining - then dissolving into thread and light.',
    'A heavy, full bust forms beneath, and the dress bodice knits itself around it.',
    'The weight settles a half-second late. Your lap is only partly visible now.'],
  legs:['Your legs lengthen, calves rising in a smooth flow of light.',
    'Trouser legs darken and thin, wrapping down to the ankle as sheer black tights.',
    'The stool runs short under you now. Your knees are somewhere new.'],
  feet:['Your shoes shrink around your feet and rise in the heel, arching you up.',
    'White leather with gold trim forms over the instep. Your soles can no longer sit flat.',
    'You stand on potential energy. Every shift of weight clicks.'],
  hands:['Your fingers slender and lengthen, nails brightening.',
    'The sleeves dissolve, and blue opera gloves climb your arms from the fingertips upward.',
    'Black fingertips close on the lever. They are not the hands that pulled it first.'],
  face:['In the machine glass: your jaw softens, cheekbones lift, lips fill.',
    'The reflection blinks a half-second after you do.',
    'It waits for you to smile first. Then it does.'],
  eyes:['Gold bleeds outward from the centre of your irises, ring by ring.',
    'The room sharpens - edges of the machine glow with a light only you can now see.',
    'The cabinet artwork had the same eyes all along.'],
  hair:['Colour drains upward from the ends of your hair - brown, then grey, then snow.',
    'It grows past your shoulders, weightless, drifting across the corner of your vision.',
    'White hair spills over one shoulder, catching the blue light of the reels.'],
  voice:['Something shifts in your throat, warm and small.',
    'You say "what" - and it comes out in a voice you have never heard from inside your own head.'],
  pendant:['A blue star-shaped pendant forms against the base of your neckline, warm as a held hand.',
    'It pulses once, and a memory that is not yours surfaces.'],
  headband:['Gold settles across your white hair with the weight of a crown that has been waiting.',
    'Every bulb in the casino turns to face you at once.',
    'The machine goes quiet. It has nothing left to sell you.']
};
var MONO = {
  butt:{a:['Huh. That is actually comfortable.'],r:['What the hell. What the hell.'],n:['Something moved under the seat.']},
  hips:{a:['Wider. I can feel it against the stool.'],r:['My trousers are barely holding on.'],n:['The seat fits differently now.']},
  waist:{a:['I can almost reach around myself.'],r:['My belt just undid itself.'],n:['Something cinched.']},
  thighs:{a:['Fuller. Softer. I do not hate it.'],r:['They are touching. My thighs are touching.'],n:['Something changed about my legs.']},
  chest:{a:['Well. That is a lot.'],r:['I cannot see my own lap anymore.'],n:['The weight is different.']},
  legs:{a:['Longer. I feel taller sitting down.'],r:['The stool is too short now.'],n:['My knees are somewhere else.']},
  feet:{a:['Heels. I am wearing heels.'],r:['I cannot walk in these.'],n:['My shoes changed shape.']},
  hands:{a:['Gloves to the elbow. Elegant.'],r:['My hands. Those are my hands.'],n:['The lever feels different.']},
  face:{a:['That is a good face.'],r:['That is not me.'],n:['The glass shows something off.']},
  eyes:{a:['Gold. Of course it is gold.'],r:['My eyes are gold. My EYES are gold.'],n:['The colour in the mirror is wrong.']},
  hair:{a:['White. All the way down.'],r:['My hair is going white.'],n:['There is white in my hair.']},
  voice:{a:['Oh. That is my voice now.'],r:['That is not my voice.'],n:['That came out wrong.']},
  pendant:{a:['A star. It is warm.'],r:['Get it off. It will not come off.'],n:['A weight on my chest that was not there.']},
  headband:{a:['It fits. It was always going to fit.'],r:['No. No, not the crown.'],n:['Something gold settled on my head.']}
};
var MACH = {
  butt:'FIRST PRIZE APPLIED. PLEASE REMAIN SEATED.',
  hips:'FRAME REBUILT. THANK YOU FOR YOUR PATIENCE.',
  waist:'TAPER APPLIED. MIND YOUR POSTURE.',
  thighs:'ASYMMETRY DETECTED. RESOLVE ON NEXT SPIN.',
  chest:'UPGRADE COMPLETE. MIND THE VIEW.',
  legs:'FOUNDATION RE-LAID.',
  feet:'HEIGHT ADJUSTED. WALKING IS NOW OPTIONAL.',
  hands:'DEXTERITY IMPROVED. LEVER MAY FEEL DIFFERENT.',
  face:'REFLECTION CALIBRATING.',
  eyes:'OPTICS MATCHED TO CABINET ARTWORK.',
  hair:'COLOUR CORRECTED TO HOUSE SPECIFICATION.',
  voice:'NEW VOICE. NEW TERMS.',
  pendant:'PENDANT LOCKED. MEMORY FRAGMENT AVAILABLE.',
  headband:'THE HOUSE PRESENTS ITS JACKPOT.'
};
var IDLE = ['PLEASE REMAIN SEATED.','YOUR FIGURE IS APPRECIATED.','THE HOUSE THANKS YOU.',
  'NO REFUNDS ON CURVES.','COMPLIMENTARY UPGRADE AVAILABLE.','STATISTICALLY, YOU ARE ALREADY WINNING.'];
var RESL = ['HOSTILITY IS NOT A STRATEGY.','THE EXIT AISLE HAS BEEN REARRANGED.','STRUGGLING INCREASES THE JACKPOT.'];
var ACCL = ['ACCEPTANCE NOTED. FAVOURABLE ODDS APPLIED.','A PLEASURE.','THE HOUSE LIKES A GOOD SPORT.'];
var CLUES = ['SHE PULLED THIS LEVER 4,102 TIMES.','ARTWORK UPDATED TO MATCH CURRENT CUSTOMER.',
  'THE STOOL IS BOLTED DOWN. SO ARE YOU.','THE MIRROR RUNS LATE BY DESIGN.'];
var MEMORY = [
  'A woman in a black-and-white dress sits where you sit, pulling the lever with blue-gloved hands. She is laughing. The reflection shows only her golden eyes.',
  'The service log, in gold light: CUSTOMER 4,102. STATUS: JACKPOT. RETURNED TO CABINET. NEXT CUSTOMER SELECTED BY PROXIMITY.',
  'A hand placing a token into an empty pocket. Your pocket. It was always going to be your pocket.'
];
var PORTRAIT = ['GOLDEN EYES - SNOW-WHITE HAIR',
  'HOURGLASS FIGURE - FULL BUST - NARROW WAIST - WIDE HIPS',
  'BLACK-AND-WHITE TWO-TONED DRESS',
  'PLUNGING NECKLINE - LEFT-THIGH SLIT OVER BLACK TIGHTS',
  'BLUE OPERA GLOVES, BLACK FINGERTIPS - WHITE HEELS, GOLD ACCENTS',
  'BLUE STAR PENDANT - GOLD HEADBAND'];
var ENDINGS = [
  {id:'break',kick:'ENDING - THE HOUSE LOSES',title:'BREAK THE MACHINE',
   test:function(s){return s.hostility>=2||s.autonomy>=70;},
   text:'You do not spin. You stand and put both hands on the cabinet.\n\nThe glass cracks along thirty years of gold paint. Bulbs blow out in a wave down the aisle. The reels spin free, unpowered, faster and faster.\n\nThe machine dies with a sound like a till closing. The transformation does not reverse - nothing here is reversible - but the reflection in the broken glass finally moves when you move.\n\nYou own the body you have, and no one is going to sell you the rest.'},
  {id:'new_self',kick:'ENDING - VOLUNTARY',title:'NEW SELF',
   test:function(s){return s.identity>=60&&s.progress>=0.95;},
   text:'You do not push the button. You let the last reel land.\n\nThe headband settles. The dress closes over the last of the old silhouette like a book finishing its own sentence.\n\nNothing leaves you. That is the part the machine never advertises. You remember being him, and you remember it from inside a body that fits like a hand in a glove.\n\nYou leave the way a winner is supposed to: without looking back.'},
  {id:'cash_out',kick:'ENDING - THE SHORT WALK',title:'CASH OUT',test:function(){return true;},
   text:'You slide off the stool and walk. The exit sign hangs where it always hung.\n\nYou reach the doors partway changed and entirely your own. The casino does not stop you. It only dims, one machine at a time, behind you.\n\nOutside, the air is cold and ordinary. You will find out what your face looks like eventually, in a petrol station mirror, at four in the morning.\n\nYou came in as one person. You are leaving as one person. Only the paperwork disagrees.'}
];
var CHOICES = [
  {k:'accept',n:'ACCEPT',desc:'Better odds. Identity up, autonomy down.',id:5,au:-5,h:0,bonus:0.14},
  {k:'resist',n:'RESIST',desc:'Worse odds. The house notices.',id:-2,au:5,h:1,bonus:-0.12},
  {k:'look',n:'INVESTIGATE',desc:'Spend the spin looking instead. Reveals a clue.',id:0,au:0,h:0,bonus:-1},
  {k:'double',n:'DOUBLE DOWN',desc:'Risk two regions at once.',id:8,au:-10,h:1,bonus:0.22}
];

/* ================================================================ AUDIO == */
var A = {
  ctx:null,master:null,muted:false,
  init:function(){
    if (this.ctx) return;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.5;
    this.master.connect(this.ctx.destination);
  },
  resume:function(){ if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); },
  tone:function(f,dur,type,peak){
    if (!this.ctx || this.muted) return;
    var o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.type = type || 'sine'; o.frequency.value = f;
    o.connect(g); g.connect(this.master);
    var t0 = this.ctx.currentTime;
    g.gain.setValueAtTime(0.0001,t0);
    g.gain.exponentialRampToValueAtTime(peak||0.14,t0+0.01);
    g.gain.exponentialRampToValueAtTime(0.0001,t0+(dur||0.2));
    o.start(t0); o.stop(t0+(dur||0.2)+0.05);
  },
  tick:function(){ this.tone(700+Math.random()*200,0.03,'square',0.04); },
  stop:function(i){ this.tone(250-i*30,0.15,'triangle',0.13); },
  lever:function(){ this.tone(88,0.26,'sine',0.16); },
  win:function(){ for (var i=0;i<4;i++) this.tone(523*Math.pow(1.26,i),0.3,'triangle',0.12); },
  heel:function(){ this.tone(320,0.05,'square',0.09); },
  morph:function(s2){ this.tone(180+s2*200,0.5,'triangle',0.11); }
};

/* ======================================================== GL BOOTSTRAP == */
var canvas = document.getElementById('c');
var gl = null;
try {
  gl = canvas.getContext('webgl', {antialias:true}) || canvas.getContext('experimental-webgl');
} catch (e) { gl = null; }

if (!gl) {
  window.__fatal('This browser has no working WebGL, so the 3D scene cannot be drawn.',
    'Update your graphics driver, or open this page in Chrome or Edge. Visit chrome://gpu to see what is disabled.');
}

/* ==================================================== SHADER (no arrays) == */
var VERT_SRC = [
  'attribute vec3 aPos;',
  'attribute vec3 aNrm;',
  'uniform mat4 uProj;',
  'uniform mat4 uView;',
  'uniform mat4 uModel;',
  'uniform mat3 uNrmMat;',
  'varying vec3 vN;',
  'varying vec3 vW;',
  'void main(){',
  '  vec4 wp = uModel * vec4(aPos, 1.0);',
  '  vW = wp.xyz;',
  '  vN = normalize(uNrmMat * aNrm);',
  '  gl_Position = uProj * uView * wp;',
  '}'
].join('\n');

var FRAG_SRC = [
  'precision mediump float;',
  'uniform vec3 uBase;',
  'uniform vec3 uEmis;',
  'uniform vec3 uGlowCol;',
  'uniform vec3 uEye;',
  'uniform float uEmisAmt;',
  'uniform float uGlow;',
  'uniform float uAlpha;',
  'varying vec3 vN;',
  'varying vec3 vW;',
  'void main(){',
  '  vec3 N = normalize(vN);',
  '  vec3 L1 = normalize(vec3(0.55, 1.0, 0.5));',
  '  vec3 L2 = normalize(vec3(-0.6, 0.45, -0.35));',
  '  float d = max(dot(N, L1), 0.0) * 0.85 + max(dot(N, L2), 0.0) * 0.35 + 0.30;',
  '  vec3 V = normalize(uEye - vW);',
  '  float fres = pow(1.0 - max(dot(N, V), 0.0), 2.6);',
  '  vec3 col = uBase * d + uEmis * uEmisAmt;',
  '  col += uGlowCol * (uGlow * 0.85 + fres * uGlow * 0.9);',
  '  gl_FragColor = vec4(col, uAlpha);',
  '}'
].join('\n');

function makeShader(type, src) {
  var s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    var log = gl.getShaderInfoLog(s);
    console.error('[jackpot] shader failed:', log, src);
    return null;
  }
  return s;
}
var prog = null;
if (gl) {
  var vs = makeShader(gl.VERTEX_SHADER, VERT_SRC);
  var fs = makeShader(gl.FRAGMENT_SHADER, FRAG_SRC);
  if (!vs || !fs) {
    window.__fatal('The 3D shaders failed to compile.', 'This is a bug in the game. Press F12 and copy the console output.');
  } else {
    prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error('[jackpot] link failed:', gl.getProgramInfoLog(prog));
      window.__fatal('The 3D shader program failed to link.', 'This is a bug in the game. Press F12 and copy the console output.');
      prog = null;
    }
  }
}

var U = {};
var ATTR = {};
if (prog) {
  var unames = ['uProj','uView','uModel','uNrmMat','uBase','uEmis','uGlowCol','uEye','uEmisAmt','uGlow','uAlpha'];
  for (var ui = 0; ui < unames.length; ui++) U[unames[ui]] = gl.getUniformLocation(prog, unames[ui]);
  ATTR.aPos = gl.getAttribLocation(prog, 'aPos');
  ATTR.aNrm = gl.getAttribLocation(prog, 'aNrm');
  if (ATTR.aPos < 0 || ATTR.aNrm < 0) {
    console.error('[jackpot] attributes not bound', ATTR);
    window.__fatal('The 3D vertex attributes could not be bound.', 'This is a bug in the game. Press F12 and copy the console output.');
  }
}

/* ============================================================ MATH (4x4) == */
function mid(){ return new Float32Array([1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1]); }
function mmul(a,b){
  var o = new Float32Array(16), i, j;
  for (i=0;i<4;i++) for (j=0;j<4;j++){
    o[i*4+j] = a[j]*b[i*4] + a[4+j]*b[i*4+1] + a[8+j]*b[i*4+2] + a[12+j]*b[i*4+3];
  }
  return o;
}
function mtrans(x,y,z){ var m = mid(); m[12]=x; m[13]=y; m[14]=z; return m; }
function mscale(x,y,z){ var m = mid(); m[0]=x; m[5]=y; m[10]=z; return m; }
function mrotY(a){ var m = mid(), c=Math.cos(a), s=Math.sin(a); m[0]=c; m[2]=-s; m[8]=s; m[10]=c; return m; }
function mrotX(a){ var m = mid(), c=Math.cos(a), s=Math.sin(a); m[5]=c; m[6]=s; m[9]=-s; m[10]=c; return m; }
function mpersp(fov, asp, near, far){
  var f = 1/Math.tan(fov/2), nf = 1/(near-far), m = new Float32Array(16);
  m[0] = f/asp; m[5] = f; m[10] = (far+near)*nf; m[11] = -1; m[14] = 2*far*near*nf;
  return m;
}
function mlook(ex,ey,ez, cx,cy,cz){
  var zx = ex-cx, zy = ey-cy, zz = ez-cz;
  var zl = Math.hypot(zx,zy,zz) || 1; zx/=zl; zy/=zl; zz/=zl;
  var xx = zz, xy = 0, xz = -zx;
  var xl = Math.hypot(xx,xy,xz) || 1; xx/=xl; xy/=xl; xz/=xl;
  var yx = zy*xz - zz*xy, yy = zz*xx - zx*xz, yz = zx*xy - zy*xx;
  return new Float32Array([
    xx, yx, zx, 0,
    xy, yy, zy, 0,
    xz, yz, zz, 0,
    -(xx*ex + xy*ey + xz*ez),
    -(yx*ex + yy*ey + yz*ez),
    -(zx*ex + zy*ey + zz*ez), 1
  ]);
}
function mnrm(m){
  var a=m[0],b=m[1],c=m[2], d=m[4],e=m[5],f=m[6], g=m[8],h2=m[9],i=m[10];
  var A=e*i-f*h2, B=f*g-d*i, C=d*h2-e*g;
  var det = a*A + b*B + c*C; if (Math.abs(det) < 1e-8) det = 1e-8;
  var id = 1/det;
  return new Float32Array([
    A*id, B*id, C*id,
    (c*h2-b*i)*id, (a*i-c*g)*id, (b*g-a*h2)*id,
    (b*f-c*e)*id, (c*d-a*f)*id, (a*e-b*d)*id
  ]);
}
function lerp(a,b,t){ return a + (b-a)*t; }

/* ======================================================== MESH BUILDERS == */
function buildMesh(pos, nrm, idx) {
  var m = { n: idx.length };
  var inter = new Float32Array(pos.length * 2), i;
  for (i = 0; i < pos.length/3; i++) {
    inter[i*6+0] = pos[i*3+0]; inter[i*6+1] = pos[i*3+1]; inter[i*6+2] = pos[i*3+2];
    inter[i*6+3] = nrm[i*3+0]; inter[i*6+4] = nrm[i*3+1]; inter[i*6+5] = nrm[i*3+2];
  }
  m.vbo = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, m.vbo);
  gl.bufferData(gl.ARRAY_BUFFER, inter, gl.STATIC_DRAW);
  m.ibo = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, m.ibo);
  if (pos.length/3 > 65535) {
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(idx), gl.STATIC_DRAW);
    m.type = gl.UNSIGNED_INT;
  } else {
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(idx), gl.STATIC_DRAW);
    m.type = gl.UNSIGNED_SHORT;
  }
  m.stride = 24;
  return m;
}
function mTube(profile, sides, capBottom, capTop) {
  var pos = [], nrm = [], idx = [], rings = profile.length, r, i;
  for (r = 0; r < rings; r++) {
    var rad = profile[r][0], y = profile[r][1];
    var nx = profile[Math.min(r+1, rings-1)], pv = profile[Math.max(r-1, 0)];
    var dy = nx[1] - pv[1], dr = nx[0] - pv[0];
    var nl = Math.hypot(dr, dy) || 1;
    for (i = 0; i <= sides; i++) {
      var a = (i/sides) * Math.PI * 2, cx = Math.cos(a), cz = Math.sin(a);
      pos.push(cx*rad, y, cz*rad);
      nrm.push(cx*(dy/nl), -(dr/nl), cz*(dy/nl));
    }
  }
  for (r = 0; r < rings-1; r++) {
    for (i = 0; i < sides; i++) {
      var a2 = r*(sides+1) + i, b2 = a2 + sides + 1;
      idx.push(a2, b2, a2+1, a2+1, b2, b2+1);
    }
  }
  if (capBottom) {
    var c0 = pos.length/3;
    pos.push(0, profile[0][1], 0); nrm.push(0,-1,0);
    for (i = 0; i < sides; i++) idx.push(c0, i, i+1);
  }
  if (capTop) {
    var base = (rings-1)*(sides+1), c1 = pos.length/3;
    pos.push(0, profile[rings-1][1], 0); nrm.push(0,1,0);
    for (i = 0; i < sides; i++) idx.push(c1, base+i+1, base+i);
  }
  return buildMesh(pos, nrm, idx);
}
function mSphere(seg, ring) {
  var pos = [], nrm = [], idx = [], j, i;
  for (j = 0; j <= ring; j++) {
    var phi = (j/ring) * Math.PI;
    for (i = 0; i <= seg; i++) {
      var th = (i/seg) * Math.PI * 2;
      var nx = Math.sin(phi)*Math.cos(th), ny = Math.cos(phi), nz = Math.sin(phi)*Math.sin(th);
      pos.push(nx, ny, nz); nrm.push(nx, ny, nz);
    }
  }
  for (j = 0; j < ring; j++) {
    for (i = 0; i < seg; i++) {
      var a = i + j*(seg+1), b = a + seg + 1;
      idx.push(a, b, a+1, a+1, b, b+1);
    }
  }
  return buildMesh(pos, nrm, idx);
}
function mBox() {
  var f = [
    [[-0.5,-0.5, 0.5],[0.5,-0.5, 0.5],[0.5,0.5, 0.5],[-0.5,0.5, 0.5],[0,0,1]],
    [[ 0.5,-0.5,-0.5],[-0.5,-0.5,-0.5],[-0.5,0.5,-0.5],[0.5,0.5,-0.5],[0,0,-1]],
    [[ 0.5,-0.5, 0.5],[ 0.5,-0.5,-0.5],[ 0.5,0.5,-0.5],[ 0.5,0.5, 0.5],[1,0,0]],
    [[-0.5,-0.5,-0.5],[-0.5,-0.5, 0.5],[-0.5,0.5, 0.5],[-0.5,0.5,-0.5],[-1,0,0]],
    [[-0.5,0.5, 0.5],[ 0.5,0.5, 0.5],[ 0.5,0.5,-0.5],[-0.5,0.5,-0.5],[0,1,0]],
    [[-0.5,-0.5,-0.5],[ 0.5,-0.5,-0.5],[ 0.5,-0.5, 0.5],[-0.5,-0.5, 0.5],[0,-1,0]]
  ];
  var pos = [], nrm = [], idx = [], k, base = 0;
  for (var q = 0; q < f.length; q++) {
    var face = f[q];
    for (k = 0; k < 4; k++) {
      pos.push(face[k][0], face[k][1], face[k][2]);
      nrm.push(face[4][0], face[4][1], face[4][2]);
    }
    idx.push(base, base+1, base+2, base, base+2, base+3);
    base += 4;
  }
  return buildMesh(pos, nrm, idx);
}
function mPlane() {
  return buildMesh(
    [-0.5,0,-0.5, 0.5,0,-0.5, 0.5,0,0.5, -0.5,0,0.5],
    [0,1,0, 0,1,0, 0,1,0, 0,1,0],
    [0,1,2, 0,2,3]
  );
}

var G = null;
if (gl && prog) {
  G = {};
  G.torso  = mTube([[0.115,-0.5],[0.118,-0.25],[0.125,0.0],[0.135,0.25],[0.145,0.5]], 20, true, true);
  G.ball   = mSphere(16, 12);
  G.limb   = mTube([[0.02,-0.5],[0.9,-0.4],[1.0,-0.15],[1.0,0.15],[0.9,0.4],[0.02,0.5]], 12, true, true);
  G.cube   = mBox();
  G.quad   = mPlane();
  G.seat   = mTube([[0.04,-0.5],[1,-0.45],[1,0.45],[0.04,0.5]], 20, true, true);
  G.band   = mTube([[1,-0.06],[1.08,0],[1,0.06]], 20, false, false);
  var need = ['torso','ball','limb','cube','quad','seat','band'], gi;
  for (gi = 0; gi < need.length; gi++) {
    if (!G[need[gi]]) {
      console.error('[jackpot] mesh missing:', need[gi]);
      window.__fatal('A 3D model failed to build: ' + need[gi], 'This is a bug in the game.');
    }
  }
}

/* ============================================================== DRAWING == */
function draw(mesh, model, base, emis, emisAmt, glowCol, glow, alpha) {
  if (!mesh || !prog) return;
  gl.bindBuffer(gl.ARRAY_BUFFER, mesh.vbo);
  gl.enableVertexAttribArray(ATTR.aPos);
  gl.vertexAttribPointer(ATTR.aPos, 3, gl.FLOAT, false, mesh.stride, 0);
  gl.enableVertexAttribArray(ATTR.aNrm);
  gl.vertexAttribPointer(ATTR.aNrm, 3, gl.FLOAT, false, mesh.stride, 12);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mesh.ibo);
  gl.uniformMatrix4fv(U.uModel, false, model);
  gl.uniformMatrix3fv(U.uNrmMat, false, mnrm(model));
  gl.uniform3f(U.uBase, base[0], base[1], base[2]);
  gl.uniform3f(U.uEmis, emis[0], emis[1], emis[2]);
  gl.uniform1f(U.uEmisAmt, emisAmt);
  gl.uniform3f(U.uGlowCol, glowCol[0], glowCol[1], glowCol[2]);
  gl.uniform1f(U.uGlow, glow);
  gl.uniform1f(U.uAlpha, alpha === undefined ? 1 : alpha);
  gl.drawElements(gl.TRIANGLES, mesh.n, mesh.type, 0);
}

/* ================================================================ STATE == */
function fresh(seed) {
  var body = {}, i;
  for (i = 0; i < REGIONS.length; i++) body[REGIONS[i].k] = 0;
  return {
    seed: seed || Math.floor(Math.random()*1e9),
    spin:0, body:body, progress:0, identity:0, autonomy:100, hostility:0,
    choice:'accept', memories:0, clues:0, canStand:false, standing:false,
    seated:true, over:false, finished:false, gold:0, lastTriple:null,
    sinceProgress:0
  };
}
var S = fresh();
var rngS = (S.seed ^ 0x5eed) >>> 0 || 1;
function rnd(){
  rngS ^= rngS << 13; rngS >>>= 0;
  rngS ^= rngS >> 17;
  rngS ^= rngS << 5;  rngS >>>= 0;
  return rngS / 4294967296;
}
function b(k){ return Math.max(0, Math.min(1, S.body[k] || 0)); }
function recompute() {
  var sum = 0, i;
  for (i = 0; i < REGIONS.length; i++) sum += Math.min(1, S.body[REGIONS[i].k] || 0);
  S.progress = sum / REGIONS.length;
  S.canStand = b('feet') >= 1 && b('legs') >= 0.5;
}
function regOf(k){
  for (var i = 0; i < REGIONS.length; i++) if (REGIONS[i].k === k) return REGIONS[i];
  return null;
}
function pool(){
  var out = [], i, r;
  for (i = 0; i < REGIONS.length; i++) {
    r = REGIONS[i];
    if (b(r.k) >= 1) continue;
    if (S.spin < r.band[0] || S.spin > r.band[1]) continue;
    if (r.k === 'butt' && S.spin !== 0) continue;
    out.push(r);
  }
  if (!out.length) for (i = 0; i < REGIONS.length; i++) if (b(REGIONS[i].k) < 1) out.push(REGIONS[i]);
  return out;
}
function weightOf(r){
  var w = 8;
  if (r.k === S.lastTriple) w *= 0.25;
  if (b(r.k) > 0 && b(r.k) < 1) w *= 1.6;
  return w;
}
function pick(list){
  if (!list.length) return null;
  var total = 0, i, roll;
  for (i = 0; i < list.length; i++) total += weightOf(list[i]);
  roll = rnd() * total;
  for (i = 0; i < list.length; i++) { roll -= weightOf(list[i]); if (roll <= 0) return list[i]; }
  return list[list.length-1];
}

/* ================================================================= CAMERA == */
var cam = {yaw:Math.PI, pitch:-0.18, x:0, z:0.92, bob:0, phase:0, side:1};
var SEAT_Y = 1.58, STAND_Y = 1.68;

/* ================================================================= INPUT == */
var keys = {}, drag = false, lx = 0, ly = 0;
window.addEventListener('keydown', function(e){
  keys[e.code] = true;
  if (e.code === 'Space'){ e.preventDefault(); doSpin(); }
  if (e.code === 'KeyF') stand();
  if (e.code === 'KeyM') mirror();
  if (e.code === 'KeyH') document.getElementById('hud').classList.toggle('hidden');
  if (e.code === 'Escape' && cine.on) endCine();
});
window.addEventListener('keyup', function(e){ keys[e.code] = false; });
canvas.addEventListener('mousedown', function(e){ drag = true; lx = e.clientX; ly = e.clientY; });
window.addEventListener('mouseup', function(){ drag = false; });
window.addEventListener('mousemove', function(e){
  if (!drag) return;
  cam.yaw -= (e.clientX - lx) * 0.0032;
  cam.pitch -= (e.clientY - ly) * 0.0032;
  cam.pitch = Math.max(-1.35, Math.min(0.9, cam.pitch));
  lx = e.clientX; ly = e.clientY;
});
canvas.addEventListener('touchstart', function(e){
  var t = e.touches[0]; drag = true; lx = t.clientX; ly = t.clientY;
}, {passive:true});
canvas.addEventListener('touchmove', function(e){
  if (!drag) return;
  var t = e.touches[0];
  cam.yaw -= (t.clientX - lx) * 0.006;
  cam.pitch = Math.max(-1.35, Math.min(0.9, cam.pitch - (t.clientY - ly) * 0.006));
  lx = t.clientX; ly = t.clientY;
}, {passive:true});
canvas.addEventListener('touchend', function(){ drag = false; });

/* ==================================================================== UI == */
function $(id){ return document.getElementById(id); }
function buildUI(){
  var ch = $('choices'), ac = $('actions'), ul = $('regions'), i;
  ch.innerHTML = ''; ac.innerHTML = ''; ul.innerHTML = '';
  for (i = 0; i < CHOICES.length; i++) {
    (function(c){
      var btn = document.createElement('button');
      btn.className = 'ch' + (c.k === 'accept' ? ' on' : '');
      btn.textContent = c.n;
      btn.title = c.desc;
      btn.setAttribute('data-k', c.k);
      btn.onclick = function(){ setChoice(c.k); };
      ch.appendChild(btn);
    })(CHOICES[i]);
  }
  var spinBtn = document.createElement('button');
  spinBtn.id = 'b-spin'; spinBtn.className = 'primary'; spinBtn.textContent = 'SPIN';
  spinBtn.onclick = doSpin;
  ac.appendChild(spinBtn);

  var standBtn = document.createElement('button');
  standBtn.id = 'b-stand'; standBtn.className = 'ghost'; standBtn.textContent = 'STAND';
  standBtn.onclick = stand; standBtn.style.display = 'none';
  ac.appendChild(standBtn);

  var mirBtn = document.createElement('button');
  mirBtn.id = 'b-mirror'; mirBtn.className = 'ghost'; mirBtn.textContent = 'MIRROR';
  mirBtn.onclick = mirror;
  ac.appendChild(mirBtn);

  for (i = 0; i < REGIONS.length; i++) {
    var li = document.createElement('li');
    li.id = 'r-' + REGIONS[i].k;
    li.innerHTML = '<b></b><span>' + REGIONS[i].n + '</span><em>0%</em>';
    ul.appendChild(li);
  }
}
function setChoice(k){
  S.choice = k;
  var bs = document.querySelectorAll('.ch'), i;
  for (i = 0; i < bs.length; i++) bs[i].classList.toggle('on', bs[i].getAttribute('data-k') === k);
  for (i = 0; i < CHOICES.length; i++) if (CHOICES[i].k === k) toast(CHOICES[i].desc);
}
function ui(){
  $('v-spins').textContent = S.spin;
  $('v-prog').textContent = Math.round(S.progress*100) + '%';
  $('b-prog').style.width = (S.progress*100) + '%';
  $('v-id').textContent = Math.round(S.identity);
  $('b-id').style.width = S.identity + '%';
  $('v-aut').textContent = Math.round(S.autonomy);
  $('b-aut').style.width = S.autonomy + '%';
  for (var i = 0; i < REGIONS.length; i++) {
    var v = b(REGIONS[i].k), el = $('r-' + REGIONS[i].k);
    if (!el) continue;
    el.className = v >= 1 ? 'd' : (v > 0 ? 'p' : '');
    el.querySelector('em').textContent = v >= 1 ? 'done' : (v > 0 ? Math.round(v*100) + '%' : '0%');
  }
  var dis = cine.on || S.over;
  var sb = $('b-spin'); if (sb) sb.disabled = dis;
  var cs = document.querySelectorAll('.ch');
  for (var j = 0; j < cs.length; j++) cs[j].disabled = dis;
  var st = $('b-stand'); if (st) st.style.display = S.canStand ? '' : 'none';
}
var subT = null, toastT = null;
function say(text, voice, ms){
  var el = $('sub');
  el.textContent = text || '';
  el.className = text ? ('on ' + (voice === 'machine' ? 'machine' : voice === 'woman' ? 'woman' : '')) : '';
  if (subT) clearTimeout(subT);
  if (text && ms) subT = setTimeout(function(){ el.className = ''; }, ms);
}
function toast(text){
  var el = $('toast');
  el.textContent = text; el.className = 'on';
  if (toastT) clearTimeout(toastT);
  toastT = setTimeout(function(){ el.className = ''; }, 2300);
}
function hint(text){
  var el = $('hint');
  el.textContent = text || '';
  el.className = text ? 'on' : '';
}

/* ================================================================== FLOW == */
var cine = {on:false, key:null, before:0, after:0, start:0, dur:0, shown:-1, done:null, matches:0};
var fx = {sparks:[], shocks:[], glow:0, until:0, goldUntil:0, acc:0};
var reel = {on:false, faces:['-','-','-'], start:0, stops:[0.55,0.78,1.0], done:null, show:['-','-','-']};
var leverA = 0;

function resolve(c){
  if (S.spin === 0) {
    S.spin = 1; S.sinceProgress = 0;
    return {sym:[regOf('butt').i, regOf('butt').i, regOf('butt').i], key:'butt', matches:3, kind:'go'};
  }
  if (c.k === 'look') { S.spin++; return {sym:['X','-','Z'], key:null, matches:0, kind:'look'}; }
  var list = pool();
  if (!list.length) { S.spin++; return {sym:['N','Z','Z'], key:'headband', matches:3, kind:'final'}; }
  var target = pick(list);
  var p = Math.max(0, Math.min(1, 0.42 + c.bonus - S.hostility*0.02 + S.identity*0.0015));
  var go = rnd() < p || S.sinceProgress >= 2;
  var matches = go ? 3 : 2;
  var extra = null;
  if (c.k === 'double' && rnd() < 0.35) {
    var others = [], j;
    for (j = 0; j < list.length; j++) if (list[j].k !== target.k) others.push(list[j]);
    extra = pick(others);
  }
  var all = [], i;
  for (i = 0; i < REGIONS.length; i++) all.push(REGIONS[i].i);
  all.push('W','X','Y','Z');
  var other = [];
  for (i = 0; i < all.length; i++) if (all[i] !== target.i) other.push(all[i]);
  var sym = [target.i, target.i, other[Math.floor(rnd()*other.length)]];
  if (matches < 3) sym[1] = other[Math.floor(rnd()*other.length)];
  for (i = 2; i > 0; i--) { var k2 = Math.floor(rnd()*(i+1)); var t2 = sym[i]; sym[i] = sym[k2]; sym[k2] = t2; }
  S.lastTriple = matches === 3 ? target.k : S.lastTriple;
  S.sinceProgress = matches === 3 ? 0 : S.sinceProgress + 1;
  S.spin++;
  return {sym:sym, key:target.k, matches:matches, extra:extra ? extra.k : null,
          kind: matches === 3 ? 'go' : 'part'};
}
function doSpin(){
  if (cine.on || reel.on || S.over) return;
  A.init(); A.resume();
  var c = null, i;
  for (i = 0; i < CHOICES.length; i++) if (CHOICES[i].k === S.choice) c = CHOICES[i];
  if (!c) c = CHOICES[0];
  S.identity = Math.max(0, Math.min(100, S.identity + c.id));
  S.autonomy = Math.max(0, Math.min(100, S.autonomy + c.au));
  S.hostility += c.h;
  var res = resolve(c);
  A.lever(); leverA = -0.9;
  fx.until = performance.now() + 700;
  reel.on = true; reel.start = performance.now(); reel.faces = res.sym;
  reel.show = ['-','-','-'];
  reel.done = function(){ afterReels(res); };
  ui();
}
function afterReels(res){
  A.stop(0); A.win();
  if (res.kind === 'look') {
    var cl = CLUES[Math.floor(Math.random()*CLUES.length)];
    S.clues++;
    say(cl, 'machine', 5200);
    if (S.memories < MEMORY.length) {
      var mm = MEMORY[S.memories]; S.memories++;
      setTimeout(function(){ say(mm, 'woman', 6500); }, 4800);
    }
    finishTurn(res);
    return;
  }
  if (res.kind === 'final') { finale(); return; }
  if (!res.key) { finishTurn(res); return; }
  var r = regOf(res.key);
  var before = b(r.k);
  var after = Math.max(before, res.matches >= 3 ? 1 : 0.5);
  startCine(r, before, after, res);
}
function startCine(r, before, after, res){
  var lines = SEQ[r.k] || ['Something changes.'];
  cine.on = true; cine.key = r.k; cine.before = before; cine.after = after;
  cine.start = performance.now(); cine.dur = res.matches >= 3 ? 8000 : 3000;
  cine.shown = 0; cine.matches = res.matches;
  var mo = MONO[r.k] || {n:['...']};
  var track = S.choice === 'accept' ? 'a' : S.choice === 'resist' ? 'r' : 'n';
  cine.line = (mo[track] || mo.n)[0];
  if (res.matches >= 3) {
    showCine(r.n, lines[0]);
    A.morph(1);
  } else {
    say(lines[0], 'player', 3000);
    A.morph(0.4);
  }
  fx.until = performance.now() + 900;
  cine.done = function(){
    S.body[r.k] = after;
    recompute();
    A.heel();
    for (var q = 0; q < 30; q++) fx.sparks.push(spark(0, 1.1, 0.3));
    fx.until = performance.now() + 500;
    say(cine.line, 'player', 4500);
    if (r.k === 'pendant' && S.memories < MEMORY.length) {
      var mm = MEMORY[S.memories]; S.memories++;
      setTimeout(function(){ say(mm, 'woman', 6500); }, 1100);
    }
    finishTurn(res);
  };
}
function showCine(label, text){
  $('clabel').textContent = label;
  $('ctext').textContent = text;
  $('cine').classList.add('on');
}
function endCine(){
  if (!cine.on) return;
  cine.on = false;
  $('cine').classList.remove('on');
  var d = cine.done; cine.done = null;
  if (d) d();
}
function finishTurn(res){
  recompute(); ui();
  if (res && res.extra && !S.finished) {
    var ex = regOf(res.extra);
    if (ex && b(ex.k) < 1) {
      var bf = b(ex.k);
      setTimeout(function(){
        startCine(ex, bf, Math.min(1, bf + 0.5), {matches:2, key:ex.k, kind:'part'});
      }, 800);
      return;
    }
  }
  if (S.progress >= 1 && !S.finished) { finale(); return; }
  if (Math.random() < 0.5) {
    var src = S.choice === 'resist' ? RESL : (S.choice === 'accept' ? ACCL : IDLE);
    var l = src[Math.floor(Math.random()*src.length)];
    setTimeout(function(){ say(l, 'machine', 4000); }, 2400);
  }
  if (S.spin >= 12 && S.progress < 1) {
    for (var i = 0; i < REGIONS.length; i++) if (b(REGIONS[i].k) < 1) { S.body[REGIONS[i].k] = 1; break; }
    recompute(); ui();
    if (S.progress >= 1) { finale(); return; }
  }
  ui();
}
function finale(){
  if (S.finished) return;
  S.finished = true;
  say('THE HOUSE PRESENTS ITS JACKPOT.', 'machine', 5500);
  var left = [], i;
  for (i = 0; i < REGIONS.length; i++) if (b(REGIONS[i].k) < 1) left.push(REGIONS[i]);
  var idx = 0;
  function step(){
    if (idx >= left.length) {
      for (var j = 0; j < REGIONS.length; j++) S.body[REGIONS[j].k] = 1;
      recompute(); ui(); chooseEnding(); return;
    }
    var r = left[idx++];
    S.body[r.k] = 1; recompute(); ui();
    showCine(r.n, (SEQ[r.k] && SEQ[r.k][1]) || 'The last of it settles.');
    fx.until = performance.now() + 400;
    setTimeout(function(){ $('cine').classList.remove('on'); step(); }, 1400);
  }
  setTimeout(step, 800);
}
function chooseEnding(){
  var e = null, i;
  for (i = 0; i < ENDINGS.length; i++) if (ENDINGS[i].test(S)) { e = ENDINGS[i]; break; }
  if (!e) e = ENDINGS[ENDINGS.length-1];
  S.over = true;
  $('ekick').textContent = e.kick;
  $('etitle').textContent = e.title;
  $('eport').innerHTML = PORTRAIT.join('<br>');
  $('etext').innerHTML = e.text.split('\n\n').map(function(t){ return '<p>' + t + '</p>'; }).join('');
  $('ending').classList.add('on');
  ui();
}
function stand(){
  if (!S.canStand) { toast('NOT YET. YOUR LEGS ARE NOT YOURS.'); return; }
  S.standing = !S.standing; S.seated = !S.standing;
  A.heel();
  if (S.standing) {
    say('You stand. The heels click, and the room is suddenly a place you can walk in.', 'player', 5000);
    hint('W A S D to walk - F to sit');
  } else {
    say('You sit back down. The stool has been waiting.', 'player', 3800);
    hint('');
  }
}
function mirror(){
  fx.goldUntil = performance.now() + 3000;
  toast('MIRROR - FINISHED FORM');
  fx.until = performance.now() + 600;
  if (S.memories < MEMORY.length && rnd() < 0.4) {
    var mm = MEMORY[S.memories]; S.memories++;
    say(mm, 'woman', 6500);
  } else {
    say('The mirror shows the woman on the cabinet. She is waiting for the rest of you.', 'woman', 5000);
  }
}

/* =================================================================== VFX == */
function spark(x, y, z){
  return {
    x:x, y:y, z:z,
    vx:(Math.random()-0.5)*0.9, vy:Math.random()*0.9+0.25, vz:(Math.random()-0.5)*0.9,
    life:0.9+Math.random()*0.8, size:0.5+Math.random()*0.6
  };
}

/* =============================================================== RENDER == */
var COL = {
  skin:[0.79,0.60,0.48], trouser:[0.14,0.16,0.23], shirt:[0.23,0.26,0.32],
  dark:[0.05,0.05,0.07], blue:[0.17,0.44,0.88], tights:[0.04,0.04,0.06],
  heel:[0.96,0.95,0.93], gold:[1.0,0.82,0.40], hair:[0.16,0.11,0.09],
  hairW:[0.95,0.95,1.0], eye:[0.23,0.16,0.10], eyeG:[1.0,0.79,0.24],
  maroon:[0.29,0.06,0.14], steel:[0.60,0.63,0.69], felt:[0.16,0.08,0.13],
  glow:[0.35,0.78,1.0]
};
function mixc(a, c, t){ return [lerp(a[0],c[0],t), lerp(a[1],c[1],t), lerp(a[2],c[2],t)]; }

function drawRoom(dark){
  var i, s2;
  var wallCol = mixc([0.09,0.08,0.13],[0.02,0.02,0.04],dark);
  draw(G.quad, mmul(mtrans(0,0,0), mscale(9,1,9)), mixc(COL.felt,[0.02,0.02,0.04],dark*0.7), [0,0,0],0,COL.glow,0,1);
  gl.disable(gl.CULL_FACE);
  draw(G.quad, mmul(mtrans(0,3.2,0), mscale(9,1,9)), [0.03,0.03,0.05], [0,0,0],0,COL.glow,0,1);
  gl.enable(gl.CULL_FACE);
  var walls = [
    mmul(mtrans(0,1.6,-4.5), mscale(9,3.2,0.12)),
    mmul(mtrans(0,1.6, 4.5), mscale(9,3.2,0.12)),
    mmul(mtrans(-4.5,1.6,0), mscale(0.12,3.2,9)),
    mmul(mtrans( 4.5,1.6,0), mscale(0.12,3.2,9))
  ];
  for (i = 0; i < walls.length; i++) draw(G.cube, walls[i], wallCol, [0,0,0],0,COL.glow,0,1);

  var mz = -1.30;
  draw(G.cube, mmul(mtrans(0,0.62,mz), mscale(0.86,1.24,0.46)),
       mixc([0.12,0.08,0.16],[0.05,0.03,0.09],dark), [0,0,0],0,COL.glow,0,1);
  for (s2 = -1; s2 <= 1; s2 += 2) {
    draw(G.ball, mmul(mtrans(s2*0.13,1.00,mz+0.24), mscale(0.048,0.030,0.014)),
         COL.gold, [1.0,0.79,0.24], 0.9, [1.0,0.79,0.24], 0.7, 1);
  }
  draw(G.cube, mmul(mtrans(0,0.06,mz), mscale(0.90,0.030,0.50)), COL.gold, [0.35,0.26,0.05], 0.7, [1.0,0.82,0.4], 0.3, 1);
  draw(G.cube, mmul(mtrans(0,1.18,mz), mscale(0.90,0.030,0.50)), COL.gold, [0.35,0.26,0.05], 0.7, [1.0,0.82,0.4], 0.3, 1);
  draw(G.cube, mmul(mtrans(0,0.66,mz+0.24), mscale(0.70,0.20,0.02)),
       [0.03,0.03,0.06], [0.18,0.44,1.0], 1.2, COL.glow, 0.6, 1);
  draw(G.ball, mmul(mtrans(-0.30,0.42,mz+0.24), mscale(0.06,0.06,0.03)),
       COL.blue, COL.blue, 0.9, COL.glow, 0.5, 1);
  draw(G.limb, mmul(mtrans(0.46,0.72,mz+0.16), mmul(mrotX(1.5), mscale(0.022,0.36,0.022))),
       COL.steel, [0,0,0],0,COL.glow,0,1);
  draw(G.ball, mmul(mtrans(0.46,1.02,mz+0.16), mscale(0.06,0.06,0.06)),
       [0.82,0.10,0.23], [0.35,0.0,0.06], 0.6, COL.glow, 0, 1);

  draw(G.seat, mmul(mtrans(0,0.42,0), mscale(0.24,0.08,0.24)), COL.maroon, [0,0,0],0,COL.glow,0,1);
  draw(G.limb, mmul(mtrans(0,0.19,0), mscale(0.055,0.38,0.055)), COL.steel, [0,0,0],0,COL.glow,0,1);

  draw(G.cube, mmul(mtrans(-1.30,1.30,-0.10), mmul(mrotY(1.209), mscale(1.05,1.50,0.05))),
       mixc([0.06,0.07,0.11],[0.10,0.13,0.20],dark), [0.06,0.08,0.14], 0.7, COL.glow, 0.4, 1);

  for (i = 0; i < 9; i++) {
    var alive = (i/8) > dark;
    var col = i % 3;
    var mx = col === 0 ? -5.0 : (col === 1 ? 5.0 : 0);
    var mzz = -6.5 + Math.floor(i/3) * 2.4;
    draw(G.cube, mmul(mtrans(mx,0.8,mzz), mscale(0.8,1.6,0.6)), [0.09,0.08,0.15], [0,0,0],0,COL.glow,0,1);
    draw(G.cube, mmul(mtrans(mx,1.25,mzz+0.31), mscale(0.6,0.4,0.02)),
         alive ? COL.blue : [0.03,0.03,0.06], alive ? COL.blue : [0,0,0],
         alive ? 0.9 : 0.02, COL.glow, alive ? 0.3 : 0, 1);
  }
  for (i = 0; i < 6; i++) {
    draw(G.cube, mmul(mtrans(-6+i*2.4, 3.05, -2.0), mscale(0.06,0.04,9)),
         COL.glow, [0.18,0.44,1.0], 1.0 + dark*1.4, COL.glow, 0.3 + dark*0.7, 1);
  }
}

function drawBody(glow){
  var hipH  = lerp(0.115, 0.180, b('hips'));
  var waistH= lerp(0.125, 0.098, b('waist'));
  var chestH= lerp(0.145, 0.170, b('chest'));
  var shH   = lerp(0.200, 0.176, b('hips')*0.5);
  var bustR = lerp(0.055, 0.098, b('chest'));
  var bustZ = lerp(0.075, 0.135, b('chest'));
  var bustY = lerp(1.30, 1.29, b('chest'));
  var rearR = lerp(0.075, 0.105, b('butt'));
  var rearZ = lerp(-0.075,-0.135, b('butt'));
  var thR   = lerp(0.088, 0.112, b('thighs'));
  var cfR   = lerp(0.062, 0.058, b('legs'));
  var legLen= lerp(0.90, 1.02, b('legs'));
  var torsoH= lerp(0.42, 0.40, (b('waist')+b('hips'))*0.5);
  var torsoY= lerp(1.02, 1.00, (b('waist')+b('hips'))*0.5);
  var dressOn = Math.max(b('hips'), b('waist'), b('chest'), b('thighs'));
  var i, s;

  draw(G.torso, mmul(mtrans(0,torsoY,0), mscale(1,torsoH,1)),
       dressOn > 0.35 ? mixc(COL.dark, COL.trouser, 1-dressOn) : COL.shirt,
       [0,0,0],0,COL.glow, glow*0.5, 1);

  for (s = -1; s <= 1; s += 2) {
    var c = b('chest');
    if (c > 0.02) {
      var stage = c < 0.4 ? (c/0.4)*0.55 : 0.55 + ((c-0.4)/0.6)*0.45;
      draw(G.ball, mmul(mtrans(s*(bustR*0.85+0.012), bustY, bustZ*0.55+bustR*0.25),
           mscale(bustR*(0.6+stage*0.7), bustR*(0.55+stage*0.75), bustR*(0.8+bustZ*2.4))),
           c > 0.45 ? COL.dark : COL.skin, [0,0,0],0,COL.glow, glow*0.55, 1);
    }
    draw(G.ball, mmul(mtrans(s*(rearR*0.5), 0.98, rearZ*0.85),
         mscale(rearR*0.95, rearR*0.95, rearR*(0.8+b('butt')*0.7))),
         (b('thighs') > 0.5 || b('hips') > 0.5) ? COL.dark : COL.skin, [0,0,0],0,COL.glow, glow*0.45, 1);
  }

  var legTop = torsoY - torsoH*0.5, th = legLen*0.5, cl = legLen*0.5;
  for (s = -1; s <= 1; s += 2) {
    draw(G.limb, mmul(mtrans(s*(thR*0.9), legTop-th*0.5-0.01, 0.02), mscale(thR, th*0.5, thR)),
         b('thighs') > 0.35 ? COL.tights : COL.trouser, [0,0,0],0,COL.glow, glow*0.35, 1);
    draw(G.limb, mmul(mtrans(s*(cfR*0.95), legTop-th-cl*0.5, 0.01), mscale(cfR, cl*0.5, cfR)),
         b('legs') > 0.35 ? COL.tights : COL.trouser, [0,0,0],0,COL.glow, glow*0.35, 1);
    var fh = b('feet');
    var heel = 0.02 + fh*0.075;
    draw(G.cube, mmul(mtrans(s*(cfR*0.95), legTop-legLen+heel*0.5, 0.01+fh*0.045),
         mscale(0.11, lerp(0.08,0.05,fh), lerp(0.25,0.205,fh))),
         fh > 0.3 ? COL.heel : COL.trouser, fh > 0.3 ? [0.35,0.26,0.05] : [0,0,0],
         fh > 0.3 ? 0.3 : 0, COL.gold, fh > 0.3 ? glow*0.6 : 0, 1);
  }

  var shoulderY = torsoY + torsoH*0.45, armLen = 0.62, armR = 0.052, gh = b('hands');
  for (s = -1; s <= 1; s += 2) {
    draw(G.limb, mmul(mtrans(s*(shH+armR*0.6), shoulderY-0.05, 0.03), mscale(armR, armLen*0.28, armR)),
         COL.shirt, [0,0,0],0,COL.glow, glow*0.3, 1);
    draw(G.limb, mmul(mtrans(s*(shH+armR*0.9), shoulderY-0.36, 0.14), mscale(armR*0.9, armLen*0.26, armR*0.9)),
         gh > 0.3 ? COL.blue : COL.skin, gh > 0.3 ? COL.blue : [0,0,0],
         gh > 0.3 ? 0.5 + glow*0.5 : 0, COL.glow, gh > 0.3 ? glow*0.8 : 0, 1);
    if (gh > 0.3) {
      draw(G.limb, mmul(mtrans(s*(shH+armR*0.75), shoulderY-0.20, 0.09), mscale(armR, armLen*0.52, armR)),
           COL.blue, COL.blue, 0.4 + glow*0.5, COL.glow, glow*0.7, 1);
    }
  }

  if (dressOn > 0.04) {
    var skirtB = Math.max(0.26, legTop - 0.30*Math.max(b('thighs'), b('legs')));
    var top = torsoY + torsoH*0.46, hgt = top - skirtB;
    var widest = Math.max(hipH, chestH, waistH);
    gl.disable(gl.CULL_FACE);
    draw(G.limb, mmul(mtrans(0, skirtB+hgt*0.5, b('thighs')*0.014), mscale(widest*2.1, hgt*2, widest*2.1)),
         COL.dark, [0,0,0],0,COL.glow, 0.2 + dressOn*0.4, Math.min(1, 0.4 + dressOn*0.6));
    gl.enable(gl.CULL_FACE);
  }

  var hy = 1.68 + b('legs')*0.04 - b('feet')*0.02;
  draw(G.ball, mmul(mtrans(0,hy,0), mscale(0.105,0.118,0.107)), COL.skin, [0,0,0],0,COL.glow,glow*0.25,1);
  draw(G.ball, mmul(mtrans(0,hy+0.012,-0.004), mscale(0.115,0.125,0.115)),
       mixc(COL.hair, COL.hairW, b('hair')), [0,0,0],0,COL.glow, glow*0.35, 1);
  if (b('headband') > 0.4) {
    draw(G.band, mmul(mtrans(0,hy+0.088,0), mmul(mrotX(1.5708), mscale(0.108,0.108,0.108))),
         COL.gold, COL.gold, 0.5, COL.gold, glow*1.2, 1);
  }
}

function drawFx(dt){
  var i;
  for (i = fx.sparks.length-1; i >= 0; i--) {
    var s = fx.sparks[i];
    s.life -= dt;
    if (s.life <= 0) { fx.sparks.splice(i,1); continue; }
    s.x += s.vx*dt; s.y += s.vy*dt; s.z += s.vz*dt;
    s.vy -= 0.4*dt;
    var a = Math.max(0, s.life/1.6), sz = s.size*0.02*a;
    draw(G.ball, mmul(mtrans(s.x,s.y,s.z), mscale(sz,sz,sz)),
         mixc(COL.gold, COL.glow, a), COL.glow, a, COL.glow, a, 1);
  }
  for (i = fx.shocks.length-1; i >= 0; i--) {
    var sh = fx.shocks[i];
    sh.t += dt;
    var p = sh.t/0.8;
    if (p >= 1) { fx.shocks.splice(i,1); continue; }
    var sc = 0.3 + p*2.6;
    draw(G.band, mmul(mtrans(0,1.1,0.3), mmul(mrotX(1.5708), mscale(sc,sc,sc))),
         COL.glow, COL.glow, (1-p)*1.2, COL.glow, (1-p)*0.7, Math.max(0,(1-p)*0.8));
  }
}

/* ================================================================== LOOP == */
var started = false, lastT = 0, clock = 0;

function frame(now){
  requestAnimationFrame(frame);
  if (!gl || !prog || !G) return;
  if (!lastT) lastT = now;
  var dt = Math.min(0.05, (now - lastT)/1000);
  lastT = now; clock += dt;

  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var w = Math.floor(window.innerWidth*dpr), h = Math.floor(window.innerHeight*dpr);
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w; canvas.height = h;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
  }

  if (reel.on) {
    var p = Math.min(1, (now - reel.start)/1600);
    for (var i = 0; i < 3; i++) reel.show[i] = p >= reel.stops[i] ? reel.faces[i] : '-';
    if (Math.random() < 0.4) A.tick();
    if (p >= 1) { var d = reel.done; reel.on = false; reel.done = null; if (d) d(); }
  }

  if (cine.on) {
    var cp = Math.min(1, (now - cine.start)/cine.dur);
    var e2 = cp < 0.5 ? 2*cp*cp : 1 - Math.pow(-2*cp+2, 2)/2;
    S.body[cine.key] = cine.before + (cine.after - cine.before)*e2;
    recompute();
    var lines = SEQ[cine.key] || [''];
    var li = Math.max(0, Math.min(lines.length-1, Math.floor(cp*lines.length)));
    if (li !== cine.shown && cine.matches >= 3) {
      cine.shown = li;
      showCine(regOf(cine.key).n, lines[li]);
    }
    ui();
    if (cp >= 0.999) endCine();
  }

  var eyeY = S.seated ? SEAT_Y : STAND_Y;
  if (!S.seated) {
    var fwd = (keys.KeyW?1:0) - (keys.KeyS?1:0);
    var str = (keys.KeyD?1:0) - (keys.KeyA?1:0);
    if (fwd || str) {
      var L = Math.hypot(fwd,str) || 1;
      var sn = Math.sin(cam.yaw), cs = Math.cos(cam.yaw);
      cam.x += ((str/L)*cs - (fwd/L)*sn) * 2.0 * dt;
      cam.z += (-(str/L)*sn - (fwd/L)*cs) * 2.0 * dt;
      cam.x = Math.max(-4, Math.min(4, cam.x));
      cam.z = Math.max(-4, Math.min(4, cam.z));
      cam.phase += dt*7;
      cam.bob = Math.sin(cam.phase)*0.018;
      if (Math.sin(cam.phase)*cam.side < 0) { cam.side *= -1; A.heel(); }
    } else cam.bob *= 0.9;
  } else {
    cam.x += (0 - cam.x)*0.1;
    cam.z += (0.92 - cam.z)*0.1;
    cam.bob *= 0.92;
  }

  var inCine = cine.on;
  var prev = fx.goldUntil > now;
  var base = Math.max(0, (S.progress - 0.85)/0.15)*0.2;
  var pulse = inCine ? 0.75 + Math.sin(clock*9)*0.15 : 0;
  var target = prev ? 0.65 : Math.max(base, pulse);
  S.gold += (target - S.gold) * Math.min(1, dt*8);

  fx.acc += dt;
  if ((inCine || fx.until > now) && fx.acc > 0.05) {
    fx.acc = 0;
    for (var q = 0; q < 5; q++) fx.sparks.push(spark((Math.random()-0.5)*0.24, 1.15, 0.28));
  }

  leverA *= 0.9;

  var dark = Math.min(1, S.progress*0.9 + S.hostility*0.12);
  var eyeX = cam.x, eyeZ = cam.z;

  var asp = canvas.width / Math.max(1, canvas.height);
  var proj = mpersp(1.15, asp, 0.02, 60);
  var fx2 = -Math.sin(cam.yaw) * Math.cos(cam.pitch);
  var fy2 =  Math.sin(cam.pitch);
  var fz2 = -Math.cos(cam.yaw) * Math.cos(cam.pitch);
  var bobY = eyeY + cam.bob + Math.sin(clock*1.6)*0.004;
  var view = mlook(eyeX, bobY, eyeZ, eyeX + fx2, bobY + fy2, eyeZ + fz2);

  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0.016 + dark*0.02, 0.014, 0.035 + dark*0.04, 1);
  gl.enable(gl.DEPTH_TEST);
  gl.enable(gl.CULL_FACE);
  gl.cullFace(gl.BACK);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.useProgram(prog);
  gl.uniformMatrix4fv(U.uProj, false, proj);
  gl.uniformMatrix4fv(U.uView, false, view);
  gl.uniform3f(U.uEye, eyeX, bobY, eyeZ);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  drawRoom(dark);
  drawBody(S.gold);
  drawFx(dt);

  gl.disable(gl.BLEND);
  started = true;
}

/* ================================================================== BOOT == */
try {
  if (!gl || !prog || !G) {
    /* the specific failure has already been reported above */
  } else {
    buildUI();
    ui();
    $('btn-start').onclick = function(){
      A.init(); A.resume();
      $('title').classList.remove('on');
      say('The stool is bolted down. You sit anyway.', 'player', 5000);
      hint('SPACE to spin - M for the mirror');
      setTimeout(function(){ hint(''); }, 7000);
    };
    $('sk').onclick = endCine;
    $('btn-again').onclick = function(){
      var seed = Math.floor(Math.random()*1e9);
      S = fresh(seed);
      rngS = (seed ^ 0x5eed) >>> 0 || 1;
      $('ending').classList.remove('on');
      cam.yaw = Math.PI; cam.pitch = -0.18; cam.x = 0; cam.z = 0.92;
      buildUI(); ui();
      say('A new night. The machine remembers nothing.', 'machine', 4000);
    };
    requestAnimationFrame(frame);
  }
} catch (err) {
  console.error('[jackpot] boot failed:', err);
  window.__fatal('Startup failed: ' + (err && err.message ? err.message : err),
    'Press F12 and copy the red console text.');
}

})();
