const mainTitle = document.querySelector('#title');
const btnDecrement = document.querySelector('#Decrement');
const btnincrement = document.querySelector('#increment');
const btnreset = document.querySelector('#reset');
let curValue = 0;

btnincrement.addEventListener
    ('click', () => {
        curValue = curValue + 1;
        mainTitle.textContent = curValue;

    }

    );
btnDecrement.addEventListener
    ('click', () => {
        curValue = curValue - 1;
        mainTitle.textContent = curValue;

    }

    );
btnreset.addEventListener
    ('click', () => {
        curValue = 0;
        mainTitle.textContent = curValue;

    }

    );