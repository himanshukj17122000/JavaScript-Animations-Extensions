const AppParticles = `/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 10,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 1,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: "#b61924",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover",
    },
  }
);
`;

const Stagger = `window.human = false;

var canvasEl = document.querySelector(".fireworks");
var ctx = canvasEl.getContext("2d");
var numberOfParticules = 30;
var pointerX = 0;
var pointerY = 0;
var tap =
  "ontouchstart" in window || navigator.msMaxTouchPoints
    ? "touchstart"
    : "mousedown";
var colors = ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C"];

function setCanvasSize() {
  canvasEl.width = window.innerWidth * 2;
  canvasEl.height = window.innerHeight * 2;
  canvasEl.style.width = window.innerWidth + "px";
  canvasEl.style.height = window.innerHeight + "px";
  canvasEl.getContext("2d").scale(2, 2);
}

function updateCoords(e) {
  pointerX = e.clientX || e.touches[0].clientX;
  pointerY = e.clientY || e.touches[0].clientY;
}

function setParticuleDirection(p) {
  var angle = (anime.random(0, 360) * Math.PI) / 180;
  var value = anime.random(50, 180);
  var radius = [-1, 1][anime.random(0, 1)] * value;
  return {
    x: p.x + radius * Math.cos(angle),
    y: p.y + radius * Math.sin(angle),
  };
}

function createParticule(x, y) {
  var p = {};
  p.x = x;
  p.y = y;
  p.color = colors[anime.random(0, colors.length - 1)];
  p.radius = anime.random(16, 32);
  p.endPos = setParticuleDirection(p);
  p.draw = function () {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
    ctx.fillStyle = p.color;
    ctx.fill();
  };
  return p;
}

function createCircle(x, y) {
  var p = {};
  p.x = x;
  p.y = y;
  p.color = "#FFF";
  p.radius = 0.1;
  p.alpha = 0.5;
  p.lineWidth = 6;
  p.draw = function () {
    ctx.globalAlpha = p.alpha;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
    ctx.lineWidth = p.lineWidth;
    ctx.strokeStyle = p.color;
    ctx.stroke();
    ctx.globalAlpha = 1;
  };
  return p;
}

function renderParticule(anim) {
  for (var i = 0; i < anim.animatables.length; i++) {
    anim.animatables[i].target.draw();
  }
}

function animateParticules(x, y) {
  var circle = createCircle(x, y);
  var particules = [];
  for (var i = 0; i < numberOfParticules; i++) {
    particules.push(createParticule(x, y));
  }
  anime
    .timeline()
    .add({
      targets: particules,
      x: function (p) {
        return p.endPos.x;
      },
      y: function (p) {
        return p.endPos.y;
      },
      radius: 0.1,
      duration: anime.random(1200, 1800),
      easing: "easeOutExpo",
      update: renderParticule,
    })
    .add({
      targets: circle,
      radius: anime.random(80, 160),
      lineWidth: 0,
      alpha: {
        value: 0,
        easing: "linear",
        duration: anime.random(600, 800),
      },
      duration: anime.random(1200, 1800),
      easing: "easeOutExpo",
      update: renderParticule,
      offset: 0,
    });
}

var render = anime({
  duration: Infinity,
  update: function () {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  },
});

document.addEventListener(
  tap,
  function (e) {
    window.human = true;
    render.play();
    updateCoords(e);
    animateParticules(pointerX, pointerY);
  },
  false
);

var centerX = window.innerWidth / 2;
var centerY = window.innerHeight / 2;

function autoClick() {
  if (window.human) return;
  animateParticules(
    anime.random(centerX - 50, centerX + 50),
    anime.random(centerY - 50, centerY + 50)
  );
  anime({ duration: 200 }).finished.then(autoClick);
}

autoClick();
setCanvasSize();
window.addEventListener("resize", setCanvasSize, false);
`;

const CarJs = `new Vivus('canvas', {
  start: 'autostart',
  type: 'delayed',
  duration: 300,
  animTimingFunction: Vivus.EASE
}, function (car) {
  setTimeout(function () {
      car.reset().play();
  }, 3000);
});`;

const RocketJs = `new Vivus('canvas', {
  start: 'autostart',
  type: 'scenario-sync',
  pathTimingFunction: Vivus.EASE_OUT
}, function (obj) {
  obj.el.classList.add('fill-1', 'fill-2', 'fill-3', 'fill-4', 'fill-5', 'fill-6', 'fill-7', 'clear-stroke');
});`;

