import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const serve = express.static(path.resolve("./build"), { index: false });
const manifest = JSON.parse(
  fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf8")
);

function createPage(root) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <title>React App</title>
      <link href="${manifest.files["main.css"]}" rel="stylesheet" />
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">${root}</div>
      <script src="${manifest.files["main.js"]}"></script>
    </body>
  </html>
  `;
}

const serverRender = (req, res, next) => {
  const context = {};
  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const root = ReactDOMServer.renderToString(jsx);

  console.log({ root });

  console.log(createPage(root));

  res.send(createPage(root));
};

app.use(serve);
app.use(serverRender);

app.listen(5000, () => {
  console.log("running server");
});
