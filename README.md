# typescript-react-webpack-boilerplate

## How this boilerplate is created?
* Initialize the npm package description file with dependency information (package.json)
    * npm init 
* Install dependency
    * Development dependency
        * webpack (npm install --save-dev webpack)
        * typescript
        * awesome-typescript-loader
        * source-map-loader
    * Run-time dependency
        * react
        * react-dom
        * react-router-dom
        * @types/react 
        * @types/react-dom
* Create a webpack configuration (`webpack.config.js`)
    * this tells webpack the entry point of the program (e.g., app.js)
    * also tells webpack to compile typescript to javascript 
    * also adds in other plugins 