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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NFTBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @thirdweb-dev/react */ \"./node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.browser.esm.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _NFTModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NFTModal */ \"./components/NFTModal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction NFTBox(param) {\n    let { seller, nftAddress, tokenId, price } = param;\n    _s();\n    const status = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useConnectionStatus)();\n    const rawAddress = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useAddress)();\n    const address = rawAddress !== undefined ? rawAddress.toLowerCase() : rawAddress;\n    const chainId = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useChainId)();\n    const [imageUri, setImageUri] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tokenName, setTokenName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tokenDescription, setTokenDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const hideModal = ()=>setShowModal(false);\n    const { contract } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useContract)(nftAddress);\n    const { data: nftUri, isLoading: isNftUriLoading, error } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useContractRead)(contract, \"tokenURI\", tokenId);\n    const truncatedAddress = (address)=>\"\".concat(address.slice(0, 6), \"...\").concat(address.slice(-4));\n    const isOwnedByUser = seller === address;\n    const formattedSellerAddress = isOwnedByUser ? \"you\" : truncatedAddress(seller);\n    async function updateUI() {\n        if (nftUri) {\n            const requestURL = nftUri.replace(\"ipfs://\", \"https://ipfs.io/ipfs/\");\n            const tokenUriResponse = await (await fetch(requestURL)).json();\n            setImageUri(tokenUriResponse.image);\n            setTokenName(tokenUriResponse.name);\n            setTokenDescription(tokenUriResponse.description);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (status === \"connected\" && contract !== undefined) {\n            updateUI();\n        }\n    }, [\n        contract,\n        status,\n        nftUri\n    ]);\n    const handleCardClick = ()=>{\n        setShowModal(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().nftBoxContainer),\n        onClick: handleCardClick,\n        children: [\n            !(chainId === undefined) ? imageUri || !isNftUriLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().nftImage),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.MediaRenderer, {\n                            src: imageUri,\n                            width: \"200px\",\n                            height: \"200px\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                            lineNumber: 74,\n                            columnNumber: 29\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                        lineNumber: 73,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: tokenName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                        lineNumber: 80,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: tokenDescription\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                        lineNumber: 81,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            tokenId,\n                            \" of \",\n                            truncatedAddress(nftAddress)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                        lineNumber: 82,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.formatEther(price),\n                            \" ETH\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                        lineNumber: 85,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"owned by \",\n                            formattedSellerAddress\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                        lineNumber: 86,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                lineNumber: 72,\n                columnNumber: 21\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                lineNumber: 89,\n                columnNumber: 21\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Please Connect Your Wallet\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.ConnectWallet, {}, void 0, false, {\n                        fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                        lineNumber: 94,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                lineNumber: 92,\n                columnNumber: 17\n            }, this),\n            showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NFTModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                isOwnedByUser: isOwnedByUser,\n                tokenId: tokenId,\n                nftAddress: nftAddress,\n                price: price,\n                onClose: hideModal\n            }, void 0, false, {\n                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                lineNumber: 98,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, this);\n}\n_s(NFTBox, \"nDWKqtZU6MjZQrL8WSw/S6KiDRw=\", false, function() {\n    return [\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useConnectionStatus,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useAddress,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useChainId,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useContract,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useContractRead\n    ];\n});\n_c = NFTBox;\nvar _c;\n$RefreshReg$(_c, \"NFTBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtnQkFDWkUsT0FBT0E7Z0JBQ1BpRCxTQUFTbEM7Ozs7Ozs7Ozs7OztBQUs3QjtHQTNGd0JuQjs7UUFDTEwsb0VBQW1CQTtRQUNmSiwyREFBVUE7UUFHYkcsMkRBQVVBO1FBUVBGLDREQUFXQTtRQU0xQkMsZ0VBQWVBOzs7S0FuQkNPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTkZUQm94LmpzPzNjNmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge1xyXG4gICAgTWVkaWFSZW5kZXJlcixcclxuICAgIFdlYjNCdXR0b24sXHJcbiAgICB1c2VBZGRyZXNzLFxyXG4gICAgdXNlQ29udHJhY3QsXHJcbiAgICB1c2VDb250cmFjdFJlYWQsXHJcbiAgICB1c2VDaGFpbklkLFxyXG4gICAgdXNlQ29ubmVjdGlvblN0YXR1cyxcclxuICAgIENvbm5lY3RXYWxsZXQsXHJcbn0gZnJvbSBcIkB0aGlyZHdlYi1kZXYvcmVhY3RcIlxyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB7ZXRoZXJzfSBmcm9tIFwiZXRoZXJzXCJcclxuaW1wb3J0IE5GVE1vZGFsIGZyb20gXCIuL05GVE1vZGFsXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5GVEJveCh7c2VsbGVyLCBuZnRBZGRyZXNzLCB0b2tlbklkLCBwcmljZX0pIHtcclxuICAgIGNvbnN0IHN0YXR1cyA9IHVzZUNvbm5lY3Rpb25TdGF0dXMoKVxyXG4gICAgY29uc3QgcmF3QWRkcmVzcyA9IHVzZUFkZHJlc3MoKVxyXG4gICAgY29uc3QgYWRkcmVzcyA9XHJcbiAgICAgICAgcmF3QWRkcmVzcyAhPT0gdW5kZWZpbmVkID8gcmF3QWRkcmVzcy50b0xvd2VyQ2FzZSgpIDogcmF3QWRkcmVzc1xyXG4gICAgY29uc3QgY2hhaW5JZCA9IHVzZUNoYWluSWQoKVxyXG5cclxuICAgIGNvbnN0IFtpbWFnZVVyaSwgc2V0SW1hZ2VVcmldID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt0b2tlbk5hbWUsIHNldFRva2VuTmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3Rva2VuRGVzY3JpcHRpb24sIHNldFRva2VuRGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGhpZGVNb2RhbCA9ICgpID0+IHNldFNob3dNb2RhbChmYWxzZSlcclxuXHJcbiAgICBjb25zdCB7Y29udHJhY3R9ID0gdXNlQ29udHJhY3QobmZ0QWRkcmVzcylcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YTogbmZ0VXJpLFxyXG4gICAgICAgIGlzTG9hZGluZzogaXNOZnRVcmlMb2FkaW5nLFxyXG4gICAgICAgIGVycm9yLFxyXG4gICAgfSA9IHVzZUNvbnRyYWN0UmVhZChjb250cmFjdCwgXCJ0b2tlblVSSVwiLCB0b2tlbklkKVxyXG5cclxuICAgIGNvbnN0IHRydW5jYXRlZEFkZHJlc3MgPSAoYWRkcmVzcykgPT5cclxuICAgICAgICBgJHthZGRyZXNzLnNsaWNlKDAsIDYpfS4uLiR7YWRkcmVzcy5zbGljZSgtNCl9YFxyXG4gICAgY29uc3QgaXNPd25lZEJ5VXNlciA9IHNlbGxlciA9PT0gYWRkcmVzc1xyXG4gICAgY29uc3QgZm9ybWF0dGVkU2VsbGVyQWRkcmVzcyA9IGlzT3duZWRCeVVzZXJcclxuICAgICAgICA/IFwieW91XCJcclxuICAgICAgICA6IHRydW5jYXRlZEFkZHJlc3Moc2VsbGVyKVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVVJKCkge1xyXG4gICAgICAgIGlmIChuZnRVcmkpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdFVSTCA9IG5mdFVyaS5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgXCJpcGZzOi8vXCIsXHJcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vaXBmcy5pby9pcGZzL1wiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgY29uc3QgdG9rZW5VcmlSZXNwb25zZSA9IGF3YWl0IChhd2FpdCBmZXRjaChyZXF1ZXN0VVJMKSkuanNvbigpXHJcbiAgICAgICAgICAgIHNldEltYWdlVXJpKHRva2VuVXJpUmVzcG9uc2UuaW1hZ2UpXHJcbiAgICAgICAgICAgIHNldFRva2VuTmFtZSh0b2tlblVyaVJlc3BvbnNlLm5hbWUpXHJcbiAgICAgICAgICAgIHNldFRva2VuRGVzY3JpcHRpb24odG9rZW5VcmlSZXNwb25zZS5kZXNjcmlwdGlvbilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSBcImNvbm5lY3RlZFwiICYmIGNvbnRyYWN0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdXBkYXRlVUkoKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtjb250cmFjdCwgc3RhdHVzLCBuZnRVcmldKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNhcmRDbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93TW9kYWwodHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmZ0Qm94Q29udGFpbmVyfSBvbkNsaWNrPXtoYW5kbGVDYXJkQ2xpY2t9PlxyXG4gICAgICAgICAgICB7IShjaGFpbklkID09PSB1bmRlZmluZWQpID8gKFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmkgfHwgIWlzTmZ0VXJpTG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5mdEltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZWRpYVJlbmRlcmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVyaX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt0b2tlbk5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Rva2VuRGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2tlbklkfSBvZiB7dHJ1bmNhdGVkQWRkcmVzcyhuZnRBZGRyZXNzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2V0aGVycy51dGlscy5mb3JtYXRFdGhlcihwcmljZSl9IEVUSDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPm93bmVkIGJ5IHtmb3JtYXR0ZWRTZWxsZXJBZGRyZXNzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFBsZWFzZSBDb25uZWN0IFlvdXIgV2FsbGV0XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbm5lY3RXYWxsZXQgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7c2hvd01vZGFsICYmIChcclxuICAgICAgICAgICAgICAgIDxORlRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIGlzT3duZWRCeVVzZXI9e2lzT3duZWRCeVVzZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5JZD17dG9rZW5JZH1cclxuICAgICAgICAgICAgICAgICAgICBuZnRBZGRyZXNzPXtuZnRBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoaWRlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1lZGlhUmVuZGVyZXIiLCJXZWIzQnV0dG9uIiwidXNlQWRkcmVzcyIsInVzZUNvbnRyYWN0IiwidXNlQ29udHJhY3RSZWFkIiwidXNlQ2hhaW5JZCIsInVzZUNvbm5lY3Rpb25TdGF0dXMiLCJDb25uZWN0V2FsbGV0Iiwic3R5bGVzIiwiZXRoZXJzIiwiTkZUTW9kYWwiLCJORlRCb3giLCJzZWxsZXIiLCJuZnRBZGRyZXNzIiwidG9rZW5JZCIsInByaWNlIiwic3RhdHVzIiwicmF3QWRkcmVzcyIsImFkZHJlc3MiLCJ1bmRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImNoYWluSWQiLCJpbWFnZVVyaSIsInNldEltYWdlVXJpIiwidG9rZW5OYW1lIiwic2V0VG9rZW5OYW1lIiwidG9rZW5EZXNjcmlwdGlvbiIsInNldFRva2VuRGVzY3JpcHRpb24iLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJoaWRlTW9kYWwiLCJjb250cmFjdCIsImRhdGEiLCJuZnRVcmkiLCJpc0xvYWRpbmciLCJpc05mdFVyaUxvYWRpbmciLCJlcnJvciIsInRydW5jYXRlZEFkZHJlc3MiLCJzbGljZSIsImlzT3duZWRCeVVzZXIiLCJmb3JtYXR0ZWRTZWxsZXJBZGRyZXNzIiwidXBkYXRlVUkiLCJyZXF1ZXN0VVJMIiwicmVwbGFjZSIsInRva2VuVXJpUmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJpbWFnZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImhhbmRsZUNhcmRDbGljayIsImRpdiIsImNsYXNzTmFtZSIsIm5mdEJveENvbnRhaW5lciIsIm9uQ2xpY2siLCJuZnRJbWFnZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiaDIiLCJwIiwiaDMiLCJ1dGlscyIsImZvcm1hdEV0aGVyIiwib25DbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NFTBox.js\n"));

/***/ })

});