var acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {        
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function formatDate(date) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };
  return date.toLocaleString('en-US', options);
}



document.getElementById("colorButton").addEventListener("click", function() {
  const colors = ['#D8D2C2', '#fff', '#ECDFCC', '#E7CCCC', '##7a5959', '#E7CCCC','#C39898'];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

//display greeting

// function displayDateTime() {
//   const now = new Date();
//   const formattedDate = formatDate(now);
//   document.getElementById('datetime').textContent = formattedDate;
// }
// displayDateTime();
// setInterval(displayDateTime, 60000);
function formatDate(now) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const dayOfWeek = daysOfWeek[now.getDay()];
  const month = months[now.getMonth()];
  const day = String(now.getDate()).padStart(2, '0');
  const year = now.getFullYear();
  const hours = String(now.getHours() % 12 || 12).padStart(2, '0');  // 12-hour format
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const ampm = now.getHours() < 12 ? 'AM' : 'PM';

  return `${dayOfWeek}, ${month} ${day}, ${year} at ${hours}:${minutes}:${seconds} ${ampm}`;
}

function displayDateTime() {
  const now = new Date();
  const formattedDate = formatDate(now);
  document.getElementById('datetime').textContent = formattedDate;
}

// Call immediately to show time as soon as possible
displayDateTime();

// Update every second (1000ms)
setInterval(displayDateTime, 1000);



function greetBasedOnTime() {
  const now = new Date();
  const hours = now.getHours();
  let greeting;

  if (hours >= 5 && hours < 12) {
      greeting = "Good morning!";
  } else if (hours >= 12 && hours < 18) {
      greeting = "Good afternoon!";
  } else if (hours >= 18 && hours <=21)
      greeting = "Good evening!";
      else{
        greeting = "Good night!";
      }

  document.getElementById('greeting').innerText = greeting;
}
greetBasedOnTime();