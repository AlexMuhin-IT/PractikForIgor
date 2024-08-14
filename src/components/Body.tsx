import React from 'react';

type BoduPropsType = {
    title: string
}

export const Body = (props: BoduPropsType) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
};

