"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var secretSurpriseService_1 = __importDefault(require("./Services/secretSurpriseService"));
var router = (0, express_1.Router)();
exports.router = router;
var secretSurpriseService = new secretSurpriseService_1.default();
router.get("/", function (req, res) { res.send("Estou on!"); });
router.post("/secretSurprise/mfa", secretSurpriseService.sendMFA);
