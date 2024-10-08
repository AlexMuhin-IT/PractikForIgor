import React from 'react';
import {NewComponint} from "./NewComponint";
import {NewLesson} from "./NewLesson";
import {NewLesson2} from "./NewLesson2";
import {NewLesson3} from "./NewLesson3";
import {NewLesson1} from "./NewLesson1";

type BodyPropsType = {
    title: string
}

export const Body = (props: BodyPropsType) => {

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
            <NewComponint students={students}/>
            <NewLesson/>
            <NewLesson1/>
            <NewLesson2/>
            <NewLesson3/>
        </div>
    );
};

