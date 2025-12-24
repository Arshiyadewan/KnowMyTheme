let answers =[];
let currentques = 1;

function addanswer(value) {
    answers.push(value);

    document.getElementById("q" + currentques).classList.add("hidden");
    currentques++;

    if (currentques <= 3) {
        document.getElementById("q" + currentques).classList.remove("hidden")
    }   else {
        showresult();
    }
}

function showresult() {
    let theme = "Happy";
    let link = "happy.html";

    if (answers.includes("focus")) {
        theme = "Academic Validation";
        link = "academic.html";
    }

    else if (answers.includes("calm")) {
        theme = "Health";
        link = "health.html";
    }

     else if (answers.includes("growth")) {
        theme = "Financial Growth";
        link = "growth.html";
    }

     else if (answers.includes("travel")) {
        theme = "Travel";
        link = "travel.html";
    }

     else if (answers.includes("learn")) {
        theme = "Skill";
        link = "skill.html";
    }

    document.getElementById("theme-name").innerText = theme;
    document.getElementById("theme-link").href = link;
    document.getElementById("result").classList.remove("hidden");
}