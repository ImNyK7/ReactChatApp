import { useEffect, useState, useRef } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"

const Chat = () => {
const [open,setOpen] = useState(false)
const [text,setText] = useState("")

const endRef = useRef(null)

useEffect(()=>{
    endRef.current?.scrollIntoView({behavior:"smooth"})
},[])

const handleEmoji = e =>{
    setText((prev)=> prev + e.emoji);
    setOpen(false)
};
    return (
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="text">
                        <span>Jane Doe</span>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center">
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore suscipit omnis incidunt autem ut a quo facilis cum cupiditate obcaecati nam placeat reiciendis, nostrum praesentium ratione ipsa asperiores animi tempore?</p>
                        <span>2 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore suscipit omnis incidunt autem ut a quo facilis cum cupiditate obcaecati nam placeat reiciendis, nostrum praesentium ratione ipsa asperiores animi tempore?</p>
                        <span>2 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                    <img src="https://panels-cdn.imgix.net/content/a~hytha_7a08fefe/121~Bolluck~s~Wilshire~4k.jpg?expires=1728508444399&fm=jpg&s=a33c1b9a5c14fb7adfe8a699d4555390" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore suscipit omnis incidunt autem ut a quo facilis cum cupiditate obcaecati nam placeat reiciendis, nostrum praesentium ratione ipsa asperiores animi tempore?</p>
                        <span>2 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore suscipit omnis incidunt autem ut a quo facilis cum cupiditate obcaecati nam placeat reiciendis, nostrum praesentium ratione ipsa asperiores animi tempore?</p>
                        <span>2 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" placeholder="Type a message..." value={text} onChange={e=>setText(e.target.value)}/>
                <div className="emoji">
                    <img src="./emoji.png" alt="" onClick={()=>setOpen((prev)=>!prev)}/>
                    <div className="picker">
                    <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}

export default Chat