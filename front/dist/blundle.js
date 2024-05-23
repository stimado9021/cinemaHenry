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

/***/ "./scripts/cargarCard.js":
/*!*******************************!*\
  !*** ./scripts/cargarCard.js ***!
  \*******************************/
/***/ ((module) => {

eval("function postCard({_id,title,poster,description}){\r\n\r\n    return `<div class=\"col-lg-4 col-md-6 col-sm-12 col-xl-3 mb-4 owl-carousel owl-theme\" >\r\n                <div class=\"card\" key=\"${_id}\" style=\" box-shadow: 5px 5px 20px rgba(0,0,0,0.4);\r\n                transform: translateY(-3%);\">\r\n                    <img src=\"${poster}\" class=\"card-img-top\" alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                        <h7 class=\"card-title text-danger\">${title}</h7>\r\n                        <small>creadores : <strong>${description}</strong></small>                                    \r\n                    </div>\r\n                        <div class=\"card-footer\">\r\n                        <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>`    \r\n}\r\nmodule.exports = postCard;\r\n\r\n//***************************************************************** */\r\n//***************************************************************** */\r\n//***************************************************************** */\r\n// function llenarTarjeta({poster,title,director,duration,year,genre,rate}){\r\n//     return  `<div class=\"col-2 \">\r\n//                     <div class=\"card bg-dark text-white shadow-lg\">\r\n//                         <img src=\"${poster}\" class=\"card-img-top\" alt=\"${title}\">\r\n//                         <div class=\"card-body\">\r\n//                         <strong class=\"card-title text-warning \">${title}</strong>\r\n//                         <br/>\r\n//                         <small>Director : ${director}</small>\r\n//                         <br/>\r\n//                         <small>Duraccion : ${duration}</small>\r\n//                         <br/>\r\n//                         <small>Fecha : ${year}</small>                                     \r\n//                         <br/>\r\n                        \r\n//                         Calificacion : <small class=\"bg-danger p-1 rounded-circle\">${rate}</small> \r\n//                         <br/>\r\n//                         <small>Genero</small>\r\n//                         <br/>\r\n//                         <small class=\"text-warning  \">${genre.join('-')}</small> \r\n//                         </div>\r\n//                         <div class=\"card-footer p-2\">\r\n//                         <a href=\"\" class=\"btn btn-warning\">Ver Mas...</a>  \r\n//                         </div>\r\n//                     </div>\r\n//             </div>`\r\n// }\r\n\r\n// module.exports = llenarTarjeta;\r\n\n\n//# sourceURL=webpack://front/./scripts/cargarCard.js?");

/***/ }),

/***/ "./scripts/cargarData.js":
/*!*******************************!*\
  !*** ./scripts/cargarData.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\nconst postCard = __webpack_require__(/*! ./cargarCard.js */ \"./scripts/cargarCard.js\") \r\nconst llenarTarjeta = __webpack_require__(/*! ./cargarCard.js */ \"./scripts/cargarCard.js\") \r\n\r\n//***************************************************************** */\r\n//***************************************************************** */\r\n//***************************************************************** */\r\n\r\nfunction  topMarvel(){ \r\n \r\n    axios.get( \"http://localhost:3000/movies\")\r\n     .then(( response )=>{\r\n        var series = response.data\r\n         const marvelSeries = series.map((serie)=>{                      \r\n                    return postCard(serie)\r\n                  })\r\n                  document.getElementById('moviConte').innerHTML = marvelSeries             \r\n      })\r\n      .catch(( err )=>{\r\n        console.log(err)  \r\n      })                     \r\n}\r\nmodule.exports = topMarvel;\r\n\r\n//***************************************************************** */\r\n//***************************************************************** */\r\n//***************************************************************** */\r\n// function cargarMovi(){\r\n     \r\n//     $.get( \"https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=9ce9c9313a235f6f23dc67b408f88c73&hash=485848342f448d2f176965abe058eaad\", function( data ) {         \r\n//       let series = data.data.results \r\n//                     const caja = series.map(item=>{                        \r\n//                        return postCard(item)                            \r\n//                     })         \r\n//                   console.log( caja );               \r\n//                       //  document.getElementById('moviConte').innerHTML = caja\r\n                    \r\n//     });       \r\n// }\r\n\r\n// module.exports = cargarMovi;\r\n//***************************************************************** */\r\n//***************************************************************** */\r\n//***************************************************************** */\n\n//# sourceURL=webpack://front/./scripts/cargarData.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst topMarvel = __webpack_require__(/*! ./cargarData.js */ \"./scripts/cargarData.js\")\nconst cargarMovi = __webpack_require__(/*! ./cargarData.js */ \"./scripts/cargarData.js\")\n\n\n\n//console.log(tempData);\n//***************************************************************** */\n//***************************************************************** */\n//***************************************************************** */\n function getUrl(){   \n    var actual = window.location+'';   \n    var split = actual.split(\"=\");   \n    var id = split[split.length-1];\n    console.log(id);\n    let oscar = tempData.filter(movi => movi.id == id)\n    \n    document.getElementById('imgPelicula').src=oscar[0].poster;\n    document.getElementById('resumen').innerText=oscar[0].resumen;\n    document.getElementById('director').innerText=oscar[0].director;\n    document.getElementById('titulo').innerText=oscar[0].title;\n    document.getElementById('ano').innerText=oscar[0].year;\n    document.getElementById('duracion').innerText=oscar[0].duration;\n    document.getElementById('punta').innerText=oscar[0].rate;\n    var gen ='';\n         oscar[0].genre.map((r) =>{\n                gen += '<li>'+ r +'</li>'\n            })\n    document.getElementById('gene').innerHTML=gen\n}\n//***************************************************************** */\n//***************************************************************** */\n//***************************************************************** */\n\ntopMarvel() \n\n    \n\n\n   \n\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;