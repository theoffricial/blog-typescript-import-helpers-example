/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-var */

// I took this code from StackOverflow: https://stackoverflow.com/a/32858131/11554280
// It is just to make sure the project is not working for you, unless "tslib" installed in the project
var Module = require('module').Module;
var nodeModulePaths= Module._nodeModulePaths; //backup the original method

Module._nodeModulePaths = function(from) {
    var paths = nodeModulePaths.call(this, from); // call the original method

    //add your logic here to exclude parent dirs, I did a simple match with current dir
    paths = paths.filter(function(path){
        return path.match(__dirname)
    })
    return paths;
    
};