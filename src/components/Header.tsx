import React from 'react';

type HeaderPropsType = {
    title: string
}

export const Header = (props: HeaderPropsType ) => {
    return (
        <div>
            <h2>{props.title}</h2>
        </div>
    );
};

