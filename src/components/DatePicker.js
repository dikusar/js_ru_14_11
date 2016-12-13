import React, { Component } from 'react';

// Addos
import DayPicker, { DateUtils } from 'react-day-picker'
import "react-day-picker/lib/style.css"

export class DatePicker extends Component {

	state = {
		//надо было промежуток дат сделать
        selectedDay: null
    }

    handleDayClick = (ev, day, { selected }) => this.setState({selectedDay: selected ? null : day })

	render() {
		const { selectedDay }= this.state
		return (
			<div>
				<DayPicker
		            selectedDays={ day => DateUtils.isSameDay(selectedDay, day) }
		            onDayClick={ this.handleDayClick } />
		        <p style={{textAlign: 'center', marginTop: 0, marginBottom: 30}}>
		            <b> { selectedDay ? selectedDay.toLocaleDateString() : 'Day not selected' } </b>
		        </p>
			</div>
		)
	}
}

export default DatePicker
