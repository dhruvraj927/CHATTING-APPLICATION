import {useEffect , useState} from "react";
import {io} from "socket.io-client";
import './chatpage.css'
    
    
    
const socket = io("http://localhost:5000");


export function Chatpage() {
    
    

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {


        socket.on("connect", () => {
            console.log("connected to server");
        });

       
        socket.on("receive_message", (message) => {

            setMessages((prev) => [
                ...prev,
                message
            ]);

});

       
        return () => {
            socket.disconnect();
        };

    }, []);

    const messagesend = () => {

        if (message.trim() === "") return;

       
        console.log("Sending:", message);

        socket.emit("send_message",message)

        // setMessages((prev) => [...prev, message]);

        setMessage("");


    };
    return(
    <>
        <title>CHAT PAGE</title>
        <div className="chat_page">

            
            <div className="receiver_information">

                <div className="receiver_image">
                    <img src="/user.png" alt="receiver" />
                </div>

                <div className="receiver_details">
                    <h3>Developer</h3>
                    <p>Online</p>
                </div>

            </div>

            <div className="messages">

                {messages.map((msg, index) => (
                    <div className="message_box" key={index}>
                        {msg}
                    </div>
                ))}

            </div>

               <div className="message_write">

                <input
                    type="text"
                    placeholder="Write a message..."
                    className="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            messagesend();
                        }
                    }}
                />

                <button
                    className="send"
                    onClick={messagesend}
                >
                    SEND
                </button>

            </div>

        </div>

    </>
    
)
}