const BallAnimation = `.box {
	margin: 0 auto;
	width: 500px;
	height: 300px;
	position: relative;
	box-shadow: inset 0 0 3px #000;
	border-radius: 5px;
	border: 1px solid #111;
	overflow: hidden;
}

b {
	display: block;
	width: 50px;
	height: 50px;
	opacity: 0.8;
	border-radius: 50%;
	background-color: #262945;
	box-shadow: inset -5px -5px 5px rgba(0, 0, 0, 0.6),
		15px 15px 2px rgba(0, 0, 0, 0.04);
	position: absolute;
	-webkit-animation: moveX 3.05s linear 0s infinite alternate,
		moveY 3.4s linear 0s infinite alternate;
	-moz-animation: moveX 3.05s linear 0s infinite alternate,
		moveY 3.4s linear 0s infinite alternate;
	-o-animation: moveX 3.05s linear 0s infinite alternate,
		moveY 3.4s linear 0s infinite alternate;
	animation: moveX 3.05s linear 0s infinite alternate,
		moveY 3.4s linear 0s infinite alternate;
}

@-webkit-keyframes moveX {
	from {
		left: 0;
	}

	to {
		left: 95%;
	}
}

@-moz-keyframes moveX {
	from {
		left: 0;
	}

	to {
		left: 95%;
	}
}

@-o-keyframes moveX {
	from {
		left: 0;
	}

	to {
		left: 95%;
	}
}

@keyframes moveX {
	from {
		left: 0;
	}

	to {
		left: 95%;
	}
}

@-webkit-keyframes moveY {
	from {
		top: 0;
	}

	to {
		top: 95%;
	}
}

@-moz-keyframes moveY {
	from {
		top: 0;
	}

	to {
		top: 95%;
	}
}

@-o-keyframes moveY {
	from {
		top: 0;
	}

	to {
		top: 95%;
	}
}

.profileImage {
	border-radius: 50%;
}

@keyframes moveY {
	from {
		top: 0;
	}

	to {
		top: 95%;
	}
}`
const CSSContent = `html,
	  body,
	  h1,
	  h2,
	  h3,
	  p,
	  div,
	  li,
	  ul {
		margin: 0px;
		padding: 0px;
		font-family: Arial;
		color: black;
		letter-spacing: 2px;
	  }
	  #particles-js {
		height: 100%;
		background-color:black ;
		background-size: cover;
	  
		display: flex;
		align-items: center;
		justify-items: center;
	  }
	  
	  #particles-js.profileImage {
		opacity: 0.4;
	  }
	  /* @keyframes example {
		from {
		  background: url(images/bakground.jpg) no-repeat center center fixed;
		  -webkit-background-size: cover;
		  -moz-background-size: cover;
		  -o-background-size: cover;
		  background-size: cover;
		}
		to {
		  background: url(images/background2.jpg) no-repeat center center fixed;
		  -webkit-background-size: cover;
		  -moz-background-size: cover;
		  -o-background-size: cover;
		  background-size: cover;
		}
	  } */
	  .particles-js-canvas-el {
		position: absolute;
	  }
	  html,
	  body {
		height: 100%;
		background-color: rgba(255, 255, 255, 0.1);
	  }
	  html {
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	  }
	  
	  header {
		width: 100%;
		height: 10%;
		text-align: center;
	  }
	  
	  header h1 {
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	  }
	  
      `;

const CSSParticle = `html,
	  body,
	  h1,
	  h2,
	  h3,
	  p,
	  div,
	  li,
	  ul {
		margin: 0px;
		padding: 0px;
		font-family: Arial;
		color: black;
		letter-spacing: 2px;
	  }
	  #particles-js {
		height: 100%;
		background-color:black ;
		background-size: cover;
	  	display: flex;
		align-items: center;
		justify-items: center;
	  }
	 
	  .particles-js-canvas-el {
		position: absolute;
	  }
	  html,
	  body {
		height: 100%;
		background-color: rgba(255, 255, 255, 0.1);
	  }
	  html {
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	  }
	  
	  header {
		width: 100%;
		height: 10%;
		text-align: center;
	  }
	  
	  header h1 {
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	  }
	  
      `;

