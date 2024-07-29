// Set the target date
const targetDate = new Date("Sep 22, 2024 10:15:00").getTime();

function padNumber(number) {
    return number.toString().padStart(2, '0');
}


function updateCountdown() {
    const now = new Date().getTime();
    const distance = Math.max(targetDate - now, 0);

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("countdown").innerHTML = 
        padNumber(days) + " дни " 
        + padNumber(hours) + " часа " 
        + padNumber(minutes) + " минути " 
        + padNumber(seconds) + " секунди";

    // If the countdown is over, display some text
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}

// Update the countdown every 1 second
updateCountdown();
const interval = setInterval(updateCountdown, 1000);
