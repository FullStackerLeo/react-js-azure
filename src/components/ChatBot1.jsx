import {useState, useEffect} from 'react';

import '@/assets/css/chatbot1.css';
import lens from "@/assets/img/lens.png";
import loadingGif from "@/assets/img/loading.gif";

function ChatBot() {
    const [prompt, updatePrompt] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [answer, setAnswer]   = useState(undefined);

    useEffect(()=>{
        if (prompt != null && prompt.trim()===''){
            setAnswer(undefined);
        }
    }, [prompt]);

    const sendPrompt = async (event) => {
        if (event.key !== 'Enter'){return;}
        
        try{
            setLoading(true);

            const requestOptions={
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({prompt}),
            };

            const res = await fetch('http://localhost:3001/ask', requestOptions)

            if (!res.ok){                throw new Error("wrongg")            }

            console.log("Setting answer t1o:", res);

            const { message } = await res.json();
            console.log("Setting answer to:", message);
            setAnswer(message);
        }catch(err){
            console.error(err,'err')
        }finally{
            setLoading(false)
        }
    };


    return (
        <div className='app'>
            <div className='app-container'>
                <div className='spotlight__wraper'>
                    <input className='spotlight__input'
                        type='text'
                        placeholder='input somehting'
                        disabled={loading}
                        style={{backgroundImage: loading ? `url($loadingGif})` : `url($lens})`,}} 

                        onChange  = {(e) => updatePrompt(e.target.value)}
                        onKeyDown = {(e)=>sendPrompt(e)}            />

                <div className="spotlight__answer">
                    {answer && <p>{answer}</p>}
                </div>
                </div>
            </div>
        </div>
    )
}

export default ChatBot;
