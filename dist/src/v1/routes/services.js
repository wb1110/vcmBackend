"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.send("Get all services");
});
router.get("/:serviceId", (req, res) => {
    res.send("Get an existing service");
});
router.post("/", (req, res) => {
    res.send("Create a new service");
});
router.patch("/:serviceId", (req, res) => {
    res.send("Update an existing service");
});
router.delete("/:serviceId", (req, res) => {
    res.send("Delete an existing service");
});
exports.default = router;
