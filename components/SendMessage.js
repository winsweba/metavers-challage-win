import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessageRef }) {
    const {user, Moralis } = useMoralis();

    const [ message, setMessage] = useState("");

    const sendMessage = (e) =>{
        e.preventDefault(); 

        if(!message) return;

        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages();

        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get("ethAddress"),
        })
        .then((message) => {
            // Message Saved
        },
        (error) => {
            // Save file 
            // show error 
            console.log(error.message);
        }
        );

        endOfMessageRef.current.scrollIntoView({behavior: "smooth"});
    
        setMessage("");
    }

    return (
        <form className="flex w-11/12 
        fixed bottom-8 
        bg-black opacity-80 px-4 py-4 
        max-w-xl shadow-xl rounded-full
        border-4 border-blue-500">
            <input className=" flex-grow
            outline-none bg-transparent text-white 
            placeholder-gray-500 pr-5" type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder={`Enter a Message ${user.getUsername()}`} />
            <button type="submit" onClick={sendMessage} className="font-bold text-pink-500">Send</button>
        </form>
    )
}

export default SendMessage
