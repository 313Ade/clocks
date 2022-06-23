//array of week days and months of the year.
let weekDays = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun']
let month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];


function clock() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let day = hours < 11 ? 'AM' : 'PM' //AM or PM using ternary operator
    let dayToday = today.getDay()
    let date = today.getDate()
    const mon = today.getMonth()
    const year = today.getFullYear()

    //add zeroes to time values when necessary. 
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
  
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('time').innerHTML = day;
    document.getElementById('day').innerHTML = date;
    document.getElementById('year').innerHTML = year;
    document.getElementById('month').innerHTML = month[mon];
    document.getElementById('' + weekDays[dayToday] + '').style.color = '#e6e6fa';

    const format = document.getElementById('timeArea')

    format.addEventListener('click', () => {
        let newFormat = hours % 12
        document.getElementById('hours').innerHTML = newFormat;
        console.log(newFormat)
    })

}



setInterval(clock, 1000)

clock()