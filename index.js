import espress from 'express';
import {router}   from "./scr/routers.js";

const app = express();
app.use("/", Roter)


app.listen(3000, () => (console.log('Server running on port 3000')));