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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NFTBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @thirdweb-dev/react */ \"./node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.browser.esm.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _NFTModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NFTModal */ \"./components/NFTModal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction NFTBox(param) {\n    let { // marketplace,\n    seller, nftAddress, tokenId, price } = param;\n    _s();\n    const status = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useConnectionStatus)();\n    const rawAddress = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useAddress)();\n    const address = rawAddress !== undefined ? rawAddress.toLowerCase() : rawAddress;\n    const chainId = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useChainId)();\n    const [imageUri, setImageUri] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tokenName, setTokenName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tokenDescription, setTokenDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const hideModal = ()=>setShowModal(false);\n    const { contract } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useContract)(nftAddress);\n    const { data: nftUri, isLoading: isNftUriLoading, error } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useContractRead)(contract, \"tokenURI\", tokenId);\n    const truncatedAddress = (address)=>\"\".concat(address.slice(0, 6), \"...\").concat(address.slice(-4));\n    const isOwnedByUser = seller === address;\n    const formattedSellerAddress = isOwnedByUser ? \"you\" : truncatedAddress(seller);\n    async function updateUI() {\n        if (nftUri) {\n            const requestURL = nftUri.replace(\"ipfs://\", \"https://ipfs.io/ipfs/\");\n            const tokenUriResponse = await (await fetch(requestURL)).json();\n            setImageUri(tokenUriResponse.image);\n            setTokenName(tokenUriResponse.name);\n            setTokenDescription(tokenUriResponse.description);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (status === \"connected\" && contract !== undefined) {\n            updateUI();\n        }\n    }, [\n        contract,\n        status,\n        nftUri,\n        showModal\n    ]);\n    const handleCardClick = ()=>{\n        setShowModal(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().nftBoxContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: !(chainId === undefined) ? imageUri || !isNftUriLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().nftModal),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NFTModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            isOwnedByUser: isOwnedByUser,\n                            tokenId: tokenId,\n                            nftAddress: nftAddress,\n                            price: price,\n                            onClose: hideModal\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                            lineNumber: 87,\n                            columnNumber: 41\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                        lineNumber: 85,\n                        columnNumber: 33\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: handleCardClick,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.MediaRenderer, {\n                                    src: imageUri,\n                                    width: \"200px\",\n                                    height: \"200px\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 37\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                                lineNumber: 98,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: tokenName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                                lineNumber: 105,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: tokenDescription\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                                lineNumber: 106,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    tokenId,\n                                    \" of \",\n                                    truncatedAddress(nftAddress)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                                lineNumber: 107,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: [\n                                    ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.formatEther(price),\n                                    \" ETH\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                                lineNumber: 110,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"owned by \",\n                                    formattedSellerAddress\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                                lineNumber: 111,\n                                columnNumber: 33\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                        lineNumber: 97,\n                        columnNumber: 29\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                lineNumber: 83,\n                columnNumber: 25\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                lineNumber: 115,\n                columnNumber: 25\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Please Connect Your Wallet\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.ConnectWallet, {}, void 0, false, {\n                        fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                        lineNumber: 120,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                lineNumber: 118,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n            lineNumber: 80,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n        lineNumber: 79,\n        columnNumber: 9\n    }, this);\n}\n_s(NFTBox, \"nDWKqtZU6MjZQrL8WSw/S6KiDRw=\", false, function() {\n    return [\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useConnectionStatus,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useAddress,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useChainId,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useContract,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useContractRead\n    ];\n});\n_c = NFTBox;\nvar _c;\n$RefreshReg$(_c, \"NFTBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29DQUFFO29DQUFVckI7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FJckIsOERBQUNXOzBCQUFJOzs7OztxQ0FHVCw4REFBQ0E7O29CQUFJO2tDQUVELDhEQUFDNUMsOERBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEM7R0E1R3dCSTs7UUFPTEwsb0VBQW1CQTtRQUNmSiwyREFBVUE7UUFJYkcsMkRBQVVBO1FBU1BGLDREQUFXQTtRQU0xQkMsZ0VBQWVBOzs7S0EzQkNPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTkZUQm94LmpzPzNjNmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge1xyXG4gICAgTWVkaWFSZW5kZXJlcixcclxuICAgIFdlYjNCdXR0b24sXHJcbiAgICB1c2VBZGRyZXNzLFxyXG4gICAgdXNlQ29udHJhY3QsXHJcbiAgICB1c2VDb250cmFjdFJlYWQsXHJcbiAgICB1c2VDaGFpbklkLFxyXG4gICAgdXNlQ29ubmVjdGlvblN0YXR1cyxcclxuICAgIENvbm5lY3RXYWxsZXQsXHJcbn0gZnJvbSBcIkB0aGlyZHdlYi1kZXYvcmVhY3RcIlxyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiXHJcblxyXG5pbXBvcnQge2V0aGVyc30gZnJvbSBcImV0aGVyc1wiXHJcbmltcG9ydCBORlRNb2RhbCBmcm9tIFwiLi9ORlRNb2RhbFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBORlRCb3goe1xyXG4gICAgLy8gbWFya2V0cGxhY2UsXHJcbiAgICBzZWxsZXIsXHJcbiAgICBuZnRBZGRyZXNzLFxyXG4gICAgdG9rZW5JZCxcclxuICAgIHByaWNlLFxyXG59KSB7XHJcbiAgICBjb25zdCBzdGF0dXMgPSB1c2VDb25uZWN0aW9uU3RhdHVzKClcclxuICAgIGNvbnN0IHJhd0FkZHJlc3MgPSB1c2VBZGRyZXNzKClcclxuICAgIGNvbnN0IGFkZHJlc3MgPVxyXG4gICAgICAgIHJhd0FkZHJlc3MgIT09IHVuZGVmaW5lZCA/IHJhd0FkZHJlc3MudG9Mb3dlckNhc2UoKSA6IHJhd0FkZHJlc3NcclxuXHJcbiAgICBjb25zdCBjaGFpbklkID0gdXNlQ2hhaW5JZCgpXHJcblxyXG4gICAgY29uc3QgW2ltYWdlVXJpLCBzZXRJbWFnZVVyaV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3Rva2VuTmFtZSwgc2V0VG9rZW5OYW1lXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbdG9rZW5EZXNjcmlwdGlvbiwgc2V0VG9rZW5EZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGhpZGVNb2RhbCA9ICgpID0+IHNldFNob3dNb2RhbChmYWxzZSlcclxuXHJcbiAgICBjb25zdCB7Y29udHJhY3R9ID0gdXNlQ29udHJhY3QobmZ0QWRkcmVzcylcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YTogbmZ0VXJpLFxyXG4gICAgICAgIGlzTG9hZGluZzogaXNOZnRVcmlMb2FkaW5nLFxyXG4gICAgICAgIGVycm9yLFxyXG4gICAgfSA9IHVzZUNvbnRyYWN0UmVhZChjb250cmFjdCwgXCJ0b2tlblVSSVwiLCB0b2tlbklkKVxyXG5cclxuICAgIGNvbnN0IHRydW5jYXRlZEFkZHJlc3MgPSAoYWRkcmVzcykgPT5cclxuICAgICAgICBgJHthZGRyZXNzLnNsaWNlKDAsIDYpfS4uLiR7YWRkcmVzcy5zbGljZSgtNCl9YFxyXG4gICAgY29uc3QgaXNPd25lZEJ5VXNlciA9IHNlbGxlciA9PT0gYWRkcmVzc1xyXG4gICAgY29uc3QgZm9ybWF0dGVkU2VsbGVyQWRkcmVzcyA9IGlzT3duZWRCeVVzZXJcclxuICAgICAgICA/IFwieW91XCJcclxuICAgICAgICA6IHRydW5jYXRlZEFkZHJlc3Moc2VsbGVyKVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVVJKCkge1xyXG4gICAgICAgIGlmIChuZnRVcmkpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdFVSTCA9IG5mdFVyaS5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgXCJpcGZzOi8vXCIsXHJcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vaXBmcy5pby9pcGZzL1wiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgY29uc3QgdG9rZW5VcmlSZXNwb25zZSA9IGF3YWl0IChhd2FpdCBmZXRjaChyZXF1ZXN0VVJMKSkuanNvbigpXHJcblxyXG4gICAgICAgICAgICBzZXRJbWFnZVVyaSh0b2tlblVyaVJlc3BvbnNlLmltYWdlKVxyXG4gICAgICAgICAgICBzZXRUb2tlbk5hbWUodG9rZW5VcmlSZXNwb25zZS5uYW1lKVxyXG4gICAgICAgICAgICBzZXRUb2tlbkRlc2NyaXB0aW9uKHRva2VuVXJpUmVzcG9uc2UuZGVzY3JpcHRpb24pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCJjb25uZWN0ZWRcIiAmJiBjb250cmFjdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVVJKClcclxuICAgICAgICB9XHJcbiAgICB9LCBbY29udHJhY3QsIHN0YXR1cywgbmZ0VXJpLCBzaG93TW9kYWxdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNhcmRDbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93TW9kYWwodHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmZ0Qm94Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHshKGNoYWluSWQgPT09IHVuZGVmaW5lZCkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmkgfHwgIWlzTmZ0VXJpTG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93TW9kYWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmZ0TW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TkZUTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc093bmVkQnlVc2VyPXtpc093bmVkQnlVc2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuSWQ9e3Rva2VuSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmZ0QWRkcmVzcz17bmZ0QWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGlkZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlQ2FyZENsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWFSZW5kZXJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVyaX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57dG9rZW5OYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Rva2VuRGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9rZW5JZH0gb2Yge3RydW5jYXRlZEFkZHJlc3MobmZ0QWRkcmVzcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57ZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKHByaWNlKX0gRVRIPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5vd25lZCBieSB7Zm9ybWF0dGVkU2VsbGVyQWRkcmVzc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgQ29ubmVjdCBZb3VyIFdhbGxldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29ubmVjdFdhbGxldCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTWVkaWFSZW5kZXJlciIsIldlYjNCdXR0b24iLCJ1c2VBZGRyZXNzIiwidXNlQ29udHJhY3QiLCJ1c2VDb250cmFjdFJlYWQiLCJ1c2VDaGFpbklkIiwidXNlQ29ubmVjdGlvblN0YXR1cyIsIkNvbm5lY3RXYWxsZXQiLCJzdHlsZXMiLCJldGhlcnMiLCJORlRNb2RhbCIsIk5GVEJveCIsInNlbGxlciIsIm5mdEFkZHJlc3MiLCJ0b2tlbklkIiwicHJpY2UiLCJzdGF0dXMiLCJyYXdBZGRyZXNzIiwiYWRkcmVzcyIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiY2hhaW5JZCIsImltYWdlVXJpIiwic2V0SW1hZ2VVcmkiLCJ0b2tlbk5hbWUiLCJzZXRUb2tlbk5hbWUiLCJ0b2tlbkRlc2NyaXB0aW9uIiwic2V0VG9rZW5EZXNjcmlwdGlvbiIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImhpZGVNb2RhbCIsImNvbnRyYWN0IiwiZGF0YSIsIm5mdFVyaSIsImlzTG9hZGluZyIsImlzTmZ0VXJpTG9hZGluZyIsImVycm9yIiwidHJ1bmNhdGVkQWRkcmVzcyIsInNsaWNlIiwiaXNPd25lZEJ5VXNlciIsImZvcm1hdHRlZFNlbGxlckFkZHJlc3MiLCJ1cGRhdGVVSSIsInJlcXVlc3RVUkwiLCJyZXBsYWNlIiwidG9rZW5VcmlSZXNwb25zZSIsImZldGNoIiwianNvbiIsImltYWdlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaGFuZGxlQ2FyZENsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwibmZ0Qm94Q29udGFpbmVyIiwibmZ0TW9kYWwiLCJvbkNsb3NlIiwib25DbGljayIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiaDIiLCJwIiwiaDMiLCJ1dGlscyIsImZvcm1hdEV0aGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NFTBox.js\n"));

/***/ })

});