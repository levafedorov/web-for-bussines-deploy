import React from 'react';



export default function StatisticItem(props){

    const {amount, name} = props;

    return(

        <div className="statistic-item">
            <div className="amount">{amount}</div>
            <div className="name">{name}</div>
        </div>
    )
}