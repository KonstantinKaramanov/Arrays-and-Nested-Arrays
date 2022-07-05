function colorize() {
    const rows = document.querySelectorAll('tr');

    for (let i = 1; i < rows.length; i += 2) {
        rows[i].style.background = 'teal';

    }
}

// ALTERNATIVE
// function colorize() {
//     [...document.querySelectorAll('tr:nth-child(2n)')]
//         .forEach(element => element.style.background = 'teal');
// }