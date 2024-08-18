import React, {MouseEvent} from 'react';


type NewLesson4Props = {
    currentMoney: moneyTypeProps[]
    onClick: (nameButton: FilterType) => void;
}
type FilterType = 'all' | 'dollar' | 'ruble'

type moneyTypeProps = {
    banknote: string
    nominal: number
    number: string
}

export const NewLesson4 = (props: NewLesson4Props) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((m, index) => {
                    return (
                        <li key={index}>
                            <span>{m.banknote}-</span>
                            <span>{m.nominal}--</span>
                            <span>{m.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => {
                    props.onClick('all')
                }}>All
                </button>
                <button onClick={() => {
                    props.onClick('ruble')
                }}>Ruble
                </button>
                <button onClick={() => {
                    props.onClick('dollar')
                }}>Dollar
                </button>
            </div>
        </>
    );
};

