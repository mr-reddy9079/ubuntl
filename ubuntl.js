function signUp() {
    const emailInput = document.getElementById("email").value;
    if (emailInput.trim() === "") {
      alert("Please enter your email address.");
      return;
    }
  
    // Show the modal
    const modal = document.getElementById("signupModal");
    modal.style.display = "block";
    modal.classList.add("show");
    modal.setAttribute("aria-modal", "true");
    modal.removeAttribute("aria-hidden");
  }
  
  function closeModal() {
    const modal = document.getElementById("signupModal");
    modal.style.display = "none";
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    modal.removeAttribute("aria-modal");
  }
   

