import React, {useState} from 'react';
import {InputAndButton} from "./components/InputAndButton";



function App() {
    let [message, setMessage] = useState([
        {message: "Hello!"},
        {message: "This is my first message!"},
        {message: "How are you?"},
        {message: "What's new?)"}
    ])

    const addMessage = (text: string) => {
        let newMessage = {message: text};
        setMessage([newMessage,...message])
    }
    return (
        <div className={"App"}>
        <div>
            <InputAndButton
                addMessage = {addMessage}
            />
        </div>
    {message.map((el, index) => {
        return (
            <div key={index}>{el.message}</div>
        )
    })}
        </div>
    )
}
export default App