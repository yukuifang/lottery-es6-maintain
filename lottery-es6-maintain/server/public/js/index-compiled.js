'use strict';

/******/(function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, {
                /******/configurable: false,
                /******/enumerable: true,
                /******/get: getter
                /******/ });
            /******/
        }
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
            return module['default'];
        } :
        /******/function getModuleExports() {
            return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = 0);
    /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

    module.exports = __webpack_require__(1);

    /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    __webpack_require__(2);

    /***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    /**
     * Created by fangyukui on 2018/1/21.
     */

    {
        console.log(Number.isInteger(25));
        console.log(Number.isInteger(25.0));
        console.log(Number.isInteger(25.1));
        console.log(Number.isInteger('haha'));
    }

    {
        console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
        console.log(Number.isSafeInteger(10));
        console.log(Number.isSafeInteger('a'));
    }

    {
        //取整数部分
        console.log(Math.trunc(4.1));
        console.log(Math.trunc(4.8));
        //向上取整
        console.log(Math.ceil(2.3));
        console.log(Math.ceil(2.8));
        //向下取整
        console.log(Math.floor(5.1));
        console.log(Math.floor(5.8));
    }

    /***/
}]);

//# sourceMappingURL=index-compiled.js.map