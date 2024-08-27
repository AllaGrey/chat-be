"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllowedOrigins = exports.ctrlWrapper = exports.HttpError = void 0;
var httpError_1 = require("./httpError");
Object.defineProperty(exports, "HttpError", { enumerable: true, get: function () { return httpError_1.HttpError; } });
var ctrlWrapper_1 = require("./ctrlWrapper");
Object.defineProperty(exports, "ctrlWrapper", { enumerable: true, get: function () { return ctrlWrapper_1.ctrlWrapper; } });
var getAllowedOrigins_1 = require("./getAllowedOrigins");
Object.defineProperty(exports, "getAllowedOrigins", { enumerable: true, get: function () { return getAllowedOrigins_1.getAllowedOrigins; } });
