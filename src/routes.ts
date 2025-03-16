import { Router } from 'express';
import SecretSurpriseService from './Services/secretSurpriseService';
import WeddingService from './Services/WeddingService';

const router = Router();

const secretSurpriseService = new SecretSurpriseService();
const weddingService = new WeddingService();

router.get("/", (req, res) => {res.send("Estou on!")});
router.post("/secretSurprise/mfa", secretSurpriseService.sendMFA);

router.post("/wedding/notConfirmed", weddingService.sendNotConfirmed);

export {router};