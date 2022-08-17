import app, { use } from "./src/app";
import { createServer } from "http";
const server = createServer(app);
import cors from "cors";

use(cors());

server.listen(4000, () => {
    console.log("SERVER RUNNING AT 4000 PORT");
});
