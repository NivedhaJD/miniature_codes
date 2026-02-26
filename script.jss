const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

const correct = new Set(["sender", "urgent", "link", "grammar"]);

checkBtn.addEventListener("click", () => {
  const selected = new Set(
    Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map((cb) => cb.value)
  );

  let score = 0;
  for (const item of correct) {
    if (selected.has(item)) score += 1;
  }
  if (selected.has("logo")) score -= 1;

  if (score >= 4) {
    result.textContent = "Great! You spotted most phishing red flags.";
  } else if (score >= 2) {
    result.textContent = "Good start. Review sender address and suspicious links more carefully.";
  } else {
    result.textContent = "No worries—revisit the top habits and try again.";
  }
});
