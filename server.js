const http = require("http");
 
const mongodb = require("mongodb");


let db;
  const connectionString = "mongodb+srv://Yohan:qn2TyziVBxHNSk6k@cluster0.dogmyac.mongodb.net/Reja?retryWrites=true&w=majority";



mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}, (err, client) => {
    if(err) console.log("ERROR on connection Mongodb");
    else{
        console.log("Mongodb connection succeed");
         module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
        console.log(`The server is successfully running on port:, ${PORT}, http://localhost:${PORT}`
         );
        });
    }
 });

 
 
 

 