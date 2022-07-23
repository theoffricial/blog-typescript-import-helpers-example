"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
// To ensure node not taking libraries from parent folders
// IGNORE
require("./disable-node-to-look-for-dependencies-on-parents-folders");
// #### the library main module ####
var math_1 = require("./math");
console.log('1 + 2 =', (0, math_1.add)(1, 2));
// To demonstrate how TypeScript transpile "async-await"
(function bla() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve(42)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
// To show how TypeScript handles "export star"
tslib_1.__exportStar(require("./math"), exports);
