"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const services_1 = require("./services");
const { PORT, MONGODB_URI } = process.env;
const dbConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!MONGODB_URI)
        return console.log('Failed connection: MONGODB_URI is absent');
    mongoose_1.default
        .connect(MONGODB_URI, {})
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => {
        console.log('MongoDB connection error:', error);
        process.exit(1);
    });
});
const startServer = () => {
    const server = app_1.default.listen(PORT || 3001, () => {
        console.log(`Server is running on port ${PORT}`);
    });
    (0, services_1.setupAbly)(server);
};
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield dbConnection();
    startServer();
}))();
