import { useState, useEffect } from "react";
import { Send } from "./assets/icons/icons";
import axios from 'axios';
import BubbleMessage from "./components/BubbleMessaje";
import { message } from "./interfaces";

const App: React.FC = () => {

  const [text, setText]= useState<string[]>([]);
  const [target, setTarget]= useState<string>("");

  const newText= async () => {
    if (target.trim() != ""){
      const message={ sender: 'oscar', content: target }
      try{
        await axios.post('http://localhost:3000/messages', message);
        setTarget("");
        fetchData();
      } catch (err){
        console.error("Error al enviar el mensaje: ", err)
      }
    }
  }

  const fetchData = async () =>{
    try{
      const response= await axios.get<message[]>('http://localhost:3000/messages');
      setText(
        response.data.map((item) => item.content)
      )
    } catch (err){
      console.error('Error al obtener los mensajes: ', err);
    }
  };

  useEffect(() =>{
    fetchData();
  }, []);

  const changeEvent= (event: React.ChangeEvent<HTMLInputElement>) =>{
    setTarget(event.target.value);
  }

  return (
    <>
    <div className="w-[100%] h-[100%] flex items-center justify-center">
      <div className="w-[80%] h-[90%] border rounded-[10px] flex flex-col items-center">

        {/* burbujas de texto */}
        <div className="w-[100%] flex-grow overflow-auto scroll-hidden flex flex-col-reverse">
          {text.map((texto, index) => (
            <BubbleMessage key={index} message={texto}/>
          ))}
        </div>

        {/* Componente de barra de texto */}
        <div className=" w-[99%] h-[40px] border rounded-[5px] mb-[5px] mt-[5px] flex">
          <input className="w-[96%] h-[100%] no-border pl-[5px]"
          placeholder="Ingresa un mensaje"
          type="text" 
          onChange={changeEvent}
          value={target}/>

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