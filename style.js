function digitalClock() {
  let dateFunction = new Date();
  let day = dateFunction.getDay();
  let hours = dateFunction.getHours();
  let minutes = dateFunction.getMinutes();
  let seconds = dateFunction.getSeconds();
  let todayDate = dateFunction.getDate();
  let months = dateFunction.getMonth();
  let years = dateFunction.getFullYear();
  let timeFormat = "AM";
  let comma = " ,";

  const thisMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  hours = hours == 0 ? 12 : hours;
  timeFormat = hours >= 12 ? "PM" : "AM";

  hours = hours > 12 ? hours - 12 : hours;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
  document.querySelector(".format").innerHTML = timeFormat;
  let todayDays = document.querySelector(`.weekdays :nth-child(${day + 1})`);
  todayDays.classList.add("active");

  document.querySelector(".month").innerHTML = thisMonths[months];
  document.querySelector(".day").innerHTML = todayDate + ",";
  document.querySelector(".year").innerHTML = years;
}

setInterval(digitalClock, 1000);
