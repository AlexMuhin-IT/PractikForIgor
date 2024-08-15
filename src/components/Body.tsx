import React from 'react';
import {NewComponint} from "./NewComponint";

type BoduPropsType = {
    title: string
}

export const Body = (props: BoduPropsType) => {

    const students = [
        {id: 1, name: 'James', age: 11},
        {id: 2, name: 'Jame', age: 12},
        {id: 3, name: 'Jam', age: 13},
        {id: 4, name: 'Ja', age: 14},
        {id: 5, name: 'J', age: 15},
    ]


    return (
        <div>
            <h1>{props.title}</h1>
            <NewComponint students={students} />
        </div>
    );
};

