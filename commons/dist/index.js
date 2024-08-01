"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogUpdate = exports.blogCreate = exports.signinValidation = exports.signupValidation = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupValidation = zod_1.default.object({
    email: zod_1.default.string(),
    name: zod_1.default.string(),
    password: zod_1.default.string().min(6)
});
exports.signinValidation = zod_1.default.object({
    email: zod_1.default.string(),
    password: zod_1.default.string().min(6)
});
exports.blogCreate = zod_1.default.object({
    title: zod_1.default.string().min(1),
    content: zod_1.default.string().min(10)
});
exports.blogUpdate = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    id: zod_1.default.string()
});
