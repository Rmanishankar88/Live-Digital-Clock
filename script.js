// Get DOM elements
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');

// Arrays for names
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

// Update function
function updateClock() {
  const now = new Date();

  // Time in HH:MM:SS
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  timeEl.textContent = `${hours}:${minutes}:${seconds}`;

  // Date in Month DD, YYYY (Weekday)
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const weekday = weekdays[now.getDay()];
  dateEl.textContent = `${month} ${day}, ${year} (${weekday})`;
}

// Run every second
setInterval(updateClock, 1000);
updateClock(); // Initial call
