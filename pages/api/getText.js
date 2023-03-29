import prismadb from '../../lib/prismadb';


export default async function handler(req, res) {
    if(req.method != "GET"){
        res.status(405).end()
    }
    
    const latestText = await prismadb.text.findFirst({
        orderBy: {
            createdAt: "desc"
        }
    })
    if(latestText){
        res.status(200).json({ text: latestText.text })
    }
    else{
        res.status(418).end()
    }

    
  }
  