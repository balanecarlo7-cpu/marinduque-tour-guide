const destinations = [
  { name: "Boac Heritage Town", category: "heritage", label: "Heritage", location: "Boac, Marinduque", description: "A demonstration walking-tour entry focused on historic streets, local stories, and cultural learning." },
  { name: "Poctoy White Beach", category: "beach", label: "Beach", location: "Torrijos, Marinduque", description: "A demonstration beach entry for relaxation, sightseeing, and responsible coastal recreation." },
  { name: "Malbog Sulfur Spring", category: "nature", label: "Nature", location: "Buenavista, Marinduque", description: "A demonstration nature entry inviting visitors to learn about the area and care for the environment." },
  { name: "Morioka-inspired Local Treats", category: "food", label: "Food", location: "Marinduque", description: "A demonstration food entry highlighting the value of trying local flavors and supporting small vendors." },
  { name: "Tres Reyes Islands", category: "nature", label: "Nature", location: "Gasan, Marinduque", description: "A demonstration island-hopping entry emphasizing preparation, safety, and respect for marine spaces." },
  { name: "Moriones Culture Corner", category: "heritage", label: "Heritage", location: "Marinduque", description: "A demonstration cultural entry introducing visitors to local traditions and community storytelling." }
];

const grid = document.querySelector("#destination-grid");
const filter = document.querySelector("#category-filter");
const count = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");

function renderDestinations(category = "all") {
  const visible = category === "all" ? destinations : destinations.filter((item) => item.category === category);
  grid.innerHTML = visible.map((item) => `
    <article class="destination-card">
      <span class="card-category">${item.label}</span>
      <h3>${item.name}</h3>
      <p class="location">${item.location}</p>
      <p>${item.description}</p>
    </article>
  `).join("");
  count.textContent = `${visible.length} destination${visible.length === 1 ? "" : "s"} shown`;
  emptyState.hidden = visible.length !== 0;
}

filter.addEventListener("change", (event) => renderDestinations(event.target.value));
renderDestinations();

const checklistInputs = [...document.querySelectorAll("#checklist input[type='checkbox']")];
const progressText = document.querySelector("#progress-text");
const clearButton = document.querySelector("#clear-checklist");

function updateProgress() {
  const completed = checklistInputs.filter((input) => input.checked).length;
  progressText.textContent = `${completed} of ${checklistInputs.length} completed`;
}

checklistInputs.forEach((input) => input.addEventListener("change", updateProgress));
clearButton.addEventListener("click", () => {
  checklistInputs.forEach((input) => { input.checked = false; });
  updateProgress();
  checklistInputs[0]?.focus();
});
