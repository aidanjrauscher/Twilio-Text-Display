import prismadb from '../../lib/prismadb';


export default async function handler(req, res) {
    try{
        if(req.method != "GET"){
            res.status(405).end()
        }
        
        const latestText = await prismadb.text.findFirst({
            orderBy: {
                createdAt: "desc"
            }
        })
        if(latestText){
            res.status(200).json({ text: latestText.text, senderNumber: latestText.senderNumber })
        }
        else{
            res.status(418).end()
        }
    } catch(error){
        res.status(400).end()
    }
    
  }
  