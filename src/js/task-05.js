function changeInput() {
    const inputEl = document.querySelector('#name-input');
    const outputEl = document.querySelector('#name-output');

    inputEl.addEventListener('input', (event) => {
        if (inputEl.value === '') {
            outputEl.textContent = "Anonymous";
        } else {
            outputEl.textContent = inputEl.value;
        }
    });
}


changeInput();