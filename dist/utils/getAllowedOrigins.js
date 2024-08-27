"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllowedOrigins = void 0;
const getAllowedOrigins = () => {
    const FRONT_DEV = process.env.FRONT_DEV || '';
    const FRONT_PROD = process.env.FRONT_PROD || '';
    return [FRONT_DEV, FRONT_PROD].filter(origin => origin !== '');
};
exports.getAllowedOrigins = getAllowedOrigins;
