function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
  return date.toLocaleString('en-US', options);
}

function displayDateTime() {
  const now = new Date();
  const formattedDate = formatDate(now);
  document.getElementById('datetime').textContent = formattedDate;
}

// Call the function to display the current date and time on page load
displayDateTime();

// Optionally, you can refresh the date and time every minute
setInterval(displayDateTime, 60000);
