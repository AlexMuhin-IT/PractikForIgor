import React, {MouseEvent} from 'react';


export const NewLesson = () => {
//
//     const message = () =>{
//         console.log("Vasya is click button")
//     }
// const message2 = () => {
//         console.log("Ivan is click button")
// }
    const onClickHandler = (name: string) => {
        console.log(name);
    }

    return (
        <div>
            <button onClick={() => onClickHandler('Vasya')}>MyYouTubeChanel-1</button>
            <button onClick={() => onClickHandler("Ivan")}>MyYouTubeChanel-2</button>

        </div>
    );
};
