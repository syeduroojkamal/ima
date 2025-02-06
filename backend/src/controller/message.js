import Message from "../model/message.js";

export async function send(req, res) {
  try {
    const payload = {
      senderId: req.user._id.toString(),
      receiverId: req.body.receiverId,
      message: req.body.message,
    };
    const newMessage = new Message(payload);
    await newMessage.save();
    // todo: realtime
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function allMessages(req, res) {
  try {
    const myId = req.user._id.toString();
    const { otherId } = req.body;
    // console.log(myId, otherId);
    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: otherId },
        { senderId: otherId, receiverId: myId },
      ],
    });

    res.status(200).json(messages);
  } catch (error) {}
}
