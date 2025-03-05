const Message= require('../models/Message');

const getMessages = async (req, res) =>{
    try{
        const messages = await Message.find().sort({ timestamp: -1});
        res.json(messages);
    } catch (err){
        res.status(500).json({message: err})
    }
}

/* crear un nuevo mensaje */
const createMessage= async (req, res) => {
    const {sender, content}= req.body;
    try{
        const newMessage= new Message({ sender, content });
        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (err){
        res.status(400).json({message: err});
    }
};

module.exports= {
    getMessages,
    createMessage
};