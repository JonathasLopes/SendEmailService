import { Router } from 'express';
import SecretSurpriseService from './Services/secretSurpriseService';

const router = Router();

const secretSurpriseService = new SecretSurpriseService();

router.get("/", (req, res) => {res.send("Estou on!")});
router.post("/secretSurprise/mfa", secretSurpriseService.sendMFA);

export {router};