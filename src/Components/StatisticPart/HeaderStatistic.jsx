import React from 'react';



export default function HeaderStatistic(props){



    return(
        <section className="header-statistic">
            <div className="bg">
            <div className='statistic-place'>
                {props.children}
            </div>
            </div>
        </section>
    )
}