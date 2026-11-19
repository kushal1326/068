
let selectedMood = "";

function selectMood(button) {

    document.querySelectorAll(".mood").forEach(mood => {
        mood.classList.remove("selected");
    });

    button.classList.add("selected");

    selectedMood = button.dataset.mood;
}

function saveMood() {

    const note = document.getElementById("moodNote").value;
    const message = document.getElementById("message");

    if (!selectedMood) {
        message.style.color = "red";
        message.innerText = "Please select your mood first!";
        return;
    }

    const entry = {
        id: Date.now(),
        mood: selectedMood,
        note: note,
        date: new Date().toLocaleString()
    };

    let moods = JSON.parse(localStorage.getItem("moods")) || [];

    moods.unshift(entry);

    localStorage.setItem("moods", JSON.stringify(moods));

    document.getElementById("moodNote").value = "";

    selectedMood = "";

    document.querySelectorAll(".mood").forEach(mood => {
        mood.classList.remove("selected");
    });

    message.style.color = "green";
    message.innerText = "Your mood has been saved successfully! ❤️";

    displayHistory();
}

function displayHistory() {

    const history = document.getElementById("history");

    const moods = JSON.parse(localStorage.getItem("moods")) || [];

    if (moods.length === 0) {
        history.innerHTML =
            '<p class="empty">Your mood entries will appear here.</p>';
        return;
    }

    history.innerHTML = "";

    moods.forEach(entry => {

        const item = document.createElement("div");
        item.className = "history-item";

        const details = document.createElement("div");

        const heading = document.createElement("h3");
        heading.textContent = getEmoji(entry.mood) + " " + entry.mood;

        const date = document.createElement("p");
        date.textContent = entry.date;

        const note = document.createElement("p");
        note.textContent = entry.note || "No note added.";

        details.append(heading, date, note);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", () => {
            deleteMood(entry.id);
        });

        item.append(details, deleteButton);

        history.appendChild(item);
    });
}

function getEmoji(mood) {

    const emojis = {
        Happy: "😊",
        Excited: "🤩",
        Calm: "😌",
        Sad: "😢",
        Angry: "😡",
        Tired: "😴"
    };

    return emojis[mood] || "🙂";
}

function deleteMood(id) {

    let moods = JSON.parse(localStorage.getItem("moods")) || [];

    moods = moods.filter(entry => entry.id !== id);

    localStorage.setItem("moods", JSON.stringify(moods));

    displayHistory();
}

function toggleTheme() {

    document.body.classList.toggle("dark");

    const button = document.getElementById("themeBtn");

    const isDark = document.body.classList.contains("dark");

    button.innerText = isDark ? "☀️" : "🌙";

    localStorage.setItem("darkMode", isDark);
}

// Load saved theme and mood history

window.onload = function() {

    const darkMode = localStorage.getItem("darkMode") === "true";

    if (darkMode) {
        document.body.classList.add("dark");
        document.getElementById("themeBtn").innerText = "☀️";
    }

    displayHistory();
};
