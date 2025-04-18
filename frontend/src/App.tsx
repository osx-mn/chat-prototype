import { useState } from "react";
import { Send } from "./assets/icons/icons";
import { message } from "./interfaces";
import BubbleMessage from "./components/BubbleMessaje";


const App: React.FC = () => {

  const [messages, setMessages] = useState<message[]>([]);
  const [target, setTarget] = useState<string>("");

  const newText = async () => {
    if (target.trim() !== "") {
      const userMessage: message = { sender: "USER", response: target };

      setMessages([...messages, userMessage]);

      setTarget("");
    }
  }

  const changeEvent= (event: React.ChangeEvent<HTMLInputElement>) =>{
    setTarget(event.target.value);
  }

  return (
    <>
    <div className="w-[100%] h-[100%] flex items-center justify-center">
      <div className="w-[80%] h-[90%] border rounded-[10px] flex flex-col items-center">

        <div className="w-[100%] flex-grow overflow-auto scroll-hidden flex flex-col-reverse">
          {messages.map((msg, index) => (
            <BubbleMessage key={index} message={msg.response}/>
          ))}
        </div>

        <div className=" w-[99%] h-[40px] border rounded-[5px] mb-[5px] mt-[5px] flex">
          <input className="w-[96%] h-[100%] no-border pl-[5px]"
          placeholder="Ingresa un mensaje"
          type="text"
          onChange={changeEvent}
          value={target}
          />

          <button className="flex-grow bg-[#000] flex items-center justify-center"
          onClick={newText}>
            <img src={Send} alt="Send" />
          </button>
        </div>

      </div>
    </div>
    </>
  )
}

export default App;