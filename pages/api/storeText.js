import prismadb from '../../lib/prismadb';


export default async function handler(req, res) {
    try{
        if(req.method != "POST"){
            res.status(405).end()
        }
        const {From, Body} = req.body
        if(!Body || !From){
            res.status(400).json({error: "Unable to retrieve text and sender number from webhook."})
        }
        const sender = From.length==7 ? From : From.substring(2)

        const receivedText = await prismadb.text.create({
            data:{
                text: Body,
                senderNumber: sender
            }
        })
        res.status(200).json({msg: "Text receieved."})
    }catch(error){
        console.log(error)
        return res.status(400).json(error)
    }
}
  