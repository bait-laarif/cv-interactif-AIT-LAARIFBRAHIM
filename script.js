document.addEventListener("DOMContentLoaded", () => {
  // === 1. Bouton afficher/masquer la section Compétences ===
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Afficher/Masquer Compétences";
  toggleBtn.className = "btn btn-secondary my-3";
  const competencesSection = document.getElementById("competences");
  competencesSection.parentNode.insertBefore(toggleBtn, competencesSection);

  toggleBtn.addEventListener("click", () => {
    competencesSection.style.display = (competencesSection.style.display === "none") ? "block" : "none";
  });

  // === 2. Animation au scroll pour sections dynamiques ===
  const dynamicSections = document.querySelectorAll(".dynamic-section");
  window.addEventListener("scroll", () => {
    dynamicSections.forEach(section => {
      const position = section.getBoundingClientRect().top;
      if (position < window.innerHeight - 100) {
        section.classList.add("visible");
      }
    });
  });

  // === 3. Images dynamiques (logos HTML, CSS, JS) ===
  const imagesContainer = document.getElementById("images-html");
  const images = [
    {src: "html.png", alt: "Logo HTML"},
    {src: "css.png", alt: "Logo CSS"},
    {src: "js.png", alt: "Logo JavaScript"}
  ];
  images.forEach(imgData => {
    const img = document.createElement("img");
    img.src = imgData.src;
    img.alt = imgData.alt;
    img.className = "m-2";
    img.style.width = "80px";
    imagesContainer.appendChild(img);
  });

  // === 4. Validation du formulaire de contact ===
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
    } else {
      alert("Merci pour votre message, " + document.getElementById("name").value + " !");
      form.reset();
      form.classList.remove("was-validated");
    }
  });
});
