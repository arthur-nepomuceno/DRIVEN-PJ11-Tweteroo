import express from "express";
import cors from "cors"

let users = []
let userName;
let userAvatar;
let tweets = [{username: "bobesponja", 	
               avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info", 
               tweet: "eu amo o hub"},
               {username: "eagle1", 	
               avatar: "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000", 
               tweet: "yoyoyoyoyo"}, 
               {username: "eagle2", 	
               avatar: "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000", 
               tweet: "yoyoyoyoyo"}, 
               {username: "eagle3", 	
               avatar: "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000", 
               tweet: "yoyoyoyoyo"}, 
               {username: "eagle4", 	
               avatar: "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000", 
               tweet: "yoyoyoyoyo"}, 
               {username: "eagle5", 	
               avatar: "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000", 
               tweet: "yoyoyoyoyo"}, 
               {username: "eagle6", 	
               avatar: "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000", 
               tweet: "yoyoyoyoyo"}, 
               {username: "eagle7", 	
               avatar: "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000", 
               tweet: "yoyoyoyoyo"}, 
               {username: "eagle8", 	
               avatar: "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000", 
               tweet: "yoyoyoyoyo"}, 
               {username: "eagle9", 	
               avatar: "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000", 
               tweet: "yoyoyoyoyo"}, 
               {username: "eagle10", 	
               avatar: "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000", 
               tweet: "yoyoyoyoyo"}, 
               {username: "eagle11", 	
               avatar: "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000", 
               tweet: "yoyoyoyoyo"}, 
               {username: "eagle12", 	
               avatar: "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000", 
               tweet: "yoyoyoyoyo"}, 
               {username: "eagle13", 	
               avatar: "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000", 
               tweet: "yoyoyoyoyo"}, 
               {username: "eagle14", 	
               avatar: "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000", 
               tweet: "yoyoyoyoyo"}, ]

const app = express()
app.use(cors())
app.use(express.json());

function sendTweets(tweets){
    let lastTweets = []
    for(let i = tweets.length - 1; i >= 0; i--){
        if(lastTweets.length < 10){
            lastTweets.push(tweets[i])
        }
    }
    return lastTweets;
}

app.post("/sign-up", (request, response) => {
    const user = request.body;
    userName = user.username;
    userAvatar = user.avatar
    users.push(user)
    response.send("OK")
})

app.get("/tweets", (request, response) => {
    response.send(sendTweets(tweets));
})

app.post("/tweets", (request, response) => {
    const message = request.body;
    const newTweet = {username: userName, avatar: userAvatar, tweet: message.tweet}
    tweets.push(newTweet)
    response.send("OK")
})

app.listen(5000)