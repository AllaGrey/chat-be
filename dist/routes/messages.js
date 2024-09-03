"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const messageRouter = (0, express_1.Router)();
messageRouter.post('/', middlewares_1.authValidation, controllers_1.createMessageCtrl);
exports.default = messageRouter;
