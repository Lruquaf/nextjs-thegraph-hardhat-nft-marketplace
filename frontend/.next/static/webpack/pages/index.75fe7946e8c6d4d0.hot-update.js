"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/NFTBox.js":
/*!******************************!*\
  !*** ./components/NFTBox.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NFTBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @thirdweb-dev/react */ \"./node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.browser.esm.js\");\n/* harmony import */ var _constants_MedievalGenerals_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/MedievalGenerals.json */ \"./constants/MedievalGenerals.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _NFTModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NFTModal */ \"./components/NFTModal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction NFTBox(param) {\n    let { // marketplace,\n    seller, nftAddress, tokenId, price } = param;\n    _s();\n    const status = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useConnectionStatus)();\n    const rawAddress = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useAddress)();\n    const address = rawAddress !== undefined ? rawAddress.toLowerCase() : rawAddress;\n    const chainId = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useChainId)();\n    const [imageUri, setImageUri] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tokenName, setTokenName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tokenDescription, setTokenDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const hideModal = ()=>setShowModal(false);\n    const { contract } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useContract)(nftAddress);\n    const { data: nftUri, isLoading: isNftUriLoading, error } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useContractRead)(contract, \"tokenURI\", tokenId);\n    const truncatedAddress = (address)=>\"\".concat(address.slice(0, 6), \"...\").concat(address.slice(-4));\n    const isOwnedByUser = seller === address;\n    const formattedSellerAddress = isOwnedByUser ? \"you\" : truncatedAddress(seller);\n    async function updateUI() {\n        if (nftUri) {\n            const requestURL = nftUri.replace(\"ipfs://\", \"https://ipfs.io/ipfs/\");\n            const tokenUriResponse = await (await fetch(requestURL)).json();\n            setImageUri(tokenUriResponse.image);\n            setTokenName(tokenUriResponse.name);\n            setTokenDescription(tokenUriResponse.description);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (status === \"connected\" && contract !== undefined) {\n            updateUI();\n        }\n    }, [\n        contract,\n        status,\n        nftUri,\n        price\n    ]);\n    const handleCardClick = ()=>{\n        setShowModal(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: !(chainId === undefined) ? imageUri || !isNftUriLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NFTModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            // marketplace={marketplace}\n                            isOwnedByUser: isOwnedByUser,\n                            tokenId: tokenId,\n                            nftAddress: nftAddress,\n                            price: price,\n                            onClose: hideModal\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                            lineNumber: 88,\n                            columnNumber: 41\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                        lineNumber: 86,\n                        columnNumber: 33\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: handleCardClick,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.MediaRenderer, {\n                                    src: imageUri,\n                                    width: \"250px\",\n                                    height: \"250px\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 37\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                                lineNumber: 100,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: tokenName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                                lineNumber: 107,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: tokenDescription\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                                lineNumber: 108,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    tokenId,\n                                    \" of \",\n                                    truncatedAddress(nftAddress)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                                lineNumber: 109,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: [\n                                    ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.formatEther(price),\n                                    \" ETH\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                                lineNumber: 112,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"owned by \",\n                                    formattedSellerAddress\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                                lineNumber: 113,\n                                columnNumber: 33\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                        lineNumber: 99,\n                        columnNumber: 29\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                lineNumber: 84,\n                columnNumber: 25\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                lineNumber: 117,\n                columnNumber: 25\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Please Connect Your Wallet\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.ConnectWallet, {}, void 0, false, {\n                        fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                        lineNumber: 122,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                lineNumber: 120,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n            lineNumber: 81,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n        lineNumber: 80,\n        columnNumber: 9\n    }, this);\n}\n_s(NFTBox, \"nDWKqtZU6MjZQrL8WSw/S6KiDRw=\", false, function() {\n    return [\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useConnectionStatus,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useAddress,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useChainId,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useContract,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useContractRead\n    ];\n});\n_c = NFTBox;\nvar _c;\n$RefreshReg$(_c, \"NFTBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7OztxQ0FJckIsOERBQUNXOzBCQUFJOzs7OztxQ0FHVCw4REFBQ0E7O29CQUFJO2tDQUVELDhEQUFDN0MsOERBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEM7R0E3R3dCSzs7UUFPTE4sb0VBQW1CQTtRQUNmSiwyREFBVUE7UUFJYkcsMkRBQVVBO1FBU1BGLDREQUFXQTtRQU0xQkMsZ0VBQWVBOzs7S0EzQkNRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTkZUQm94LmpzPzNjNmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge1xyXG4gICAgTWVkaWFSZW5kZXJlcixcclxuICAgIFdlYjNCdXR0b24sXHJcbiAgICB1c2VBZGRyZXNzLFxyXG4gICAgdXNlQ29udHJhY3QsXHJcbiAgICB1c2VDb250cmFjdFJlYWQsXHJcbiAgICB1c2VDaGFpbklkLFxyXG4gICAgdXNlQ29ubmVjdGlvblN0YXR1cyxcclxuICAgIENvbm5lY3RXYWxsZXQsXHJcbn0gZnJvbSBcIkB0aGlyZHdlYi1kZXYvcmVhY3RcIlxyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL01vZGFsLm1vZHVsZS5jc3NcIlxyXG5cclxuaW1wb3J0IHtDT05UUkFDVF9BQkl9IGZyb20gXCIuLi9jb25zdGFudHMvTWVkaWV2YWxHZW5lcmFscy5qc29uXCJcclxuaW1wb3J0IHtldGhlcnN9IGZyb20gXCJldGhlcnNcIlxyXG5pbXBvcnQgTkZUTW9kYWwgZnJvbSBcIi4vTkZUTW9kYWxcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTkZUQm94KHtcclxuICAgIC8vIG1hcmtldHBsYWNlLFxyXG4gICAgc2VsbGVyLFxyXG4gICAgbmZ0QWRkcmVzcyxcclxuICAgIHRva2VuSWQsXHJcbiAgICBwcmljZSxcclxufSkge1xyXG4gICAgY29uc3Qgc3RhdHVzID0gdXNlQ29ubmVjdGlvblN0YXR1cygpXHJcbiAgICBjb25zdCByYXdBZGRyZXNzID0gdXNlQWRkcmVzcygpXHJcbiAgICBjb25zdCBhZGRyZXNzID1cclxuICAgICAgICByYXdBZGRyZXNzICE9PSB1bmRlZmluZWQgPyByYXdBZGRyZXNzLnRvTG93ZXJDYXNlKCkgOiByYXdBZGRyZXNzXHJcblxyXG4gICAgY29uc3QgY2hhaW5JZCA9IHVzZUNoYWluSWQoKVxyXG5cclxuICAgIGNvbnN0IFtpbWFnZVVyaSwgc2V0SW1hZ2VVcmldID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt0b2tlbk5hbWUsIHNldFRva2VuTmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3Rva2VuRGVzY3JpcHRpb24sIHNldFRva2VuRGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIilcclxuXHJcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBoaWRlTW9kYWwgPSAoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpXHJcblxyXG4gICAgY29uc3Qge2NvbnRyYWN0fSA9IHVzZUNvbnRyYWN0KG5mdEFkZHJlc3MpXHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGE6IG5mdFVyaSxcclxuICAgICAgICBpc0xvYWRpbmc6IGlzTmZ0VXJpTG9hZGluZyxcclxuICAgICAgICBlcnJvcixcclxuICAgIH0gPSB1c2VDb250cmFjdFJlYWQoY29udHJhY3QsIFwidG9rZW5VUklcIiwgdG9rZW5JZClcclxuXHJcbiAgICBjb25zdCB0cnVuY2F0ZWRBZGRyZXNzID0gKGFkZHJlc3MpID0+XHJcbiAgICAgICAgYCR7YWRkcmVzcy5zbGljZSgwLCA2KX0uLi4ke2FkZHJlc3Muc2xpY2UoLTQpfWBcclxuICAgIGNvbnN0IGlzT3duZWRCeVVzZXIgPSBzZWxsZXIgPT09IGFkZHJlc3NcclxuICAgIGNvbnN0IGZvcm1hdHRlZFNlbGxlckFkZHJlc3MgPSBpc093bmVkQnlVc2VyXHJcbiAgICAgICAgPyBcInlvdVwiXHJcbiAgICAgICAgOiB0cnVuY2F0ZWRBZGRyZXNzKHNlbGxlcilcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiB1cGRhdGVVSSgpIHtcclxuICAgICAgICBpZiAobmZ0VXJpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RVUkwgPSBuZnRVcmkucmVwbGFjZShcclxuICAgICAgICAgICAgICAgIFwiaXBmczovL1wiLFxyXG4gICAgICAgICAgICAgICAgXCJodHRwczovL2lwZnMuaW8vaXBmcy9cIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuVXJpUmVzcG9uc2UgPSBhd2FpdCAoYXdhaXQgZmV0Y2gocmVxdWVzdFVSTCkpLmpzb24oKVxyXG5cclxuICAgICAgICAgICAgc2V0SW1hZ2VVcmkodG9rZW5VcmlSZXNwb25zZS5pbWFnZSlcclxuICAgICAgICAgICAgc2V0VG9rZW5OYW1lKHRva2VuVXJpUmVzcG9uc2UubmFtZSlcclxuICAgICAgICAgICAgc2V0VG9rZW5EZXNjcmlwdGlvbih0b2tlblVyaVJlc3BvbnNlLmRlc2NyaXB0aW9uKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IFwiY29ubmVjdGVkXCIgJiYgY29udHJhY3QgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB1cGRhdGVVSSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NvbnRyYWN0LCBzdGF0dXMsIG5mdFVyaSwgcHJpY2VdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNhcmRDbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93TW9kYWwodHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7IShjaGFpbklkID09PSB1bmRlZmluZWQpID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVXJpIHx8ICFpc05mdFVyaUxvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd01vZGFsICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TkZUTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJrZXRwbGFjZT17bWFya2V0cGxhY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPd25lZEJ5VXNlcj17aXNPd25lZEJ5VXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbklkPXt0b2tlbklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5mdEFkZHJlc3M9e25mdEFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hpZGVNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZUNhcmRDbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhUmVuZGVyZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VVcml9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3Rva2VuTmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0b2tlbkRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rva2VuSWR9IG9mIHt0cnVuY2F0ZWRBZGRyZXNzKG5mdEFkZHJlc3MpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2V0aGVycy51dGlscy5mb3JtYXRFdGhlcihwcmljZSl9IEVUSDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+b3duZWQgYnkge2Zvcm1hdHRlZFNlbGxlckFkZHJlc3N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIENvbm5lY3QgWW91ciBXYWxsZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbm5lY3RXYWxsZXQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1lZGlhUmVuZGVyZXIiLCJXZWIzQnV0dG9uIiwidXNlQWRkcmVzcyIsInVzZUNvbnRyYWN0IiwidXNlQ29udHJhY3RSZWFkIiwidXNlQ2hhaW5JZCIsInVzZUNvbm5lY3Rpb25TdGF0dXMiLCJDb25uZWN0V2FsbGV0Iiwic3R5bGVzIiwiQ09OVFJBQ1RfQUJJIiwiZXRoZXJzIiwiTkZUTW9kYWwiLCJORlRCb3giLCJzZWxsZXIiLCJuZnRBZGRyZXNzIiwidG9rZW5JZCIsInByaWNlIiwic3RhdHVzIiwicmF3QWRkcmVzcyIsImFkZHJlc3MiLCJ1bmRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImNoYWluSWQiLCJpbWFnZVVyaSIsInNldEltYWdlVXJpIiwidG9rZW5OYW1lIiwic2V0VG9rZW5OYW1lIiwidG9rZW5EZXNjcmlwdGlvbiIsInNldFRva2VuRGVzY3JpcHRpb24iLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJoaWRlTW9kYWwiLCJjb250cmFjdCIsImRhdGEiLCJuZnRVcmkiLCJpc0xvYWRpbmciLCJpc05mdFVyaUxvYWRpbmciLCJlcnJvciIsInRydW5jYXRlZEFkZHJlc3MiLCJzbGljZSIsImlzT3duZWRCeVVzZXIiLCJmb3JtYXR0ZWRTZWxsZXJBZGRyZXNzIiwidXBkYXRlVUkiLCJyZXF1ZXN0VVJMIiwicmVwbGFjZSIsInRva2VuVXJpUmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJpbWFnZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImhhbmRsZUNhcmRDbGljayIsImRpdiIsIm9uQ2xvc2UiLCJvbkNsaWNrIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJoMiIsInAiLCJoMyIsInV0aWxzIiwiZm9ybWF0RXRoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NFTBox.js\n"));

/***/ })

});