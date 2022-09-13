import axios from "axios";
import express from "express";
import { Client, Intents,}  from "discord.js";
const client = new Client({
    intents: [Intents.FLAGS.GUILDS,
       Intents.FLAGS.GUILD_MESSAGES,
       "GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES",
    ],
  });
const app = express()
app.use(cors())

//discord bot status
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

app.post('/secret', async (req,res) => {

    // geting all data from req 
    try{
    const headers = {'Content-Type': 'application/json'}
    const apikey = 'kj2CTXBP8rAdPr1VZAxtbY4VALofbUVb';
    const contract = "0XXXXXXXXX";
    const nftid = "chain id";
    const nftData = "data about data";
    const OwenrAddress = "0xxxxxxxxx";
    const Discord_userId = "00000000"

    const data = {'key': `${apikey}`,
        'chain_id': '97',
        "contract": `${contract}`,
        'nft_id':`${nftid}`, 
        'nft_data':`${nftData}`,
        "to":`${OwenrAddress}`,
        }
    const url =  `https://thentic.tech/api/nfts/mint`
    const response = await axios.get(url,headers,data)
    let status = null
    if(response.status === 200){
        status = "successful"
    }else{
        status = "unsuccessful"
    }
    //send the user about the status of the minted ntf through discord bot 
    client.users.fetch(Discord_userId, true).then((user) => {
        user.send(`your NFT minting having nft_id- ${nftid} was ${status}` )
       
        
}); 

  }catch (e) {
    console.log(e)
  }
  })
  const port = 3030
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })