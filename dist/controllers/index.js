"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsersCtrl = exports.updateUserCtrl = exports.getCurrentUserCtrl = exports.createMessageCtrl = exports.updateChatCtrl = exports.getAllUserChatsCtrl = exports.getChatByIdCtrl = exports.deleteChatCtrl = exports.createChatCtrl = exports.logoutCtrl = exports.loginCtrl = exports.registerCtrl = void 0;
var auth_1 = require("./auth");
Object.defineProperty(exports, "registerCtrl", { enumerable: true, get: function () { return auth_1.registerCtrl; } });
Object.defineProperty(exports, "loginCtrl", { enumerable: true, get: function () { return auth_1.loginCtrl; } });
Object.defineProperty(exports, "logoutCtrl", { enumerable: true, get: function () { return auth_1.logoutCtrl; } });
var chats_1 = require("./chats");
Object.defineProperty(exports, "createChatCtrl", { enumerable: true, get: function () { return chats_1.createChatCtrl; } });
Object.defineProperty(exports, "deleteChatCtrl", { enumerable: true, get: function () { return chats_1.deleteChatCtrl; } });
Object.defineProperty(exports, "getChatByIdCtrl", { enumerable: true, get: function () { return chats_1.getChatByIdCtrl; } });
Object.defineProperty(exports, "getAllUserChatsCtrl", { enumerable: true, get: function () { return chats_1.getAllUserChatsCtrl; } });
Object.defineProperty(exports, "updateChatCtrl", { enumerable: true, get: function () { return chats_1.updateChatCtrl; } });
var messages_1 = require("./messages");
Object.defineProperty(exports, "createMessageCtrl", { enumerable: true, get: function () { return messages_1.createMessageCtrl; } });
var users_1 = require("./users");
Object.defineProperty(exports, "getCurrentUserCtrl", { enumerable: true, get: function () { return users_1.getCurrentUserCtrl; } });
Object.defineProperty(exports, "updateUserCtrl", { enumerable: true, get: function () { return users_1.updateUserCtrl; } });
Object.defineProperty(exports, "getAllUsersCtrl", { enumerable: true, get: function () { return users_1.getAllUsersCtrl; } });
