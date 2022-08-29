const numberDayWeek = [6, 0, 1, 2, 3, 4, 5];
export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getAllDaysInMonth(year: number, month: number): Date[] {
    const date = new Date(year, month, 1);
  
    const dates: Date[] = [];
  
    while (date.getMonth() === month) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
  
    return dates;
  }

export function getCalendarDays(year: number, month: number) {
    const daysInCurrentMonth: Date[] = getAllDaysInMonth(year, month);
    const prevMonth: Date = new Date(year, month, 0)
    const prevMonthDays: Date[] = []
    prevMonth.setDate(prevMonth.getDate() - numberDayWeek[daysInCurrentMonth[0].getDay()]+1)

    if(numberDayWeek[daysInCurrentMonth[0].getDay()] === 0) {
      return daysInCurrentMonth;
    }

    while(prevMonth.getMonth() !== month) {
      prevMonthDays.unshift(new Date(prevMonth))
      prevMonth.setDate(prevMonth.getDate() + 1)
    }

    prevMonthDays.forEach(day => {
      daysInCurrentMonth.unshift(day);
    })

    return daysInCurrentMonth;
} 