import { useMoralis } from "react-moralis";
import TimeAgo from "timeago-react";
import Avatar from "./Avatar";
import Spin  from 'react-reveal/Spin';

function Message({message}) {
    const {user} = useMoralis()

    const isUserMessage = message.get('ethAddress') == user.get('ethAddress')
    return (
        <div
        className={`flex items-end space-x-2 relative ${isUserMessage && "justify-end"}`}>
            <dive className={`relative h-8 w-8 ${isUserMessage && 
            "order-last ml-2"}`}>

                <Avatar username={message.get("username")}/>
            </dive>

            <Spin >
            <div className={`flex space-x4 rounded-lg p-2 ${isUserMessage
            ? "rounded-br-none bg-pink-300 "
        : "rounded-bl-none bg-blue-400" }`}>
            <p>{message.get("message")}</p>
            </div>
            </Spin>
            

            <TimeAgo className={`text-[10px] italic text-gray-400 ${isUserMessage && "order-first pr-1"}`} datetime={message.createdAt}/>

            {/* Time */}
            <p className={`${isUserMessage
            ? "text-pink-300 "
        : " text-blue-400" }`}>{message.get('username')}</p>
        </div>
    )
}

export default Message
