/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/creaFilm.js":
/*!*****************************!*\
  !*** ./scripts/creaFilm.js ***!
  \*****************************/
/***/ (() => {

eval("   const saveMovie= document.getElementById('saveMovie')\r\n   saveMovie.addEventListener('click', ()=>{\r\n    let formData = new FormData(formMovies);\r\n    console.log(formData.get('poster'))\r\n   const datosMovie={\r\n        title:formData.get('title'),       \r\n        year:formData.get('year'),\r\n        director:formData.get('director'),\r\n        duration:formData.get('duration'),\r\n        genre:formData.get('genre'),\r\n        rate:formData.get('rate'),\r\n        poster:formData.get('poster'),\r\n        description:formData.get('description'),\r\n    }\r\n    console.log(dataMovies)\r\n\r\n   })\n\n//# sourceURL=webpack://front/./scripts/creaFilm.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/creaFilm.js"]();
/******/ 	
/******/ })()
;