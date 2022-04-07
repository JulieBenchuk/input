import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addInput: (input: string) => void
}

export const FullInput = (props: FullInputPropsType) => {
    let [input, setInput] = useState("")
    console.log(input)

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        props.addInput(input)
        setInput("")
    }

    return (
        <div>
            <input value={input} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}> + </button>
        </div>
    );
};



