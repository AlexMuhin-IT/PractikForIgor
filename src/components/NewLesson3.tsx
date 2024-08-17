import React, {useState} from 'react';

export const NewLesson3 = () => {
    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: 'a12345'},
        {banknote: 'dollar', nominal: 10, number: 'a12345'},
        {banknote: 'ruble', nominal: 150, number: 'a12345'},
        {banknote: 'dollar', nominal: 10, number: 'a12345'},
        {banknote: 'dollar', nominal: 50, number: 'a12345'},
        {banknote: 'ruble', nominal: 50, number: 'a12345'},
        {banknote: 'dollar', nominal: 1, number: 'a12345'},
        {banknote: 'ruble', nominal: 10, number: 'a12345'},
    ]);
    return (
        <ul>
            {money.map((objFromMoneyArr) => {
                return (
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                    </li>
                )
            })}
        </ul>
    );
};

