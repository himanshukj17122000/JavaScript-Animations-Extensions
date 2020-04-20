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

module.exports = {
  TypePartHTML,
  HTMLParticle,
  HTMLType,
  HTMLAnime,
  HTMLTextAnim,
};