const CSSType = `html,
    body,
    h1,
    h2,
    h3,
    p,
    div,
    li,
    ul {
      margin: 0px;
      padding: 0px;
      font-family: Arial;
      color: black;
      letter-spacing: 2px;
    }
    html,
    body {
      height: 100%;
      background-color: rgba(255, 255, 255, 0.1);
    }
    html {
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    }
    
    header {
      width: 100%;
      height: 10%;
      text-align: center;
    }
    
    header h1 {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
    
    `;

const CSSAnime = `body,
html {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #ff4b4b;
}
  `;

const CSSText = `body {
	background-color: black;
	vertical-align: middle;
	color: bisque;
	display: flex;
	justify-content: center;
  }
  h1 {
	display: flex;
	justify-self: center;
	margin: 300px 50px;
	vertical-align: middle;
  }
  `;

const BOxMoving = `body {
    background: rgba(255, 230, 100, 0.35);
}

.layers {
    position: fixed;
    left: 40vw;
    top: 45vh;
    transform: scaleY(0.5) scaleX(1.5);
    animation: scale ease-in-out 10s infinite;
}

@keyframes scale {
    50% {
        transform: rotateX(45deg) rotateZ(45deg) translate3d(0vh, 0vh, 15vh) scale(1);
    }
}

p {
    position: absolute;
    width: 10vw;
    height: 10vw;
    background: rgba(255, 0, 0, 0.25);
}

@for $i from -6 to 6 {
    p:nth-child(#{$i+6}) {
        transform: rotateX(45deg) rotateZ(45deg) translate3d(0vh, 0vh, $i*17vh);
        filter: hue-rotate(($i+6)*36deg);
        animation: slide#{$i} ease-in-out 10s infinite;
    }

    @keyframes slide#{$i} {
        50% {
            transform: rotateX(45deg) rotateZ(45deg) translate3d(0vh, 0vh, -$i*17vh) scale(0.5 + 0.05*$i);
        }
    }
}`


const RocketCSS = `path {
    fill-opacity: 0;
    transition: fill-opacity 1s;
}

.fill-1 g:first-of-type>path {
    fill: #1c8ece;
    fill-opacity: 1;
}

.fill-2 g:last-of-type>path {
    fill: #ffffff;
    fill-opacity: 1;
}

.fill-3 path:first-of-type {
    fill: #f4a260;
    fill-opacity: 1;
}

.fill-4 path:nth-of-type(2) {
    fill: #ea3e2f;
    fill-opacity: 1;
}

.fill-5 path:nth-of-type(3) {
    fill: #d1d2d4;
    fill-opacity: 1;
}

.fill-6 path:nth-of-type(4),
.fill-6 path:nth-of-type(5) {
    fill: #000000;
    fill-opacity: 1;
}

.fill-7 path:nth-of-type(6) {
    fill: #ffffff;
    fill-opacity: 1;
}

.clear-stroke path {
    stroke: none;
}`

const scrollCSS = `/* utility */
html.sr .load-hidden {
    visibility: hidden;
}

.widget-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    background: black;
    border-radius: 8px;
}

.widget {
    width: 15%;
    height: 50px;
    flex: auto;
    margin: 0.5rem;
    background: white;
    line-height: 50px;
    text-align: center;
    border-radius: 4px;
}

/* extension */
html.sr .widget {
    visibility: hidden;
}`
module.exports = {
	CSSContent,
	CSSParticle,
	CSSType,
	CSSAnime,
	CSSText,
	BallAnimation,
	BOxMoving,
	RocketCSS,
	scrollCSS
};