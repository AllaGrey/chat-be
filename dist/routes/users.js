"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const usersRouter = (0, express_1.Router)();
usersRouter.get('/current', middlewares_1.authValidation, controllers_1.getCurrentUserCtrl);
usersRouter.put('/', (req, res) => { });
exports.default = usersRouter;
