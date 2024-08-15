import React from 'react';


type ButtonProps = {
    name: string;
    callBack: () => void;
}

export const Button = (props: ButtonProps) => {
    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.callBack();
    }

    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

