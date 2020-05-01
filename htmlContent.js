const BallAnimation = `<!--- PUT THE FOLLOWING LINE IN YOUR <head> tag to link the stylesheet--->
<link rel="stylesheet" href="NAME OF YOUR STYLESHEET HERE"/>
<b></b>
 `;

const EmptyBall = `<!DOCTYPE html>
 <html>
   <head>
     <link rel="stylesheet" href="NAME OF YOUR STYLESHEET HERE" />
   </head>
   <body>
     <b></b>
   </body>
 </html>`;

const TypePartHTML = `<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title></title>
    <link rel="stylesheet" href="style.css" />
    <script src="typewrite.js"></script>
    <div id="particles-js">
      <header>
        <h1>
          <br />
          <a
       style="
         text-decoration: none;
         font-size: 45px;
         color: green;
         font-style: italic;
         font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman',
           serif;
       "
       href=""
       class="typewrite"
       data-period="2000"
       data-type='[ "webStart Animation" ]'
     >
       <span class="wrap"></span>
     </a>
        </h1>
      </header>
    </div>

    <script type="text/javascript" src="particles.js"></script>

    <script type="text/javascript" src="app.js"></script>
  </head>

  <body></body>
</html>
`;
const HTMLParticle = `<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title></title>
    <link rel="stylesheet" href="style.css" />
    <div id="particles-js">
      <header>
       </header>
    </div>

    <script type="text/javascript" src="particles.js"></script>

    <script type="text/javascript" src="app.js"></script>
  </head>

  <body></body>
</html>
`;
const HTMLAnime = `
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="style.css" />

    <header></header>
  </head>

  <body>
    <canvas class="fireworks"></canvas>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js"></script>
    <script src="animation.js"></script>
  </body>
</html>
`;
const HTMLType = `<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title></title>
    <link rel="stylesheet" href="style.css" />
    <script src="typewrite.js"></script>
    <div>
   <header>
   <h1>
   <br />
   <a
       style="
         text-decoration: none;
         font-size: 45px;
         color: green;
         font-style: italic;
         font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman',
           serif;
       "
       href=""
       class="typewrite"
       data-period="2000"
       data-type='[ "webStart Animation" ]'
     >
   <span class="wrap"></span>
     </a>
        </h1>
      </header>
    </div>
  </head>
<body></body>
</html>
`;

const HTMLTextAnim = `<!DOCTYPE html>
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1 class="animated infinite bounce delay-1s">Boucing Text</h1>
    <h1 class="animated infinite shake delay-1s">Shake</h1>
    <h1 class="animated infinite swing delay-1s">Swing</h1>
    <h1 class="animated infinite rubberBand delay-1s">Rubber Band</h1>
    <h1 class="animated infinite hinge delay-1s">Hinge</h1>
    <h1 class="animated infinite rollOut delay-1s">Roll-Out</h1>
    <h1 class="animated infinite rotateIn delay-1s">Rotate In</h1>
    <h1 class="animated infinite heartBeat delay-1s">Heart Beat</h1>
  </body>
</html>
`;

const ThreeHTML = `<html>

<head>
    <title>My first three.js app</title>
    <style>
        body {
            margin: 0;
        }

        canvas {
            display: block;
        }
    </style>
</head>

<body>
    <script src="https://threejs.org/build/three.js"></script>
    <script>
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        var geometry = new THREE.BoxGeometry();
        var material = new THREE.MeshBasicMaterial({
            color: 0x00ff00
        });
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        var animate = function () {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();
    </script>
</body>

</html>`;

const BoxMoving = `<!DOCTYPE html>
<html>
<link rel="stylesheet" href="style.scss" />

<body>
    <div class="layers">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
    </div>
</body>

</html>`;

module.exports = {
  TypePartHTML,
  HTMLParticle,
  HTMLType,
  HTMLAnime,
  HTMLTextAnim,
  BallAnimation,
  EmptyBall,
  ThreeHTML,
  BoxMoving,
};
