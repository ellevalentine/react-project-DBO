import React from 'react'

const MonthCard = ({ month, sum18, sum19 }) => {
    const percentageChange = Math.round( (((sum19) - (sum18)) / (sum18))*10000)/100
    return (
        <div className="month-card">
            <div className="month-name">
            {month}
            </div>
            <div className={`month-change ${percentageChange < 0 ? 'down' : 'up'}`}>
            { percentageChange } %
            </div>
        </div>
    )
}

export default MonthCard