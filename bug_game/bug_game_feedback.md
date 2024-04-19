---
toc: true
comments: false
layout: base
title: Bug Game Feedback
description: Used to collect brainstorming data for Bug Game (working title).
permalink: /bug-game-feedback/
---

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
    body {
    margin: 0;
    padding: 0;
    }
    .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #cfbc95;
    border-radius: 100px;
    }
    .slide {
    width: 80%;
    height: 80%;
    background-color: #f0e9da;
    border: 2px solid #ccc;
    border-radius: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
    font-family: "Marker Felt", monospace;
    color: #08002e;
    }
    .top-left {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    padding: 20px;
    }
    .top-right {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    padding: 20px;
    }
    .bottom-left {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    padding: 20px;
    }
    .bottom-right {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    padding: 20px;
    }
    img {
    max-width: 100%;
    max-height: 100%;
    }
    h1, h2 {
    margin-bottom: 10px;
    font-family: "Chalkduster", monospace;
    color: #08002e;
    }
    ul {
    list-style-type: none;
    padding: 0;
    }
    textarea {
    width: 100%;
    resize: none;
    }
    #feedbackInput {
      background-color: #debf8e;
      font-family: "Chalkduster", monospace;
      color: #08002e;
      border-radius: 5px;
    }
    #bugStats {
      font-size: 16px;
    }
</style>
<title>BUG GAME FEEDBACK</title>
</head>
<body>
<div class="container">
  <div class="slide">
    <div class="top-left">
      <img id="bugImage" src="{{site.baseurl}}/bug_game/images/default.jpg" alt="Bug Image">
    </div>
    <div class="top-right">
      <h1 id="bugName">Bug Name</h1>
      <ul id="bugStats">
        <li>HP: <span id="hpStat">0</span></li>
        <li>Attack: <span id="attackStat">0</span></li>
        <li>Defense: <span id="defenseStat">0</span></li>
        <li>Special Attack: <span id="specialAttackStat">0</span></li>
        <li>Special Defense: <span id="specialDefenseStat">0</span></li>
        <li>Speed: <span id="speedStat">0</span></li>
      </ul>
    </div>
    <div class="bottom-left">
      <h2>Habitat & Habits</h2>
      <p id="habitatInfo">Habitat information goes here.</p>
      <h2>Predators/Prey</h2>
      <p id="habitInfo">Habit information goes here.</p>
    </div>
    <div class="bottom-right">
      <h2>Feedback</h2>
      <textarea id="feedbackInput" placeholder="Leave your feedback here..." rows="6"></textarea>
    </div>
  </div>
</div>
</body>
<script>
  // BUG DATA
  const bugs = [
    {
      name: "Bug 1",
      image: "bug_images/bug1.jpg",
      stats: {
        hp: 100,
        attack: 80,
        defense: 60,
        specialAttack: 70,
        specialDefense: 65,
        speed: 90
      },
      habitatInfo: "Forest",
      habitInfo: "Eats leaves, preyed upon by birds."
    },
    {
      name: "Bug 2",
      image: "bug_images/bug1.jpg",
      stats: {
        hp: 100,
        attack: 80,
        defense: 60,
        specialAttack: 70,
        specialDefense: 65,
        speed: 90
      },
      habitatInfo: "Not Forest",
      habitInfo: "Eats leaves, preyed upon by not birds."
    },
    {
      name: "Bug 3",
      image: "bug_images/bug1.jpg",
      stats: {
        hp: 100,
        attack: 80,
        defense: 60,
        specialAttack: 70,
        specialDefense: 65,
        speed: 90
      },
      habitatInfo: "Not Forest",
      habitInfo: "Eats leaves, preyed upon by not birds."
    },
  ];
  // Function to display bug information
  function displayBug(index) {
    const bug = bugs[index];
    document.getElementById("bugImage").src = bug.image;
    document.getElementById("bugName").innerText = bug.name;
    document.getElementById("hpStat").innerText = bug.stats.hp;
    document.getElementById("attackStat").innerText = bug.stats.attack;
    document.getElementById("defenseStat").innerText = bug.stats.defense;
    document.getElementById("specialAttackStat").innerText = bug.stats.specialAttack;
    document.getElementById("specialDefenseStat").innerText = bug.stats.specialDefense;
    document.getElementById("speedStat").innerText = bug.stats.speed;
    document.getElementById("habitatInfo").innerText = bug.habitatInfo;
    document.getElementById("habitInfo").innerText = bug.habitInfo;
  }
  // Initialize with the first bug
  let currentBugIndex = 0;
  displayBug(currentBugIndex);
  // Listen for arrow key presses to navigate bugs
  document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
      currentBugIndex = (currentBugIndex + 1) % bugs.length;
      displayBug(currentBugIndex);
    } else if (event.key === "ArrowLeft") {
      currentBugIndex = (currentBugIndex - 1 + bugs.length) % bugs.length;
      displayBug(currentBugIndex);
    }
  });
</script>