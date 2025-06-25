function openBooking(name) {
  document.getElementById("tutorName").innerText = `Booking for ${name}`;
  document.getElementById("bookingModal").style.display = "block";
}

function closeBooking() {
  document.getElementById("bookingModal").style.display = "none";
}

function confirmBooking() {
  alert("Your booking has been confirmed!");
  closeBooking();
}

// FAQ toggle
document.querySelectorAll(".faq-item h3").forEach(item => {
  item.addEventListener("click", () => {
    const answer = item.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Contact form alert
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for contacting StudyTime!");
});

// Newsletter alert
document.getElementById("newsletterForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("You're now subscribed to StudyTime updates!");
});
