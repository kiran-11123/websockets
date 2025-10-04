import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8081});

//event handler
wss.on('connection' , function(socket){

    console.log("user connected")

    setInterval(()=>{

        socket.send("The Current price of solona is" + Math.random());        
    },500)


    socket.on("message" , (e)=>{
         console.log(e.toString());
    })

       
})