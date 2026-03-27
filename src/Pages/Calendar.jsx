import React, { useState } from "react";

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

    const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = getDaysInMonth(year, month);

    const today = new Date();

    const calendarDays = [];
    for (let i = 0; i < firstDay; i++) calendarDays.push(null);
    for (let i = 1; i <= totalDays; i++) calendarDays.push(i);

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl w-full max-w-3xl mx-auto mt-6">

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <button
                    onClick={prevMonth}
                    className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                    Prev
                </button>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {months[month]} {year}
                </h2>

                <button
                    onClick={nextMonth}
                    className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                    Next
                </button>
            </div>

            {/* Days of the Week */}
            <div className="grid grid-cols-7 gap-2 text-center text-gray-600 dark:text-gray-300 font-semibold">
                {days.map(day => <div key={day}>{day}</div>)}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-4 mt-4">
                {calendarDays.map((day, index) =>
                    day ? (
                        <div
                            key={index}
                            className={`aspect-square flex items-center justify-center rounded-lg cursor-pointer transition
                ${day === today.getDate() && month === today.getMonth() && year === today.getFullYear()
                                    ? "bg-blue-500 text-white dark:bg-blue-600"
                                    : "hover:bg-blue-100 dark:hover:bg-blue-700"
                                }
              `}
                        >
                            {day}
                        </div>
                    ) : (
                        <div key={index}></div>
                    )
                )}
            </div>
        </div>
    );
};

export default Calendar;