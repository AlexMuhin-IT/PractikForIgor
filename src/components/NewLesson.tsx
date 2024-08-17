import React, {MouseEvent, useState} from 'react';
import {Button} from "./Button";
import {subscribe} from "node:diagnostics_channel";

export const NewLesson = () => {
//для первых двух кнопок
    const message = () => {
        console.log("Alex is click button")
    }
    const onClickHandler = (name: string) => {
        console.log(name);
    }
//для вторых двух кнопок
    const forButton1 = (subsriber: string, age: number, adress: string) => {
        console.log(subsriber, age, adress)
    }
    const forButton2 = (subsriber: string, age: number, adress: string) => {
        console.log(subsriber, age, adress)
    }
    const forButton3 = () => {
        console.log("Я тупая кнопка")
    }

    return (
        <div>
            <button onClick={message}>MyYouTubeChanel-0</button>
            <button onClick={() => onClickHandler('Vasya')}>MyYouTubeChanel-1</button>
            <button onClick={() => onClickHandler("Ivan")}>MyYouTubeChanel-2</button>

            <Button name={'MyYouTubeChanel-1'}
                    callBack={() => forButton1('Alex is click', 37, 'I live in Sevastopol')}/>
            <Button name={'MyYouTubeChanel-2'}
                    callBack={() => forButton2('Limon is click', 36, 'I live in Bahchiparish')}/>
            <Button name={'MyYouTubeChanel-3'} callBack={forButton3}/>

        </div>
    );
};
