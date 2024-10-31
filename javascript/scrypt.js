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
  const colors = ['#f8c3c3', '#f9e8c1', '#c1f9c6', '#c1d6f9', '#dcc1f9', '#f9c1d1'];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});


//display greeting

function displayDateTime() {
  const now = new Date();
  const formattedDate = formatDate(now);
  document.getElementById('datetime').textContent = formattedDate;
}
displayDateTime();
setInterval(displayDateTime, 60000);
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