import { Router } from "express"; 
import { helloworld, player } from "./controllers/hello-world-controller.js"

const router = Router();
router.get("/jugadores", helloworld)
router.post("/jugador", player)
router.delete("/jugadores", deleteplayer)


export { router}
