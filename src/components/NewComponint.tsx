import React from 'react';
import {Cars} from "./Cars";


type NewComponentType = {
    // students: Array<StudentType>
    students: StudentType[]
}
type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponint = (props: NewComponentType) => {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'f67ad'},
        {manufacturer: 'Audi', model: 'rs6'},
        {manufacturer: 'Nissan', model: 'mk4v6'},
    ]

    return (
        <>
            <Cars cars={topCars}/>
            <div>
                <h2>Hello</h2>
            </div>
            <div>
                <ul>
                    {props.students.map((s, key) => {
                        return (
                            <li key={s.id}>
                                <span>Name: {s.name}----</span>
                                <span>Age: {s.age}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </>
    )
}

// Вопрос: почему в Body можно вставить одинаковое значение students= students а тут нет