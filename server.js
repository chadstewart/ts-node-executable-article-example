"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
//Initialize Request Data Type
exports.app.use(express_1.default.json({ limit: "10mb" }));
exports.app.get("/", (req, res) => res.send("Hello World!!"));
const port = 3000;
exports.app.listen(port, () => {
    console.log(`Server is live on ${port}`);
});
