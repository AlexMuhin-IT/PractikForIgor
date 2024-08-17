import React, {MouseEvent, useState} from 'react';


export const NewLesson2 = () => {

    let [a, setA] = useState(1);

    const onClickHandler = () => {
        setA(++a);
        console.log(a)
    };
    let b=1;
    const onClickHandlerClear = () => {
        setA(b);
    };

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>{a}</button>
            <button onClick={onClickHandlerClear}>X</button>
        </div>
    );
};

