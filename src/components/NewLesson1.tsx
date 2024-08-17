import React from 'react';

export const NewLesson1 = () => {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'f67ad'},
        {manufacturer: 'Audi', model: 'rs6'},
        {manufacturer: 'Nissan', model: 'mk4v6'},
    ]
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Brand</th>
                    <th>Model</th>
                </tr>
                </thead>

                {topCars.map((topCars, index) => { // вопрос: как тут вставить индекс аналог Id
                    return (
                        <tbody key={index}>
                        <tr>
                            <td>{topCars.manufacturer}</td>
                            <td>{topCars.model}</td>
                        </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    );
};
