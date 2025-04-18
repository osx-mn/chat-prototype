interface BubbleMessage{
    message: string
}

const BubbleMessage: React.FC<BubbleMessage>= ({message}) =>{
    return(
        <div className="w-[100%] h-[40px] flex items-center">
            <p className="ml-[10px] pl-[10px] pr-[10px] h-[80%] rounded-[5px] bg-[#9c95ff] text-black flex justify-center items-center">
                {message}
            </p>
        </div>
    )
}

export default BubbleMessage;