const Mojs = `const DURATION = 1000;

const scalePath = mojs.easing.path(
    'M0, 0 C0, 0 16.857142857142854, -5.248486282060085e-15 31.142857142857142, 0 C30.80272108843543, -113.14285714285715 50, -100 50, -100 C50, -100 65.31357300419697, -100.13604825191986 70, -0.2857142857142857 C84.28506645158541, -0.14966603379441404 100, 0 100, 0 '
);

const CUTSOM_PROPERTIES = {
    originY: 50,
    draw(el, props) {
        el.style.transformOrigin = \`50% \${props.originY}%\`;
    }
};


const SQUARE_OPTS = {
    customProperties: CUTSOM_PROPERTIES,
    y: {
        [-200]: -200,
        curve: 'M0, 0 C16.815811159807826, -3.2443825883792443 27.57166399691211, 35.51058598192055 30, 100 C31.90230129013731, 99.91798544665086 67.88545167517314, 99.9146334942176 70, 100 C72.54311975339816, 46.08536650578238 87.89847455447789, 2.672954016950679 100, 0 '
    },
    scaleX: {
        1: 1,
        curve: scalePath
    },
    scaleY: {
        1: 1,
        curve: function (k) {
            return 1 + (1 - scalePath(k)) / 1.5;
        }
    },

    originY: {
        100: 100,
        curve: 'M0, 50 C0, 50 30, 50 30, 50 C30, 50 31.559139784946236, 0 31.559139784946236, 0 C31.559139784946236, 0 55.71492892960311, -0.1355624091374383 70, 0 C74.60765171555815, 54.42127669485172 100, 50 100, 50 '
    },
    duration: DURATION
};


const square1 = new mojs.Html({
    ...SQUARE_OPTS,
    el: '#js-el',
    angleZ: {
        90: 90,
        curve: 'M0, 100 C0, 100 30, 0 30, 0 C30, 0 30, 100 30, 100 C30, 100 70, 100 70, 100 C70, 100 100, 0 100, 0 '
    }
});


const square2 = new mojs.Html({
    ...SQUARE_OPTS,
    el: '#js-el-small',
    y: {
        [-300]: -300,
        curve: 'M0, 0 C10.101525445522112, -1.5300968740935288 24.578551642263555, 1.7142857142857142 30, 87.42857142857143 C33.06687772061731, 107.14285714285714 50, 107 50, 107 C50, 107 62.917147228930936, 104.99294035155644 70, 87.14285714285714 C74.31276966857592, 6.435631077014981 90.03697870960255, 0.67295401695068 100, 0 '
    },
    angleZ: {
        [-90]: [-90],
        curve: 'M0, 100 C0, 100 30, 0 30, 0 C30, 0 30, 100 30, 100 C30, 100 70, 100 70, 100 C70, 100 100, 0 100, 0 '
    }
});


const FILLS = ['#7b7b7b', '#6b6b6b', '#5b5b5b', '#4a4a4a'];

const DUST_OPTS = {
    parent: '#js-scene',
    count: 5,
    top: '100%',
    left: '15%',
    x: {
        0: 150,
        easing: 'cubic.in'
    },
    degree: 10,
    angle: {
        90: 10,
        easing: 'cubic.inout'
    },
    radius: {
        0: 150
    },
    opacity: .35,
    timeline: {
        speed: .75
    },
    children: {
        fill: FILLS,
        radius: 'rand(12,18)',
        direction: 1,
        pathScale: 'rand(.5, .75)',
        scale: {
            1: 0,
            easing: 'cubic.inout'
        },
        isSwirl: true,
        swirlSize: 'rand(10, 17)',
        swirlFrequency: 'rand(2,4)',
        duration: 'stagger(300, 35)',
        delay: 235
    }
};



const dust1 = new mojs.Burst({
    ...DUST_OPTS
});


const dust2 = new mojs.Burst({
    ...DUST_OPTS,
    left: '70%',
    angle: {
        [-90]: -10,
        easing: 'cubic.inout'
    },
    x: {
        0: -150,
        easing: 'cubic.in'
    },
    children: {
        ...DUST_OPTS.children,
        direction: -1
    }
});



dust1.el.style.zIndex = 3;
dust2.el.style.zIndex = 3;

const shadow = new mojs.Html({
    el: '#js-shadow',
    opacity: {
        1: 1,
        curve: function (k) {
            return Math.max((scalePath(k) - 1) / 4, .05);
        }
    },

    scaleX: {
        1: 1,
        curve: function (k) {
            return 1.35 * scalePath(k);
        }
    },

    duration: DURATION
});


const timeline = new mojs.Timeline({
    speed: .63
});
timeline.add(square1, square2, dust1, dust2, shadow);

new MojsPlayer({
    add: timeline,
    isPlaying: true,
    isRepeat: true
});`;

