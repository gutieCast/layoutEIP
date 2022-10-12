const sections = [...document.getElementsByClassName("section")];

let options = {
  rootMargin: "0px",
  threshold: 0.25
};

const handleIntersection = (entries) => {
  entries.forEach(entry => {
    const { target } = entry;
    
    if (entry.intersectionRatio >= 0.25) {
      target.classList.add("is-visible");
    } else {
      target.classList.remove("is-visible");
    }
  });
};

const observer = new IntersectionObserver(handleIntersection, options);

sections.forEach((section, index) => {
  observer.observe(section);
});

window.innerWidth >= 761 ? null : document.querySelector('#warning').classList.toggle('show');