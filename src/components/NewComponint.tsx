import React from 'react';

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
    return (
        <>
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
