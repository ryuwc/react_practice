import { useState } from "react";
import Calendar from "react-calendar";
import { formatDate } from "react-calendar/src/shared/dateFormatter";

function MyCalendar() {
	const [date, setDate] = useState(new Date());

	const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
	const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

	return (
		<div>
			<div>
				<button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1))}>Prev</button>
				<span>{`${new Intl.DateTimeFormat('default', { month: 'long' }).format(date)} ${date.getFullYear()}`}</span>
				<button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1))}>Next</button>
			</div>
			<div>
				{days.map(day => (
					<span key={day}>{day}</span>
				))}
			</div>
		</div>
	);
}

export default MyCalendar;