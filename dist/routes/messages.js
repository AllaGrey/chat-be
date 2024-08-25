"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const messageRouter = (0, express_1.Router)();
messageRouter.post('/', controllers_1.createMessageCtrl);
exports.default = messageRouter;
