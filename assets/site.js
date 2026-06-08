const progressBar = document.querySelector(".progress-bar");
const chapterSelect = document.querySelector("[data-chapter-select]");

function updateProgress() {
  if (!progressBar) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
}

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

if (chapterSelect) {
  chapterSelect.addEventListener("change", (event) => {
    const target = event.target.value;
    if (target) window.location.href = target;
  });
}
