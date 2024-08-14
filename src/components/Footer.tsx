import React from 'react';

type FooterPropsType = {
    title: string
}

export const Footer = (props: FooterPropsType) => {
    return (
        <div>
            <h4>{props.title}</h4>
        </div>
    );
};

