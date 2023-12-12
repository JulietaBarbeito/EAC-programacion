import { Router } from "express"; 
import { helloworld } from "./controllers/hello-world-controller.js"

const router = Router();
router.get("/jugadores", helloworld)


export { router}
