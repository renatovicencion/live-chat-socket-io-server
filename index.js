const app = require("./src/app");
const http = require("http");
const server = http.createServer(app);
const cors = require("cors");

app.use(cors());

server.listen(4000, () => {
    console.log("SERVER RUNNING AT 4000 PORT");
});
