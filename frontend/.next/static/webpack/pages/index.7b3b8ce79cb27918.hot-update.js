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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NFTBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @thirdweb-dev/react */ \"./node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.browser.esm.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _NFTModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NFTModal */ \"./components/NFTModal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction NFTBox(param) {\n    let { seller, nftAddress, tokenId, price } = param;\n    _s();\n    const status = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useConnectionStatus)();\n    const rawAddress = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useAddress)();\n    const address = rawAddress !== undefined ? rawAddress.toLowerCase() : rawAddress;\n    const chainId = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useChainId)();\n    const [imageUri, setImageUri] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tokenName, setTokenName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tokenDescription, setTokenDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const hideModal = ()=>setShowModal(false);\n    const { contract } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useContract)(nftAddress);\n    const { data: nftUri, isLoading: isNftUriLoading, error } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useContractRead)(contract, \"tokenURI\", tokenId);\n    const truncatedAddress = (address)=>\"\".concat(address.slice(0, 6), \"...\").concat(address.slice(-4));\n    const isOwnedByUser = seller === address;\n    const formattedSellerAddress = isOwnedByUser ? \"you\" : truncatedAddress(seller);\n    async function updateUI() {\n        if (nftUri) {\n            const requestURL = nftUri.replace(\"ipfs://\", \"https://ipfs.io/ipfs/\");\n            const tokenUriResponse = await (await fetch(requestURL)).json();\n            setImageUri(tokenUriResponse.image);\n            setTokenName(tokenUriResponse.name);\n            setTokenDescription(tokenUriResponse.description);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (status === \"connected\" && contract !== undefined) {\n            updateUI();\n        }\n    }, [\n        contract,\n        status,\n        nftUri\n    ]);\n    const handleCardClick = ()=>{\n        setShowModal(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NFTModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    isOwnedByUser: isOwnedByUser,\n                    tokenId: tokenId,\n                    nftAddress: nftAddress,\n                    price: price,\n                    onClose: hideModal\n                }, void 0, false, {\n                    fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                    lineNumber: 72,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().nftBoxContainer),\n                onClick: handleCardClick,\n                children: !(chainId === undefined) ? imageUri || !isNftUriLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().nftImage),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.MediaRenderer, {\n                                src: imageUri,\n                                width: \"200px\",\n                                height: \"200px\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                                lineNumber: 86,\n                                columnNumber: 33\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                            lineNumber: 85,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: tokenName\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                            lineNumber: 92,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: tokenDescription\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                            lineNumber: 93,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                tokenId,\n                                \" of \",\n                                truncatedAddress(nftAddress)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                            lineNumber: 94,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: [\n                                ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.formatEther(price),\n                                \" ETH\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                            lineNumber: 97,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"owned by \",\n                                formattedSellerAddress\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                            lineNumber: 98,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                    lineNumber: 84,\n                    columnNumber: 25\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                    lineNumber: 101,\n                    columnNumber: 25\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"Please Connect Your Wallet\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.ConnectWallet, {}, void 0, false, {\n                            fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                            lineNumber: 106,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                    lineNumber: 104,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Disk\\\\Programlama\\\\SOLIDITY\\\\hardhat\\\\hardhat-nft-marketplace\\\\frontend\\\\components\\\\NFTBox.js\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, this);\n}\n_s(NFTBox, \"nDWKqtZU6MjZQrL8WSw/S6KiDRw=\", false, function() {\n    return [\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useConnectionStatus,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useAddress,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useChainId,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useContract,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_2__.useContractRead\n    ];\n});\n_c = NFTBox;\nvar _c;\n$RefreshReg$(_c, \"NFTBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akIsOERBQUNXOzhCQUFJOzs7Ozt5Q0FHVCw4REFBQ0E7O3dCQUFJO3NDQUVELDhEQUFDNUMsOERBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRDO0dBL0Z3Qkk7O1FBQ0xMLG9FQUFtQkE7UUFDZkosMkRBQVVBO1FBR2JHLDJEQUFVQTtRQVFQRiw0REFBV0E7UUFNMUJDLGdFQUFlQTs7O0tBbkJDTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05GVEJveC5qcz8zYzZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHtcclxuICAgIE1lZGlhUmVuZGVyZXIsXHJcbiAgICBXZWIzQnV0dG9uLFxyXG4gICAgdXNlQWRkcmVzcyxcclxuICAgIHVzZUNvbnRyYWN0LFxyXG4gICAgdXNlQ29udHJhY3RSZWFkLFxyXG4gICAgdXNlQ2hhaW5JZCxcclxuICAgIHVzZUNvbm5lY3Rpb25TdGF0dXMsXHJcbiAgICBDb25uZWN0V2FsbGV0LFxyXG59IGZyb20gXCJAdGhpcmR3ZWItZGV2L3JlYWN0XCJcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQge2V0aGVyc30gZnJvbSBcImV0aGVyc1wiXHJcbmltcG9ydCBORlRNb2RhbCBmcm9tIFwiLi9ORlRNb2RhbFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBORlRCb3goe3NlbGxlciwgbmZ0QWRkcmVzcywgdG9rZW5JZCwgcHJpY2V9KSB7XHJcbiAgICBjb25zdCBzdGF0dXMgPSB1c2VDb25uZWN0aW9uU3RhdHVzKClcclxuICAgIGNvbnN0IHJhd0FkZHJlc3MgPSB1c2VBZGRyZXNzKClcclxuICAgIGNvbnN0IGFkZHJlc3MgPVxyXG4gICAgICAgIHJhd0FkZHJlc3MgIT09IHVuZGVmaW5lZCA/IHJhd0FkZHJlc3MudG9Mb3dlckNhc2UoKSA6IHJhd0FkZHJlc3NcclxuICAgIGNvbnN0IGNoYWluSWQgPSB1c2VDaGFpbklkKClcclxuXHJcbiAgICBjb25zdCBbaW1hZ2VVcmksIHNldEltYWdlVXJpXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbdG9rZW5OYW1lLCBzZXRUb2tlbk5hbWVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt0b2tlbkRlc2NyaXB0aW9uLCBzZXRUb2tlbkRlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBoaWRlTW9kYWwgPSAoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpXHJcblxyXG4gICAgY29uc3Qge2NvbnRyYWN0fSA9IHVzZUNvbnRyYWN0KG5mdEFkZHJlc3MpXHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGE6IG5mdFVyaSxcclxuICAgICAgICBpc0xvYWRpbmc6IGlzTmZ0VXJpTG9hZGluZyxcclxuICAgICAgICBlcnJvcixcclxuICAgIH0gPSB1c2VDb250cmFjdFJlYWQoY29udHJhY3QsIFwidG9rZW5VUklcIiwgdG9rZW5JZClcclxuXHJcbiAgICBjb25zdCB0cnVuY2F0ZWRBZGRyZXNzID0gKGFkZHJlc3MpID0+XHJcbiAgICAgICAgYCR7YWRkcmVzcy5zbGljZSgwLCA2KX0uLi4ke2FkZHJlc3Muc2xpY2UoLTQpfWBcclxuICAgIGNvbnN0IGlzT3duZWRCeVVzZXIgPSBzZWxsZXIgPT09IGFkZHJlc3NcclxuICAgIGNvbnN0IGZvcm1hdHRlZFNlbGxlckFkZHJlc3MgPSBpc093bmVkQnlVc2VyXHJcbiAgICAgICAgPyBcInlvdVwiXHJcbiAgICAgICAgOiB0cnVuY2F0ZWRBZGRyZXNzKHNlbGxlcilcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiB1cGRhdGVVSSgpIHtcclxuICAgICAgICBpZiAobmZ0VXJpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RVUkwgPSBuZnRVcmkucmVwbGFjZShcclxuICAgICAgICAgICAgICAgIFwiaXBmczovL1wiLFxyXG4gICAgICAgICAgICAgICAgXCJodHRwczovL2lwZnMuaW8vaXBmcy9cIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuVXJpUmVzcG9uc2UgPSBhd2FpdCAoYXdhaXQgZmV0Y2gocmVxdWVzdFVSTCkpLmpzb24oKVxyXG4gICAgICAgICAgICBzZXRJbWFnZVVyaSh0b2tlblVyaVJlc3BvbnNlLmltYWdlKVxyXG4gICAgICAgICAgICBzZXRUb2tlbk5hbWUodG9rZW5VcmlSZXNwb25zZS5uYW1lKVxyXG4gICAgICAgICAgICBzZXRUb2tlbkRlc2NyaXB0aW9uKHRva2VuVXJpUmVzcG9uc2UuZGVzY3JpcHRpb24pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCJjb25uZWN0ZWRcIiAmJiBjb250cmFjdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVVJKClcclxuICAgICAgICB9XHJcbiAgICB9LCBbY29udHJhY3QsIHN0YXR1cywgbmZ0VXJpXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDYXJkQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd01vZGFsKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3Nob3dNb2RhbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE5GVE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzT3duZWRCeVVzZXI9e2lzT3duZWRCeVVzZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuSWQ9e3Rva2VuSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5mdEFkZHJlc3M9e25mdEFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGlkZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZnRCb3hDb250YWluZXJ9IG9uQ2xpY2s9e2hhbmRsZUNhcmRDbGlja30+XHJcbiAgICAgICAgICAgICAgICB7IShjaGFpbklkID09PSB1bmRlZmluZWQpID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVXJpIHx8ICFpc05mdFVyaUxvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5mdEltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWFSZW5kZXJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlVXJpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57dG9rZW5OYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dG9rZW5EZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9rZW5JZH0gb2Yge3RydW5jYXRlZEFkZHJlc3MobmZ0QWRkcmVzcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2V0aGVycy51dGlscy5mb3JtYXRFdGhlcihwcmljZSl9IEVUSDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5vd25lZCBieSB7Zm9ybWF0dGVkU2VsbGVyQWRkcmVzc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIENvbm5lY3QgWW91ciBXYWxsZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbm5lY3RXYWxsZXQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1lZGlhUmVuZGVyZXIiLCJXZWIzQnV0dG9uIiwidXNlQWRkcmVzcyIsInVzZUNvbnRyYWN0IiwidXNlQ29udHJhY3RSZWFkIiwidXNlQ2hhaW5JZCIsInVzZUNvbm5lY3Rpb25TdGF0dXMiLCJDb25uZWN0V2FsbGV0Iiwic3R5bGVzIiwiZXRoZXJzIiwiTkZUTW9kYWwiLCJORlRCb3giLCJzZWxsZXIiLCJuZnRBZGRyZXNzIiwidG9rZW5JZCIsInByaWNlIiwic3RhdHVzIiwicmF3QWRkcmVzcyIsImFkZHJlc3MiLCJ1bmRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImNoYWluSWQiLCJpbWFnZVVyaSIsInNldEltYWdlVXJpIiwidG9rZW5OYW1lIiwic2V0VG9rZW5OYW1lIiwidG9rZW5EZXNjcmlwdGlvbiIsInNldFRva2VuRGVzY3JpcHRpb24iLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJoaWRlTW9kYWwiLCJjb250cmFjdCIsImRhdGEiLCJuZnRVcmkiLCJpc0xvYWRpbmciLCJpc05mdFVyaUxvYWRpbmciLCJlcnJvciIsInRydW5jYXRlZEFkZHJlc3MiLCJzbGljZSIsImlzT3duZWRCeVVzZXIiLCJmb3JtYXR0ZWRTZWxsZXJBZGRyZXNzIiwidXBkYXRlVUkiLCJyZXF1ZXN0VVJMIiwicmVwbGFjZSIsInRva2VuVXJpUmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJpbWFnZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImhhbmRsZUNhcmRDbGljayIsImRpdiIsIm9uQ2xvc2UiLCJjbGFzc05hbWUiLCJuZnRCb3hDb250YWluZXIiLCJvbkNsaWNrIiwibmZ0SW1hZ2UiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImgyIiwicCIsImgzIiwidXRpbHMiLCJmb3JtYXRFdGhlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NFTBox.js\n"));

/***/ })

});