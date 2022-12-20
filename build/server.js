"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_json_1 = __importDefault(require("./routes/modules/db.json"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/portfolio', (req, res) => {
    res.status(200).send(db_json_1.default);
});
const PORT = 3000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
