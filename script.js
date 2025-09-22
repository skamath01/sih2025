// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Demo functionality
function askQuestion(question) {
  const input = document.getElementById("questionInput");
  input.value = question;
  input.focus();
}

function submitQuestion() {
  const input = document.getElementById("questionInput");
  const question = input.value.trim();

  if (question) {
    // Simulate processing
    input.value = "Processing your question...";
    input.disabled = true;

    setTimeout(() => {
      input.value = "";
      input.disabled = false;
      input.placeholder =
        "Great question! NMI would provide detailed answers in your language.";

      setTimeout(() => {
        input.placeholder = "Ask your question in any language...";
      }, 3000);
    }, 2000);
  }
}

// Enter key support for demo
document
  .getElementById("questionInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      submitQuestion();
    }
  });

// Add scroll-triggered animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in");
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll("section > div > div").forEach((el) => {
  observer.observe(el);
});
//video code
const DemoBtn = document.querySelector("#openVideoBtn");
const overLay = document.querySelector(".videoOverlay");
const closeBtn = document.querySelector(".close-btn");
const video = overLay.querySelector("video");
DemoBtn.addEventListener("click", () => {
  overLay.classList.remove("hidden"); // show overlay
  document.body.classList.add("overflow-hidden");
  video.play();
});
closeBtn.addEventListener("click", (ev) => {
  ev.stopPropagation();
  overLay.classList.add("hidden"); // hide overlay
  video.pause(); // pause video playback
  video.currentTime = 0;
  document.body.classList.remove("overflow-hidden");
});
