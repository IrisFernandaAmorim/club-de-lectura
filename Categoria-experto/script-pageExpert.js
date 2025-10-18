// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select all "Por leer" buttons
  const toggleButtons = document.querySelectorAll(".btn-toggle");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("read")) {
        // Switch back to unread
        button.classList.remove("read");
        button.textContent = "Por leer 📖";
        button.style.backgroundColor = "#61d486"; // green
      } else {
        // Mark as read
        button.classList.add("read");
        button.textContent = "Leído ✅";
        button.style.backgroundColor = "#f2a5a5"; // red/pink
      }
    });
  });

  // Handle "Ver resumen" button (you can customize this later)
  const summaryButtons = document.querySelectorAll(".summary");

  summaryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const link = btn.getAttribute("data-link");
    window.open(link, "_blank"); // 在新标签页打开
  });
});
});
