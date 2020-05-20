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
});`

const RocketJs = `new Vivus('canvas', {
  start: 'autostart',
  type: 'scenario-sync',
  pathTimingFunction: Vivus.EASE_OUT
}, function (obj) {
  obj.el.classList.add('fill-1', 'fill-2', 'fill-3', 'fill-4', 'fill-5', 'fill-6', 'fill-7', 'clear-stroke');
});`


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
});`
module.exports = {
  AppParticles,
  Stagger,
  CarJs,
  RocketJs,
  Mojs
};