const moMusicJS = `const color1 = '#81daef',
color2 = '#6dbc99',
color3 = '#f4a86e';

//custom shape note1
class TwoNote extends mojs.CustomShape {
getShape() {
    return '<path d="M21.511,9.995c-0.6-0.585-1.221-1.19-1.668-2.356c-0.085-0.222-0.319-0.351-0.549-0.308 c-0.234,0.043-0.403,0.247-0.403,0.484v10.18c-0.561-0.318-1.291-0.417-2.065-0.264c-1.603,0.318-2.858,1.582-2.858,2.878 c0,0.564,0.242,1.074,0.68,1.434c0.431,0.354,1.013,0.539,1.658,0.539c0.23,0,0.468-0.024,0.71-0.072 c1.603-0.318,2.858-1.582,2.858-2.878c0-0.001,0-0.003,0-0.004h0V9.684c0.314,0.399,0.641,0.717,0.948,1.017 c0.846,0.824,1.513,1.475,1.513,3.514h0.985C23.322,11.76,22.401,10.863,21.511,9.995z M16.827,21.546 c-0.623,0.123-1.202,0.025-1.553-0.263c-0.213-0.174-0.321-0.401-0.321-0.673c0-0.815,0.946-1.69,2.065-1.913 c0.177-0.035,0.35-0.052,0.516-0.052c0.417,0,0.786,0.109,1.037,0.315c0.213,0.174,0.321,0.401,0.321,0.673 C18.892,20.448,17.946,21.324,16.827,21.546z"/><path d="M15.446,13.234c0-0.001,0-0.003,0-0.004h0V1.909c0-0.158-0.076-0.307-0.204-0.399c-0.129-0.093-0.294-0.117-0.444-0.068 L5.937,4.395C5.736,4.462,5.601,4.65,5.601,4.862v9.688c-0.561-0.318-1.291-0.417-2.065-0.264c-1.603,0.318-2.858,1.582-2.858,2.878 c0,0.564,0.242,1.074,0.68,1.434c0.431,0.354,1.013,0.539,1.658,0.539c0.23,0,0.468-0.024,0.71-0.072 c1.603-0.318,2.858-1.582,2.858-2.878c0-0.001,0-0.003,0-0.004h0V8.171l7.876-2.625v6.051c-0.561-0.318-1.291-0.417-2.065-0.264 c-1.603,0.318-2.858,1.582-2.858,2.878c0,0.564,0.242,1.074,0.68,1.434c0.431,0.354,1.013,0.539,1.658,0.539 c0.23,0,0.468-0.024,0.71-0.072C14.191,15.795,15.446,14.53,15.446,13.234z M3.536,18.1c-0.623,0.123-1.202,0.025-1.553-0.263 c-0.213-0.174-0.321-0.401-0.321-0.673c0-0.815,0.946-1.69,2.065-1.913c0.177-0.035,0.35-0.052,0.516-0.052 c0.417,0,0.786,0.109,1.037,0.315c0.213,0.174,0.321,0.401,0.321,0.673C5.601,17.002,4.655,17.878,3.536,18.1z M12.397,15.147 c-0.623,0.123-1.202,0.025-1.553-0.263c-0.213-0.174-0.321-0.401-0.321-0.673c0-0.815,0.946-1.69,2.065-1.913 c0.177-0.035,0.35-0.052,0.516-0.052c0.417,0,0.786,0.109,1.037,0.315c0.213,0.174,0.321,0.401,0.321,0.673 C14.461,14.049,13.516,14.925,12.397,15.147z M14.461,4.507L6.585,7.133V5.217l7.876-2.625V4.507z"/>';
}
}

mojs.addShape('twoNote', TwoNote);

//custom shape note1
class OneNote extends mojs.CustomShape {
getShape() {
    return '<path d="M18.709,2.871L11.878,1.82c-0.36-0.056-0.722,0.048-0.998,0.285c-0.275,0.236-0.433,0.58-0.433,0.943V15.7 c-0.66-0.593-1.529-0.957-2.484-0.957c-2.055,0-3.726,1.671-3.726,3.726s1.671,3.726,3.726,3.726s3.726-1.671,3.726-3.726V7.394 l6.642,1.022c0.36,0.055,0.723-0.049,0.998-0.285c0.275-0.237,0.433-0.58,0.433-0.943v-3.09C19.762,3.481,19.319,2.965,18.709,2.871 z M7.964,20.953c-1.37,0-2.484-1.114-2.484-2.484s1.114-2.484,2.484-2.484s2.484,1.114,2.484,2.484S9.333,20.953,7.964,20.953z M18.52,7.189L11.69,6.138v-3.09l6.831,1.051L18.52,7.189z"/>';
}
getLength() {
    return 200;
} // optional
}
mojs.addShape('oneNote', OneNote);

// now it is avaliable to use on mo.js Shape constructor
const note_opts_two = {
shape: 'twoNote',
scale: {
    5: 20
},
y: {
    20: -10
},
duration: 3000,
easing: 'sin.out'
};


// now it is avaliable to use on mo.js Shape constructor
const note_opts_one = {
shape: 'oneNote',
scale: {
    7: 20
},
y: {
    20: -10
},
duration: 2000,
easing: 'sin.out'
};


const note1 = new mojs.ShapeSwirl({
...note_opts_two,
fill: {
    'cyan': color2
},
swirlSize: 15,
swirlFrequency: 20
}).
then({
opacity: 0,
duration: 200,
easing: 'sin.in'
});


const note2 = new mojs.ShapeSwirl({
...note_opts_two,
x: {
    0: 100
},
fill: {
    'cyan': color3
},
y: {
    20: -30
},
swirlSize: 15,
swirlFrequency: 10,
delay: 100
}).
then({
opacity: 0,
duration: 200,
easing: 'sin.in'
});


const note3 = new mojs.ShapeSwirl({
...note_opts_one,
fill: color1,
y: {
    20: -70
},
swirlSize: 20,
swirlFrequency: 15,
delay: 200
}).
then({
opacity: 0,
duration: 200,
easing: 'sin.in'
});


const note4 = new mojs.ShapeSwirl({
...note_opts_one,
x: {
    10: -100
},
fill: {
    'cyan': '#9398f9'
},
y: {
    10: -40
},
swirlSize: 15,
swirlFrequency: 12,
delay: 300
}).
then({
opacity: 0,
duration: 200,
easing: 'sin.in'
});


const timeline = new mojs.Timeline({
repeat: 999
});


timeline.
add(note1, note2, note3, note4).
play();

//new MojsPlayer({ add: timeline });

var radio = document.querySelector('#radio'),
shadow = document.querySelector('#shadow');

var rockingEasing = mojs.easing.path('M0,351S16.7,59.7,64.7,60.3c0,0,25-11,26.3,139.7,1.3,144.3,31.3,129.3,31.3,129.3S159,339,159,200c0-147,37-139.9,37-139.9S226.4,45.7,223.7,200c-2.7,151.2,24.7,128,24.7,128s36.9,10.5,38.7-128c2-153,39.7-140.4,39.7-140.4s36.3-9.9,41,186.1c0,0,.7,110.3,32.3,105.3');
var jumpEasing = mojs.easing.path('M0,400,77.7,43,117,239,143,77s16,264,42.7,251.3,11.7-379,37.7-315S235,303,257,235.7,281,61.7,285.7,97,305,262.3,311,209.3s25.3-119,34-46.3,55,237,55,237');

new mojs.Tween({
repeat: 999,
duration: 650,
onUpdate: function (progress) {
    var rockingProgress = rockingEasing(progress),
        jumpProgress = jumpEasing(progress);
    radio.style.transform = \`translateX(\${rockingProgress}px) translateY(\${0.25 * jumpProgress}px)  rotate(\${rockingProgress}deg)\`;
}
}).
play();

new mojs.Tween({
repeat: 999,
duration: 650,
onUpdate: function (progress) {
    var rockingProgress = rockingEasing(progress);
    shadow.style.transform = \`translateX(\${-0.5 * rockingProgress}px) rotate(\${-0.5 * rockingProgress}deg)\`;
}
}).
play();

var sound = new Howl({
src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/jumprun.mp3',
autoplay: true,
loop: true,
volume: 0.5
});


const mute = document.getElementById('mute'),
text = mute.firstChild;
let isPlaying = true;

mute.addEventListener('click', function () {
isPlaying = !isPlaying;
if (isPlaying === false) {
    sound.pause();
    text.data = "Play";
} else {
    sound.play();
    text.data = "Mute";
}
}, false);`;
module.exports = {
  AppParticles,
  Stagger,
  CarJs,
  RocketJs,
  Mojs,
  moMusicJS,
};
