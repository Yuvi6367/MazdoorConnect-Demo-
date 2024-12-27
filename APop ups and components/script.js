function dismissPopup() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.popup').style.display = 'none';
    const spreadsheet = document.querySelector('.spreadsheet');

}

function switchMonth(direction) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const currentMonthElement = document.querySelector('.current-month');
    let currentMonth = currentMonthElement.textContent;
    let index = months.indexOf(currentMonth);

    if (direction === 'prev') {
        index = (index - 1 + months.length) % months.length;
    } else if (direction === 'next') {
        index = (index + 1) % months.length;
    }

    currentMonthElement.textContent = months[index];
}