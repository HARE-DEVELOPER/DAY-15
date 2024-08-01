document.addEventListener('DOMContentLoaded', function() {
    const countdownDiv = document.getElementById('countdown');
    const messageDiv = document.getElementById('message');
    let countdown = 10;
  
    const intervalId = setInterval(() => {
      if (countdown > 0) {
        countdownDiv.textContent = countdown;
        countdown--;
      } else {
        clearInterval(intervalId);
        countdownDiv.textContent = '';
        messageDiv.textContent = "Happy Independence Day";
      }
    }, 1000);
  });
  