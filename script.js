const targetDate = new Date('2026-10-10T00:00:00+05:00').getTime();
const ids = ['days', 'hours', 'minutes', 'seconds'];
const pad = (value, length = 2) => String(value).padStart(length, '0');

function updateCountdown() {
  const remaining = targetDate - Date.now();
  const timer = document.getElementById('timer');
  const celebration = document.getElementById('celebration');
  if (remaining <= 0) {
    timer.hidden = true;
    celebration.hidden = false;
    clearInterval(countdownInterval);
    return;
  }
  const seconds = Math.floor(remaining / 1000);
  const values = [Math.floor(seconds / 86400), Math.floor(seconds % 86400 / 3600), Math.floor(seconds % 3600 / 60), seconds % 60];
  ids.forEach((id, index) => document.getElementById(id).textContent = pad(values[index], index === 0 ? 3 : 2));
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);
