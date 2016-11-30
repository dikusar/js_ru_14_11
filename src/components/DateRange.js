import React, { Component } from 'react'
import { connect } from 'react-redux'
import DayPicker, { DateUtils } from 'react-day-picker'
import { addRange } from '../AC/daterange'

window.DayPicker = DayPicker

import 'react-day-picker/lib/style.css'

class DateRange extends Component {

    handleDayClick = (e, day) => {
        // this.setState(DateUtils.addDayToRange(day, this.state))
        const { addRange }=this.props
        addRange(day)
    }

    render() {
        const 
            { range }=this.props,
            { from, to }=range,
            isFirstDay = !from && !to && <p>Please select the <strong>first day</strong>.</p>,
            isLastDay = from && !to && <p>Please select the <strong>last day</strong>.</p>,
            selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, range) }
                    onDayClick={ this.handleDayClick }
                />
                {isFirstDay}
                {isLastDay}
                {selectedRange}
            </div>
        );
    }

}

export default connect(state => ({
    range: state.range
}) , { addRange })(DateRange)