import { Router } from "express"; 
import { helloworld } from "./controllers/hello-word-comtroller.js"
const rouer = Router();
Router.get("/", helloworld)
export { Router}
