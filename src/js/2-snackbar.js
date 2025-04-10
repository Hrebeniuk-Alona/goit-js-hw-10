import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";

import iconError from "../img/error.svg";
import iconOk from "../img/ok.svg"

const chosenForm = document.querySelector(".form");
chosenForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.currentTarget.elements;
    const delay = Number(form.delay.value);
    const state = form.state.value;

    function createPromise(delay, state) {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(delay)
            } else {
                reject(delay)
            }
        }, delay)
    })
    }

    createPromise(delay, state)
        .then(delay => {
            iziToast.show({
            title: "OK",
            titleColor: "#fafafb",
            message: `Fulfilled promise in ${delay}ms`,
            messageColor: "#fafafb",
            position: 'bottomCenter',
            backgroundColor: "#59A10D",
            iconUrl: iconOk,

        })
        })
    .catch(delay=>{iziToast.show({
            message: ` Rejected promise in ${delay}ms`,
            messageColor: "#fafafb",
            position: 'bottomCenter',
        backgroundColor: "#EF4040",
            iconUrl: iconError,

    })
    })
    
    event.currentTarget.reset();
    
}
