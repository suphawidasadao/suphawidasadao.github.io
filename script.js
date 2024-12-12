const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      links.forEach(link => link.classList.remove("text-blue-400"));
      document.querySelector(`nav ul li a[href='#${sectionId}']`).classList.add("text-blue-400");
    }
  });
});

const contactIcons = document.querySelectorAll("#contact a");

contactIcons.forEach(icon => {
  icon.addEventListener("mouseover", () => {
    icon.style.transform = "scale(1.2)";
    icon.style.transition = "transform 0.2s";
  });

  icon.addEventListener("mouseout", () => {
    icon.style.transform = "scale(1)";
  });
});

const skillCards = document.querySelectorAll("#Skills .flex");

skillCards.forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.1) rotate(-2deg)";
    card.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
    card.style.transition = "transform 0.3s, box-shadow 0.3s";
  });

  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1) rotate(0deg)";
    card.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";
  });
});

skillCards.forEach(card => {
  card.addEventListener("click", () => {
    const skillName = card.querySelector("h3").textContent;
    alert(`You clicked on the ${skillName} skill!`);
  });
});
