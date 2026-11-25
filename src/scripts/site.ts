// Small enhancements only; the page works and is readable without them.
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Mobile menu: native <dialog> (focus stays inside, Esc closes), closes on anchor choice.
const dialog = document.getElementById("mobile-menu") as HTMLDialogElement | null;
const openBtn = document.querySelector<HTMLButtonElement>("[data-menu-open]");
if (dialog && openBtn && typeof dialog.showModal === "function") {
  openBtn.hidden = false;
  const close = () => dialog.close();
  openBtn.addEventListener("click", () => {
    dialog.showModal();
    openBtn.setAttribute("aria-expanded", "true");
    document.documentElement.style.overflow = "hidden";
  });
  dialog.addEventListener("close", () => {
    openBtn.setAttribute("aria-expanded", "false");
    document.documentElement.style.overflow = "";
    openBtn.focus();
  });
  dialog.querySelector("[data-menu-close]")?.addEventListener("click", close);
  dialog.querySelectorAll<HTMLAnchorElement>("[data-menu-link]").forEach((a) =>
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href") || "");
      if (!target) return;
      e.preventDefault();
      close();
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", a.getAttribute("href"));
    }),
  );
  // Close when the viewport grows to the desktop header.
  window.matchMedia("(min-width: 1200px)").addEventListener("change", (m) => { if (m.matches && dialog.open) close(); });
}

// Motion 1: lay the post line after first paint.
document.querySelectorAll<HTMLElement>("[data-postline]").forEach((el) => {
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("is-laid")));
});

// Motion 2: the coverage map unfolds from Lviv once it enters the viewport.
// Motion 5: the mobile call bar slides in once the hero has left the screen.
const map = document.querySelector<HTMLElement>("[data-map]");
const hero = document.getElementById("hero");
const bar = document.querySelector<HTMLElement>("[data-callbar]");
if ("IntersectionObserver" in window) {
  if (map) {
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { map.classList.add("is-open"); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(map);
  }
  if (hero && bar) {
    bar.classList.add("is-armed");
    new IntersectionObserver(([e]) => {
      const show = !e.isIntersecting;
      bar.classList.toggle("is-shown", show);
      bar.toggleAttribute("inert", !show);
    }, { threshold: 0 }).observe(hero);
  }
} else {
  map?.classList.add("is-open");
}
