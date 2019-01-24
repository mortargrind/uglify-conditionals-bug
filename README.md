UglifyJS Conditionals Bug
-------------------------


* Run `npm install`
* Run `npm run start:cons-disabled` to minify without optimizing the conditionals and see that the minified and unminified versions' results are the same.
* Run `npm run start` to minify with default options (conditionals are optimized) and see the minified versions output is different than the original.
