import React from 'react';

type CarsPropsType = {
    cars: Array<CarsType>
}
type CarsType = {
    manufacturer: string
    model: string
}

export const Cars = (props: CarsPropsType) => {
    return (
        <div>
            <table>
                <tr>
                    <th>Brand</th>
                    <th>Model</th>
                </tr>
                {props.cars.map((CarsType) => { // вопрос: как тут вставить индекс аналог Id
                    return (
                        <>
                            <tr>
                                <td>{CarsType.manufacturer}</td>
                                <td>{CarsType.model}</td>
                            </tr>
                        </>
                    )
                })}

            </table>
        </div>
    );
};

