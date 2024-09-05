document.querySelectorAll('.radio-input-wrapper input[type="radio"]').forEach((radio) => {
  // Function to handle selection
  function handleSelection() {
    document.querySelectorAll(".radio-input-wrapper").forEach(
      card => card.classList.remove("selected")
    );
    this.parentElement.classList.add("selected");
  }
  
  // Add event listeners for both change and focus events
  radio.addEventListener("change", handleSelection);
  radio.addEventListener("focus", handleSelection);
});
