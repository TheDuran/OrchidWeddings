// Set the wedding date (change it to your date)
const weddingDate = new Date("June 15, 2025 15:00:00").getTime();

const countdown = () => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days.toString().padStart(2, '0');
  document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "ES HOY!!";
  }
};

// Update every second
const timer = setInterval(countdown, 1000);


// Enable music after user interacts (because autoplay is restricted)
const audio = document.getElementById("background-music");

const enableAudio = () => {
  if (audio.paused) {
    audio.play().catch(() => {
      // Autoplay still blocked
    });
  }
  window.removeEventListener('click', enableAudio);
  window.removeEventListener('scroll', enableAudio);
};

window.addEventListener('click', enableAudio);
window.addEventListener('scroll', enableAudio);

