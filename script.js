/*
  Edit these details once. Every place on the page that shows the name,
  city, phone, email or Instagram reads from here.
*/
const SITE = {
  // Owner's name, shown in the About section. Leave as is to keep it generic.
  name: "a freelance web designer and marketer",
  city: "Tamil Nadu",
  // WhatsApp number with country code, digits only. India example: 919876543210
  whatsapp: "919876543210",
  phoneDisplay: "+91 98765 43210",
  email: "hello@a2digigrowth.com",
  instagramHandle: "a2digigrowth",
  whatsappMessage: "Hi A2 Digi Growth, I saw your website. I run a business and would like to talk about a project.",
};

(function applySiteDetails() {
  const waLink = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
  const handle = SITE.instagramHandle.replace(/^@/, "");
  const text = {
    name: SITE.name,
    city: SITE.city,
    email: SITE.email,
    "phone-display": SITE.phoneDisplay,
    "instagram-handle": `@${handle}`,
  };
  const hrefs = {
    "whatsapp-link": waLink,
    "email-link": `mailto:${SITE.email}`,
    "instagram-link": `https://instagram.com/${handle}`,
  };
  document.querySelectorAll("[data-site]").forEach((el) => {
    const key = el.dataset.site;
    if (key in text) el.textContent = text[key];
    if (key in hrefs) el.setAttribute("href", hrefs[key]);
  });
})();

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Mark the page settled after the entrance animations have had time to finish. */
window.addEventListener("load", () => setTimeout(() => document.documentElement.classList.add("is-settled"), 1500));

/* Header tightens once the page is scrolled. */
(function stickyHeader() {
  const header = document.querySelector(".top");
  if (!header) return;
  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
  update();
  window.addEventListener("scroll", update, { passive: true });
})();

/* Hero windows lean toward the pointer. */
(function heroTilt() {
  const stack = document.getElementById("hero-stack");
  if (!stack || reduceMotion || !window.matchMedia("(hover: hover)").matches) return;
  const windows = [...stack.querySelectorAll(".window")];
  let raf = 0;
  let target = { x: 0, y: 0 };
  const render = () => {
    windows.forEach((w) => {
      const depth = Number(w.dataset.depth || 10);
      w.style.setProperty("--tx", `${target.x * depth}px`);
      w.style.setProperty("--ty", `${target.y * depth}px`);
      w.style.setProperty("--rx", `${-target.y * 6}deg`);
      w.style.setProperty("--ry", `${target.x * 8}deg`);
    });
    raf = 0;
  };
  const onMove = (e) => {
    const r = stack.getBoundingClientRect();
    target = {
      x: ((e.clientX - r.left) / r.width - 0.5) * 2,
      y: ((e.clientY - r.top) / r.height - 0.5) * 2,
    };
    if (!raf) raf = requestAnimationFrame(render);
  };
  const onLeave = () => {
    target = { x: 0, y: 0 };
    if (!raf) raf = requestAnimationFrame(render);
  };
  stack.closest(".hero").addEventListener("pointermove", onMove);
  stack.closest(".hero").addEventListener("pointerleave", onLeave);
  stack.classList.add("is-tilting");
})();

/* Case study screenshots scroll through the whole page on hover or tap. */
(function caseScroll() {
  document.querySelectorAll(".case-shot").forEach((shot) => {
    const viewport = shot.querySelector(".case-viewport");
    const img = shot.querySelector("img");
    if (!viewport || !img) return;
    const travel = () => Math.max(0, img.offsetHeight - viewport.clientHeight);
    const start = () => {
      const d = travel();
      img.style.transitionDuration = reduceMotion ? "0ms" : `${Math.max(2000, d * 4)}ms`;
      img.style.transform = `translateY(-${d}px)`;
    };
    const stop = () => {
      img.style.transitionDuration = reduceMotion ? "0ms" : "900ms";
      img.style.transform = "translateY(0)";
    };
    shot.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") start(); });
    shot.addEventListener("pointerleave", (e) => { if (e.pointerType === "mouse") stop(); });
    shot.addEventListener("focus", start);
    shot.addEventListener("blur", stop);
    // On touch, first tap previews the scroll, second tap opens the site.
    let previewed = false;
    shot.addEventListener("click", (e) => {
      if (!window.matchMedia("(hover: none)").matches) return;
      if (!previewed) {
        e.preventDefault();
        previewed = true;
        start();
        setTimeout(() => { stop(); previewed = false; }, Math.max(2000, travel() * 4) + 1200);
      }
    });
  });
})();

/* Sections fade in as they arrive. */
(function reveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
  items.forEach((el) => io.observe(el));
})();
