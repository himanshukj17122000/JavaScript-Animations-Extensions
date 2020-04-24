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
module.exports = {
	CSSContent,
	CSSParticle,
	CSSType,
	CSSAnime,
	CSSText,
	BallAnimation
};