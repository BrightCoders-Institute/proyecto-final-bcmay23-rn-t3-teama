import { SetStateAction } from "react";
import { DayObjectProps } from "../interfaces/interfaces";

export const namesDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const getCurrentWeekdays = (namesDays: any[], setSelectedDay: { (value: any): void; (value: SetStateAction<DayObjectProps | undefined>): void; (arg0: { isSelectedDay: boolean; weekName: any; completeDay: any; day: number; month: string; year: number; }): void; }) => {
  const results = [];

  const todaysDate = new Date();

  const dayCurrWeek = todaysDate.getDay();

  const firstWeekDay = -dayCurrWeek;
  const lastWeekDay = 6 - dayCurrWeek;

  for (let i = firstWeekDay; i <= lastWeekDay; i++) {
    const date = new Date(todaysDate);
    date.setDate(todaysDate.getDate() + i);
    const nameDay = namesDays[(dayCurrWeek + i + 7) % 7].slice(0, 3).toUpperCase();
    const dayObject = { isSelectedDay: i === 0, weekName: nameDay, completeDay: (namesDays[(dayCurrWeek + i + 7) % 7]), day: date.getDate(), month: months[date.getMonth()], year: date.getFullYear() };
    results.push(dayObject);
    if (i === 0) { setSelectedDay(dayObject); }
  }
  
  return results;
};