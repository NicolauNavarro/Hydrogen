

let questionIndex = 0;
let userAnswers = [];

// Example Question Properties (can expand later)
const questionTypes = [
  { prop: "type", url: "https://pokeapi.co/api/v2/type" },
  // you can add more like height, abilities, etc.
];

// Main loop
askQuestions();

async function askQuestions() {
  if (questionIndex >= questionTypes.length) {
    showFinalPokemon();
    return;
  }

  const currentQuestion = questionTypes[questionIndex];
  const res = await fetch(currentQuestion.url);
  const data = await res.json();
  const allOptions = data.results;

  // Get 4 random options
  const options = [];
  const usedIndexes = new Set();
  while (options.length < 4) {
    const idx = Math.floor(Math.random() * allOptions.length);
    if (!usedIndexes.has(idx)) {
      usedIndexes.add(idx);
      options.push(allOptions[idx]);
    }
  }

  newQuestion(currentQuestion.prop, options);
}

// UI render
function newQuestion(property, options) {
  const carousel = document.querySelector(".carousel");
  carousel.innerHTML = ""; // Clear previous

  options.forEach((option) => {
    const card = document.createElement("div");
    const rotation = (Math.random() * 8 - 4).toFixed(2); // -4 to +4 deg
    card.className = "card";
    card.style.setProperty("--rotation", `${rotation}deg`);
    card.textContent = option.name;
    card.addEventListener("click", () => {
      userAnswers.push({ [property]: option.name });
      questionIndex++;
      askQuestions();
    });
    carousel.appendChild(card);
  });
}

// Final result
function showFinalPokemon() {
  console.log("User Answers:", userAnswers);

  // You could make a fetch here using filters to pick a matching Pokémon
  document.querySelector(".carousel").innerHTML = `
    <div class="result">
      You are a... <strong>Pikachu</strong> ⚡ (Example!)
    </div>
  `;
}
