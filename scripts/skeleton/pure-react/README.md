# react-sample-app
A sample app to show working of react with webpack.</br>
Has support for both sass & less.

## commands to run the app

`npm install` </br>
`npm start` - start webpack-dev-server </br>
`npm run build` - build webpack </br>

### Issues faced 
While bundling, the style-loader might create a problem - "node-sass not found" </br>
In that case, do  - `npm install node-sass --no-bin-links` </br>

While bundling, in case you are using less files, install less along with less-loader </br>
