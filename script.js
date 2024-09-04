document.querySelectorAll('.radio-input-wrapper input[type="radio"]').forEach((radio) => {
    radio.addEventListener("change", 
      function () {
        document.querySelectorAll(".radio-input-wrapper").forEach(
          card => card.classList.remove("selected")
        );
        this.parentElement.classList.add("selected");
      });
  });
