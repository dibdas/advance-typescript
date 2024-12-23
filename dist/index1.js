"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = __importDefault(require("zod"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const userprofile = zod_1.default.object({
    name: zod_1.default.string().min(1, { message: "name cant be empty" }),
    email: zod_1.default.string().email({ message: "email invalid" }),
    age: zod_1.default.number().min(18, { message: "you must be at least 18" }).optional()
});
app.put("/user", (req, res) => {
    const { success } = userprofile.safeParse(req.body);
    // how to assign  a type to update body 
    const updateBody = req.body;
    if (!success) {
        res.status(411).json({});
        return;
    }
    res.json({
        message: "user updated", updateBody
    });
});
app.listen(3000, () => {
    "listening to port 3000";
});
