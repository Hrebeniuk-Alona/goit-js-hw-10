import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const inputDate = document.querySelector('input[type = "text"]');
const btnStart = document.querySelector("button[data-start]");
const clockface = document.querySelector(".timer");

btnStart.addEventListener("click", handleClick);

btnStart.disabled = true;
let userSelectedDate = null;
let timer = null;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    handleDateSelection(selectedDates);
  },
};

flatpickr(inputDate, options);



function handleClick() {
  btnStart.disabled = true;
  inputDate.disabled = true;

  timer=setInterval(() => {
    const time = userSelectedDate - Date.now();
    if (time <= 0) {
      clearInterval(timer);
      clockface.textContent = "00:00:00:00";
      inputDate.disabled = false;

      return;
    }
    
    const { days, hours, minutes, seconds } = convertMs(time)

    clockface.textContent=`${addLeadingZero(days)}:${addLeadingZero(hours)}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`;
  }, 1000)
  

}


function handleDateSelection(selectedDates) {
  if (selectedDates[0] < Date.now()) {
    iziToast.show({
      title: "Error",
      titleColor: "#fafafb",
      message: `Please choose a date in the future`,
      messageColor: "#fafafb",
      position: 'topRight',
      backgroundColor: "#EF4040",
      iconUrl:"../img/error.svg"
    })
    btnStart.disabled = true;
    return
  } else {
    userSelectedDate = selectedDates[0];
    btnStart.disabled = false;
  }
    
}

function addLeadingZero(value) {
  return String(value).padStart(2,"0");
}



function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
