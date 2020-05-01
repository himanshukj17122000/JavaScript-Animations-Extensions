// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const path = require("path");
const fs = require("fs");
const particle = require("./particle");
const typeWriter = require("./typewriter");
const CSS = require("./Css");
const TypePartHTML = require("./htmlContent");
const AppParticle = require("./app");
const fetch = require("node-fetch");
const globalCSS = require("./global_styling");
const axios = require("axios").default;
var checkEmpty = require("extfs");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "webStarter" is now active!');
  const myStatusBar = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );
  myStatusBar.command = "extensions.getCoronaUpdates";
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  var data;

  function checkCorona(data) {
    setInterval(function () {
      axios.get("https://api.covid19api.com/summary").then((response) => {
        // vscode.window.showInformationMessage(
        //   "The number of recovered people is " +
        //     response.data.Global.NewRecovered
        // );
        // vscode.window.showInformationMessage(
        //   "The number of recovered people is " +
        //     response.data.Global.NewRecovered
        // );
        // vscode.window.showInputBox().then((value) => {
        //   if (value == undefined) {
        //     return;
        //   }
        //   console.log(value);
        // });
        vscode.window.setStatusBarMessage(
          "Recovered: " + response.data.Global.NewRecovered
        );
      });
    }, 3000);
  }

  let corona = vscode.commands.registerCommand(
    "webStarter.getCoronaUpdates",
    function () {
      axios.get("https://api.covid19api.com/summary").then((response) => {
        // vscode.window.showInformationMessage(
        //   "The number of recovered people is " +
        //     response.data.Global.NewRecovered
        // );
        myStatusBar.text = response.data.Global.NewRecovered;
        myStatusBar.show();
        console.log(myStatusBar);
        vscode.window.showInputBox().then((value) => {
          if (value == undefined) {
            return;
          }
          vscode.window.setStatusBarMessage(
            "Recovered: " + response.data.Global.NewRecovered
          );
        });
        vscode.window.setStatusBarMessage(
          "Recovered: " + response.data.Global.NewRecovered
        );
        checkCorona();
      });
    }
  );

  let disposable = vscode.commands.registerCommand(
    "webStarter.createTypeParticles",
    function () {
      const HTMLContent = TypePartHTML.TypePartHTML;
      const typeScript = typeWriter.typeWriter;
      const JSContent = AppParticle.AppParticles;
      const particleJS = particle.particle;
      const CSSContent = CSS.CSSContent;
      const folderPath = vscode.workspace.workspaceFolders[0].uri
        .toString()
        .split(":")[1];
      fs.writeFile(path.join(folderPath, "index.html"), HTMLContent, (err) => {
        if (err) {
          console.log(err);
          vscode.window.showErrorMessage("Failed to create index.html");
        }
        vscode.window.showInformationMessage("Created index.html");
      });
      fs.writeFile(path.join(folderPath, "app.js"), JSContent, (err) => {
        if (err) {
          console.log(err);
          vscode.window.showErrorMessage("Failed to create app.js");
        }
        vscode.window.showInformationMessage("Created app.js");
      });
      fs.writeFile(path.join(folderPath, "particles.js"), particleJS, (err) => {
        if (err) {
          console.log(err);
          vscode.window.showErrorMessage("Failed to create particles.js");
        }
        vscode.window.showInformationMessage("Created particles.js");
      });
      fs.writeFile(path.join(folderPath, "style.css"), CSSContent, (err) => {
        if (err) {
          console.log(err);
          vscode.window.showErrorMessage("Failed to create style.css");
        }
        vscode.window.showInformationMessage("Created style.css");
      });
      fs.writeFile(path.join(folderPath, "typewrite.js"), typeScript, (err) => {
        if (err) {
          console.log(err);
          vscode.window.showErrorMessage("Failed to create typewrite.js");
        }
        vscode.window.showInformationMessage("Created typewrite.js");
      });
    }
  );
  let disposableType = vscode.commands.registerCommand(
    "webStarter.createType",
    function () {
      const HTMLContent = TypePartHTML.HTMLType;
      const typeScript = typeWriter.typeWriter;

      const CSSContent = CSS.CSSType;
      const folderPath = vscode.workspace.workspaceFolders[0].uri
        .toString()
        .split(":")[1];
      fs.writeFile(path.join(folderPath, "index.html"), HTMLContent, (err) => {
        if (err) {
          console.log(err);
          vscode.window.showErrorMessage("Failed to create index.html");
        }
        vscode.window.showInformationMessage("Created index.html");
      });
      fs.writeFile(path.join(folderPath, "style.css"), CSSContent, (err) => {
        if (err) {
          console.log(err);
          vscode.window.showErrorMessage("Failed to create style.css");
        }
        vscode.window.showInformationMessage("Created style.css");
      });
      fs.writeFile(path.join(folderPath, "typewrite.js"), typeScript, (err) => {
        if (err) {
          console.log(err);
          vscode.window.showErrorMessage("Failed to create typewrite.js");
        }
        vscode.window.showInformationMessage("Created typewrite.js");
      });
    }
  );
  let disposableAnime = vscode.commands.registerCommand(
    "webStarter.createAnime",
    function () {
      const HTMLContent = TypePartHTML.HTMLAnime;
      const JSContent = AppParticle.Stagger;
      const CSSContent = CSS.CSSAnime;
      const folderPath = vscode.workspace.workspaceFolders[0].uri
        .toString()
        .split(":")[1];
      fs.writeFile(path.join(folderPath, "index.html"), HTMLContent, (err) => {
        if (err) {
          console.log(err);
          vscode.window.showErrorMessage("Failed to create index.html");
        }
        vscode.window.showInformationMessage("Created index.html");
      });
      fs.writeFile(path.join(folderPath, "animation.js"), JSContent, (err) => {
        if (err) {
          console.log(err);
          vscode.window.showErrorMessage("Failed to create animation.js");
        }
        vscode.window.showInformationMessage("Created animation.js");
      });

      fs.writeFile(path.join(folderPath, "style.css"), CSSContent, (err) => {
        if (err) {
          console.log(err);
          vscode.window.showErrorMessage("Failed to create style.css");
        }
        vscode.window.showInformationMessage("Created style.css");
      });
    }
  );
  let disposableGlobal = vscode.commands.registerCommand(
    "webStarter.createGlobal",
    function () {
      const GlobalCSS = globalCSS.global_css;
      const folderPath = vscode.workspace.workspaceFolders[0].uri
        .toString()
        .split(":")[1];
      vscode.window.showInputBox().then((value) => {
        if (value == undefined) {
          return;
        }
        fs.appendFile(
          path.join(folderPath, value.toString() + ".css"),
          GlobalCSS,
          (err) => {
            if (err) {
              console.log(err);
              vscode.window.showErrorMessage(
                `Failed to create ${value.toString() + ".css"} `
              );
            }
            vscode.window.showInformationMessage(
              `Created ${value.toString() + ".css"}`
            );
          }
        );
      });
    }
  );
  let TextAnimation = vscode.commands.registerCommand(
    "webStarter.getTextAnim",
    function () {
      const HTMLContent = TypePartHTML.HTMLTextAnim;
      const TextAnimation = CSS.CSSText;
      const folderPath = vscode.workspace.workspaceFolders[0].uri
        .toString()
        .split(":")[1];

      fs.writeFile(path.join(folderPath, "index.html"), HTMLContent, (err) => {
        if (err) {
          console.log(err);
          vscode.window.showErrorMessage("Failed to create index.html");
        }
        vscode.window.showInformationMessage("Created index.html");
      });
      fs.writeFile(
        path.join(folderPath, "styles.css"),
        TextAnimation,
        (err) => {
          if (err) {
            console.log(err);
            vscode.window.showErrorMessage("Failed to create styles.css");
          }
          vscode.window.showInformationMessage("Created styles.css");
        }
      );
    }
  );
  let CubeAnimation = vscode.commands.registerCommand(
    "webStarter.getCube",
    function () {
      const HTMLContent = TypePartHTML.ThreeHTML;
      const CssContent = CSS.BOxMoving;
      const folderPath = vscode.workspace.workspaceFolders[0].uri
        .toString()
        .split(":")[1];

      fs.writeFile(path.join(folderPath, "index.html"), HTMLContent, (err) => {
        if (err) {
          console.log(err);
          vscode.window.showErrorMessage("Failed to create index.html");
        }
        vscode.window.showInformationMessage("Created index.html");
      });
    }
  );

  let MovingBox = vscode.commands.registerCommand(
    "webStarter.getBox",
    function () {
      const HTMLContent = TypePartHTML.BoxMoving;
      const CssContent = CSS.BOxMoving;
      const folderPath = vscode.workspace.workspaceFolders[0].uri
        .toString()
        .split(":")[1];

      fs.writeFile(path.join(folderPath, "index.html"), HTMLContent, (err) => {
        if (err) {
          console.log(err);
          vscode.window.showErrorMessage("Failed to create index.html");
        }
        vscode.window.showInformationMessage("Created index.html");
      });
      fs.writeFile(path.join(folderPath, "style.scss"), CssContent, (err) => {
        if (err) {
          console.log(err);
          vscode.window.showErrorMessage("Failed to create style.scss");
        }
        vscode.window.showInformationMessage("Created style.scss");
      });
    }
  );

  let CarBlueprint = vscode.commands.registerCommand(
    "webStarter.getCar",
    function () {
      const HTMLContent = TypePartHTML.ViVusCar;
      const JSContent = AppParticle.CarJs;
      const folderPath = vscode.workspace.workspaceFolders[0].uri
        .toString()
        .split(":")[1];

      fs.writeFile(path.join(folderPath, "index.html"), HTMLContent, (err) => {
        if (err) {
          console.log(err);
          vscode.window.showErrorMessage("Failed to create index.html");
        }
        vscode.window.showInformationMessage("Created index.html");
      });
      fs.writeFile(path.join(folderPath, "index.js"), JSContent, (err) => {
        if (err) {
          console.log(err);
          vscode.window.showErrorMessage("Failed to create index.js");
        }
        vscode.window.showInformationMessage("Created index.js");
      });
    }
  );

  let BallAnimation = vscode.commands.registerCommand(
    "webStarter.ballAnimation",
    function () {
      const BallHTML = TypePartHTML.BallAnimation;
      const EmptyHTML = TypePartHTML.EmptyBall;
      const BallAnimaton = CSS.BallAnimation;
      const folderPath = vscode.workspace.workspaceFolders[0].uri
        .toString()
        .split(":")[1];

      vscode.window.showInputBox().then((value) => {
        if (value == undefined) {
          return;
        }
        // checkEmpty.isEmpty(path.join(folderPath, "index.html"), function (empty) {
        //   console.log("HELLO")
        //   fs.appendFile(path.join(folderPath, "index.html"), EmptyHTML, (err) => {
        //     if (err) {
        //       vscode.window.showErrorMessage("Failed to create index.html");
        //     }
        //     vscode.window.showInformationMessage("Created index.html");
        //   });
        // });
        fs.appendFile(path.join(folderPath, "index.html"), BallHTML, (err) => {
          if (err) {
            console.log(err);
            vscode.window.showErrorMessage("Failed to create index.html");
          }
          vscode.window.showInformationMessage("Created index.html");
        });
        fs.appendFile(
          path.join(folderPath, value.toString() + ".css"),
          BallAnimaton,
          (err) => {
            if (err) {
              console.log(err);
              vscode.window.showErrorMessage(
                `Failed to create ${value.toString() + ".css"} `
              );
            }
            vscode.window.showInformationMessage(
              `Created ${value.toString() + ".css"}`
            );
          }
        );
      });
    }
  );

  let disposableParticle = vscode.commands.registerCommand(
    "webStarter.createParticles",
    function () {
      const HTMLContent = TypePartHTML.HTMLParticle;
      const JSContent = AppParticle.AppParticles;
      const particleJS = particle.particle;
      const CSSContent = CSS.CSSParticle;
      const folderPath = vscode.workspace.workspaceFolders[0].uri
        .toString()
        .split(":")[1];
      fs.writeFile(path.join(folderPath, "index.html"), HTMLContent, (err) => {
        if (err) {
          console.log(err);
          vscode.window.showErrorMessage("Failed to create index.html");
        }
        vscode.window.showInformationMessage("Created index.html");
      });
      fs.writeFile(path.join(folderPath, "app.js"), JSContent, (err) => {
        if (err) {
          console.log(err);
          vscode.window.showErrorMessage("Failed to create app.js");
        }
        vscode.window.showInformationMessage("Created app.js");
      });
      fs.writeFile(path.join(folderPath, "particles.js"), particleJS, (err) => {
        if (err) {
          console.log(err);
          vscode.window.showErrorMessage("Failed to create particles.js");
        }
        vscode.window.showInformationMessage("Created particles.js");
      });
      fs.writeFile(path.join(folderPath, "style.css"), CSSContent, (err) => {
        if (err) {
          console.log(err);
          vscode.window.showErrorMessage("Failed to create style.css");
        }
        vscode.window.showInformationMessage("Created style.css");
      });
    }
  );

  context.subscriptions.push(disposable);
  context.subscriptions.push(disposableType);
  context.subscriptions.push(disposableParticle);
  context.subscriptions.push(disposableAnime);
  context.subscriptions.push(disposableGlobal);
  context.subscriptions.push(corona);
  context.subscriptions.push(TextAnimation);
  context.subscriptions.push(BallAnimation);
  context.subscriptions.push(CubeAnimation);
  context.subscriptions.push(MovingBox);
  context.subscriptions.push(CarBlueprint);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
