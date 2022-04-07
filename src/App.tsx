import React, {useState} from 'react';
import {FullInput} from "./components/FullInput";


function App() {
    let [message, setMessage] = useState([
        {message: "Hello!"},
        {message: "This is my first message!"},
        {message: "How are you?"},
        {message: "What's new?)"}
    ])

     const addInputFunction = (input: string) => {
        let newMessage = {message: input}
        setMessage([newMessage, ...message])
     }

    return (
        <div className={"App"}>
            <FullInput addInput={addInputFunction}/>
            {message.map((El, index) => {
                return (
                    <div key={index}> {El.message} </div>
                )
            })}
        </div>
    )
}
export default App