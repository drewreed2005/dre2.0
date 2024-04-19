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
      predatorPreyInfo: "Eats leaves, preyed upon by birds."
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
      predatorPreyInfo: "Eats leaves, preyed upon by not birds."
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
      predatorPreyInfo: "Eats leaves, preyed upon by not birds."
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
    document.getElementById("predatorPreyInfo").innerText = bug.predatorPreyInfo;
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