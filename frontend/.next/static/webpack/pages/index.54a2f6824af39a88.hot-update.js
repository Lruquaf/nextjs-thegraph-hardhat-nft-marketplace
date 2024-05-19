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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NFTBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @thirdweb-dev/react */ \"./node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.browser.esm.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _NFTModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NFTModal */ \"./components/NFTModal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction NFTBox(param) {\n    let { // marketplace,\n    seller, nftAddress, tokenId, price } = param;\n    _s();\n    const status = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useConnectionStatus)();\n    const rawAddress = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useAddress)();\n    const address = rawAddress !== undefined ? rawAddress.toLowerCase() : rawAddress;\n    const chainId = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useChainId)();\n    const [imageUri, setImageUri] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tokenName, setTokenName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tokenDescription, setTokenDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const hideModal = ()=>setShowModal(false);\n    const { contract } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useContract)(nftAddress);\n    const { data: nftUri, isLoading: isNftUriLoading, error } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useContractRead)(contract, \"tokenURI\", tokenId);\n    const truncatedAddress = (address)=>\"\".concat(address.slice(0, 6), \"...\").concat(address.slice(-4));\n    const isOwnedByUser = seller === address;\n    const formattedSellerAddress = isOwnedByUser ? \"you\" : truncatedAddress(seller);\n    async function updateUI() {\n        if (nftUri) {\n            const requestURL = nftUri.replace(\"ipfs://\", \"https://ipfs.io/ipfs/\");\n            const tokenUriResponse = await (await fetch(requestURL)).json();\n            setImageUri(tokenUriResponse.image);\n            setTokenName(tokenUriResponse.name);\n            setTokenDescription(tokenUriResponse.description);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (status === \"connected\" && contract !== undefined) {\n            updateUI();\n        }\n    }, [\n        contract,\n        status,\n        nftUri,\n        showModal\n    ]);\n    const handleCardClick = ()=>{\n        setShowModal(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().nftBoxContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                !(chainId === undefined) ? imageUri || !isNftUriLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: handleCardClick,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().nftImage),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.MediaRenderer, {\n                                    src: imageUri,\n                                    width: \"200px\",\n                                    height: \"200px\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 37\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                                lineNumber: 85,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: tokenName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                                lineNumber: 92,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: tokenDescription\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                                lineNumber: 93,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    tokenId,\n                                    \" of \",\n                                    truncatedAddress(nftAddress)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                                lineNumber: 94,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: [\n                                    ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.formatEther(price),\n                                    \" ETH\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                                lineNumber: 97,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"owned by \",\n                                    formattedSellerAddress\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                                lineNumber: 98,\n                                columnNumber: 33\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                        lineNumber: 84,\n                        columnNumber: 29\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                    lineNumber: 83,\n                    columnNumber: 25\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                    lineNumber: 102,\n                    columnNumber: 25\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"Please Connect Your Wallet\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.ConnectWallet, {}, void 0, false, {\n                            fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                            lineNumber: 107,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                    lineNumber: 105,\n                    columnNumber: 21\n                }, this),\n                showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().nftModal),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NFTModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        isOwnedByUser: isOwnedByUser,\n                        tokenId: tokenId,\n                        nftAddress: nftAddress,\n                        price: price,\n                        onClose: hideModal\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                        lineNumber: 113,\n                        columnNumber: 29\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                    lineNumber: 111,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n            lineNumber: 80,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n        lineNumber: 79,\n        columnNumber: 9\n    }, this);\n}\n_s(NFTBox, \"nDWKqtZU6MjZQrL8WSw/S6KiDRw=\", false, function() {\n    return [\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useConnectionStatus,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useAddress,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useChainId,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useContract,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useContractRead\n    ];\n});\n_c = NFTBox;\nvar _c;\n$RefreshReg$(_c, \"NFTBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN1QjtvQkFBSUMsV0FBVzVDLHlFQUFlOzhCQUV2Qiw0RUFBQ0UsaURBQVFBO3dCQUNMNkIsZUFBZUE7d0JBQ2Z6QixTQUFTQTt3QkFDVEQsWUFBWUE7d0JBQ1pFLE9BQU9BO3dCQUNQa0QsU0FBU25DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXpDO0dBNUd3Qm5COztRQU9MTCxvRUFBbUJBO1FBQ2ZKLDJEQUFVQTtRQUliRywyREFBVUE7UUFTUEYsNERBQVdBO1FBTTFCQyxnRUFBZUE7OztLQTNCQ08iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ORlRCb3guanM/M2M2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7XHJcbiAgICBNZWRpYVJlbmRlcmVyLFxyXG4gICAgV2ViM0J1dHRvbixcclxuICAgIHVzZUFkZHJlc3MsXHJcbiAgICB1c2VDb250cmFjdCxcclxuICAgIHVzZUNvbnRyYWN0UmVhZCxcclxuICAgIHVzZUNoYWluSWQsXHJcbiAgICB1c2VDb25uZWN0aW9uU3RhdHVzLFxyXG4gICAgQ29ubmVjdFdhbGxldCxcclxufSBmcm9tIFwiQHRoaXJkd2ViLWRldi9yZWFjdFwiXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCJcclxuXHJcbmltcG9ydCB7ZXRoZXJzfSBmcm9tIFwiZXRoZXJzXCJcclxuaW1wb3J0IE5GVE1vZGFsIGZyb20gXCIuL05GVE1vZGFsXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5GVEJveCh7XHJcbiAgICAvLyBtYXJrZXRwbGFjZSxcclxuICAgIHNlbGxlcixcclxuICAgIG5mdEFkZHJlc3MsXHJcbiAgICB0b2tlbklkLFxyXG4gICAgcHJpY2UsXHJcbn0pIHtcclxuICAgIGNvbnN0IHN0YXR1cyA9IHVzZUNvbm5lY3Rpb25TdGF0dXMoKVxyXG4gICAgY29uc3QgcmF3QWRkcmVzcyA9IHVzZUFkZHJlc3MoKVxyXG4gICAgY29uc3QgYWRkcmVzcyA9XHJcbiAgICAgICAgcmF3QWRkcmVzcyAhPT0gdW5kZWZpbmVkID8gcmF3QWRkcmVzcy50b0xvd2VyQ2FzZSgpIDogcmF3QWRkcmVzc1xyXG5cclxuICAgIGNvbnN0IGNoYWluSWQgPSB1c2VDaGFpbklkKClcclxuXHJcbiAgICBjb25zdCBbaW1hZ2VVcmksIHNldEltYWdlVXJpXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbdG9rZW5OYW1lLCBzZXRUb2tlbk5hbWVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt0b2tlbkRlc2NyaXB0aW9uLCBzZXRUb2tlbkRlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gICAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgaGlkZU1vZGFsID0gKCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IHtjb250cmFjdH0gPSB1c2VDb250cmFjdChuZnRBZGRyZXNzKVxyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRhOiBuZnRVcmksXHJcbiAgICAgICAgaXNMb2FkaW5nOiBpc05mdFVyaUxvYWRpbmcsXHJcbiAgICAgICAgZXJyb3IsXHJcbiAgICB9ID0gdXNlQ29udHJhY3RSZWFkKGNvbnRyYWN0LCBcInRva2VuVVJJXCIsIHRva2VuSWQpXHJcblxyXG4gICAgY29uc3QgdHJ1bmNhdGVkQWRkcmVzcyA9IChhZGRyZXNzKSA9PlxyXG4gICAgICAgIGAke2FkZHJlc3Muc2xpY2UoMCwgNil9Li4uJHthZGRyZXNzLnNsaWNlKC00KX1gXHJcbiAgICBjb25zdCBpc093bmVkQnlVc2VyID0gc2VsbGVyID09PSBhZGRyZXNzXHJcbiAgICBjb25zdCBmb3JtYXR0ZWRTZWxsZXJBZGRyZXNzID0gaXNPd25lZEJ5VXNlclxyXG4gICAgICAgID8gXCJ5b3VcIlxyXG4gICAgICAgIDogdHJ1bmNhdGVkQWRkcmVzcyhzZWxsZXIpXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVUkoKSB7XHJcbiAgICAgICAgaWYgKG5mdFVyaSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0VVJMID0gbmZ0VXJpLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICBcImlwZnM6Ly9cIixcclxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9pcGZzLmlvL2lwZnMvXCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBjb25zdCB0b2tlblVyaVJlc3BvbnNlID0gYXdhaXQgKGF3YWl0IGZldGNoKHJlcXVlc3RVUkwpKS5qc29uKClcclxuXHJcbiAgICAgICAgICAgIHNldEltYWdlVXJpKHRva2VuVXJpUmVzcG9uc2UuaW1hZ2UpXHJcbiAgICAgICAgICAgIHNldFRva2VuTmFtZSh0b2tlblVyaVJlc3BvbnNlLm5hbWUpXHJcbiAgICAgICAgICAgIHNldFRva2VuRGVzY3JpcHRpb24odG9rZW5VcmlSZXNwb25zZS5kZXNjcmlwdGlvbilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSBcImNvbm5lY3RlZFwiICYmIGNvbnRyYWN0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdXBkYXRlVUkoKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtjb250cmFjdCwgc3RhdHVzLCBuZnRVcmksIHNob3dNb2RhbF0pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FyZENsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dNb2RhbCh0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZnRCb3hDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgeyEoY2hhaW5JZCA9PT0gdW5kZWZpbmVkKSA/IChcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVVyaSB8fCAhaXNOZnRVcmlMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVDYXJkQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmZ0SW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWFSZW5kZXJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVyaX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57dG9rZW5OYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Rva2VuRGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9rZW5JZH0gb2Yge3RydW5jYXRlZEFkZHJlc3MobmZ0QWRkcmVzcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57ZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKHByaWNlKX0gRVRIPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5vd25lZCBieSB7Zm9ybWF0dGVkU2VsbGVyQWRkcmVzc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgQ29ubmVjdCBZb3VyIFdhbGxldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29ubmVjdFdhbGxldCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtzaG93TW9kYWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmZ0TW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TkZUTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc093bmVkQnlVc2VyPXtpc093bmVkQnlVc2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuSWQ9e3Rva2VuSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmZ0QWRkcmVzcz17bmZ0QWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGlkZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTWVkaWFSZW5kZXJlciIsIldlYjNCdXR0b24iLCJ1c2VBZGRyZXNzIiwidXNlQ29udHJhY3QiLCJ1c2VDb250cmFjdFJlYWQiLCJ1c2VDaGFpbklkIiwidXNlQ29ubmVjdGlvblN0YXR1cyIsIkNvbm5lY3RXYWxsZXQiLCJzdHlsZXMiLCJldGhlcnMiLCJORlRNb2RhbCIsIk5GVEJveCIsInNlbGxlciIsIm5mdEFkZHJlc3MiLCJ0b2tlbklkIiwicHJpY2UiLCJzdGF0dXMiLCJyYXdBZGRyZXNzIiwiYWRkcmVzcyIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiY2hhaW5JZCIsImltYWdlVXJpIiwic2V0SW1hZ2VVcmkiLCJ0b2tlbk5hbWUiLCJzZXRUb2tlbk5hbWUiLCJ0b2tlbkRlc2NyaXB0aW9uIiwic2V0VG9rZW5EZXNjcmlwdGlvbiIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImhpZGVNb2RhbCIsImNvbnRyYWN0IiwiZGF0YSIsIm5mdFVyaSIsImlzTG9hZGluZyIsImlzTmZ0VXJpTG9hZGluZyIsImVycm9yIiwidHJ1bmNhdGVkQWRkcmVzcyIsInNsaWNlIiwiaXNPd25lZEJ5VXNlciIsImZvcm1hdHRlZFNlbGxlckFkZHJlc3MiLCJ1cGRhdGVVSSIsInJlcXVlc3RVUkwiLCJyZXBsYWNlIiwidG9rZW5VcmlSZXNwb25zZSIsImZldGNoIiwianNvbiIsImltYWdlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaGFuZGxlQ2FyZENsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwibmZ0Qm94Q29udGFpbmVyIiwib25DbGljayIsIm5mdEltYWdlIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJoMiIsInAiLCJoMyIsInV0aWxzIiwiZm9ybWF0RXRoZXIiLCJuZnRNb2RhbCIsIm9uQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NFTBox.js\n"));

/***/ })

});