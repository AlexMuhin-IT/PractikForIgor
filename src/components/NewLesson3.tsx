import React, {useState} from 'react';

type FilterType = 'all'|'dollar'|'ruble'
export const NewLesson3 = () => {
        const [money, setMoney] = useState([
            {banknote: 'dollar', nominal: 100, number: 'a456345'},
            {banknote: 'dollar', nominal: 10, number: 'b76845'},
            {banknote: 'ruble', nominal: 150, number: 'c122345'},
            {banknote: 'ruble', nominal: 50, number: 'g112345'},
            {banknote: 'dollar', nominal: 1, number: 'h123245'},
            {banknote: 'ruble', nominal: 10, number: 't122445'},
        ]);

        const [filter, setFilter] = useState<FilterType>('all')

        let currentMoney = money;
        if (filter === 'dollar') {
            currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'dollar')
        }
        if (filter === 'ruble') {
            currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'ruble')
        }

        const onClickFilterHandler = (nameButton: FilterType) => {
            setFilter(nameButton)
        };

        return (
            <>
                <ul>
                    {currentMoney.map((objFromMoneyArr, index) => {
                        return (
                            <li key={index}>
                                <span>{objFromMoneyArr.banknote}-</span>
                                <span>{objFromMoneyArr.nominal}--</span>
                                <span>{objFromMoneyArr.number}</span>
                            </li>
                        )
                    })}
                </ul>
                <div style={{margin: '35px'}}>
                    <button onClick={() => {
                        onClickFilterHandler('all')
                    }}>All
                    </button>
                    <button onClick={() => {
                        onClickFilterHandler('ruble')
                    }}>Ruble
                    </button>
                    <button onClick={() => {
                        onClickFilterHandler('dollar')
                    }}>Dollar
                    </button>
                </div>
            </>
        );
    }
;

