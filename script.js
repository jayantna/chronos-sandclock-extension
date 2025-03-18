// DOM Elements
const timeElement = document.getElementById('current-time');
const dateElement = document.getElementById('current-date');
const dobInput = document.getElementById('dob-input');
const saveButton = document.getElementById('save-dob');
const resetButton = document.getElementById('reset-dob');
const noDobMessage = document.getElementById('no-dob-message');
const ageDisplay = document.getElementById('age-display');
const ageYears = document.getElementById('age-years');
const ageDetailed = document.getElementById('age-detailed');
const ageHours = document.getElementById('age-hours');
const ageMinutes = document.getElementById('age-minutes');
const ageSeconds = document.getElementById('age-seconds');
const ageMilliseconds = document.getElementById('age-milliseconds');

// Initialize the page
function initializePage() {
    // Load the saved DOB
    const savedDOB = localStorage.getItem('userDOB');
    if (savedDOB) {
        dobInput.value = savedDOB;
        noDobMessage.style.display = 'none';
        ageDisplay.style.display = 'block';
    }
    
    // Start the clock
    updateClock();
    
    // Update every 50 milliseconds for smooth millisecond counting
    setInterval(updateClock, 50);
}

// Update Clock function
function updateClock() {
    const now = new Date();
    
    // Format time: HH:MM:SS
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Format date: Weekday, Month Day, Year
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const dateString = now.toLocaleDateString(undefined, options);
    
    // Update the DOM
    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
    
    // Update age if DOB is set
    const savedDOB = localStorage.getItem('userDOB');
    if (savedDOB) {
        updateAge(now, savedDOB);
    }
}

// Calculate and update age
function updateAge(now, dobString) {
    const birthDate = new Date(dobString);
    
    // Calculate milliseconds difference
    const ageInMilliseconds = now - birthDate;
    
    // Calculate years, months, days
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();
    
    // Adjust if needed
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    
    if (days < 0) {
        // Get days in previous month
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
        months--;
    }
    
    // Calculate hours, minutes, seconds
    const hours = Math.floor(ageInMilliseconds / (1000 * 60 * 60) % 24);
    const minutes = Math.floor(ageInMilliseconds / (1000 * 60) % 60);
    const seconds = Math.floor(ageInMilliseconds / 1000 % 60);
    const decimalYears = years + (ageInMilliseconds % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 365);

    // Update the DOM
    ageYears.textContent = decimalYears.toFixed(10);
    ageDetailed.textContent = `${years} years, ${months} months, ${days} days`;
    ageHours.textContent = hours;
    ageMinutes.textContent = minutes;
    ageSeconds.textContent = seconds;
}

// Save DOB function
saveButton.addEventListener('click', function() {
    const dobValue = dobInput.value;
    if (dobValue) {
        localStorage.setItem('userDOB', dobValue);
        noDobMessage.style.display = 'none';
        ageDisplay.style.display = 'block';
        updateClock(); // Update immediately
    }
});

// Reset DOB function with long hold logic
let resetHoldTimer;

resetButton.addEventListener('mousedown', function() {
    resetHoldTimer = setTimeout(function() {
        localStorage.removeItem('userDOB');
        dobInput.value = '';
        noDobMessage.style.display = 'block';
        ageDisplay.style.display = 'none';
    }, 5000); // 5000 milliseconds = 5 seconds
});

resetButton.addEventListener('mouseup', function() {
    clearTimeout(resetHoldTimer); // Clear the timer if the button is released before 5 seconds
});

resetButton.addEventListener('mouseleave', function() {
    clearTimeout(resetHoldTimer); // Clear the timer if the mouse leaves the button
});

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);