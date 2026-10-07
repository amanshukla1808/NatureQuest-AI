/* =========================================
   NATUREQUEST AI
   Main JavaScript
========================================= */


/* USER DATA */

let xp = 0;
let level = 1;

let missionNumber = 1;

let timerInterval;

let timeLeft = 300;


/* MISSIONS */

const missions = [

    {
        text: "Find something outside that has a repeating natural pattern.",
        xp: 50
    },

    {
        text: "Find two different types of leaves and compare their shapes.",
        xp: 60
    },

    {
        text: "Find evidence that an animal has been here.",
        xp: 70
    },

    {
        text: "Find something in nature that is older than you.",
        xp: 80
    },

    {
        text: "Find three different textures in your surroundings.",
        xp: 60
    },

    {
        text: "Find something living that you normally ignore.",
        xp: 75
    },

    {
        text: "Find a natural object with a shape that reminds you of something else.",
        xp: 90
    }

];


/* START QUEST */

function startQuest() {

    const questSection =
        document.getElementById("questSection");

    questSection.classList.remove("hidden");

    questSection.scrollIntoView({
        behavior: "smooth"
    });

    generateMission();

}


/* GENERATE MISSION */

function generateMission() {

    const mission =
        missions[
            Math.floor(Math.random() * missions.length)
        ];

    document.getElementById("missionText")
        .innerText = mission.text;

    document.getElementById("missionTitle")
        .innerText =
        `🎯 Mission #${missionNumber}`;

    startTimer();

}


/* TIMER */

function startTimer() {

    clearInterval(timerInterval);

    timeLeft = 300;

    updateTimer();

    timerInterval = setInterval(() => {

        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            document.getElementById("timer")
                .innerText = "TIME'S UP";

        }

    }, 1000);

}


/* UPDATE TIMER */

function updateTimer() {

    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;

    document.getElementById("timer")
        .innerText =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

}


/* OPEN CAMERA */

function openCamera() {

    const uploadSection =
        document.getElementById("uploadSection");

    uploadSection.classList.remove("hidden");

    uploadSection.scrollIntoView({
        behavior: "smooth"
    });

}


/* PHOTO ANALYSIS */

function analyzePhoto(event) {

    const file =
        event.target.files[0];

    if (!file) return;


    const reader =
        new FileReader();


    reader.onload = function(e) {

        const image =
            document.createElement("img");

        image.src = e.target.result;


        const preview =
            document.getElementById("previewContainer");

        preview.innerHTML = "";

        preview.appendChild(image);


        simulateAIAnalysis();

    };


    reader.readAsDataURL(file);

}


/* =========================================
   AI ANALYSIS
========================================= */

function simulateAIAnalysis() {

    const result =
        document.getElementById("aiResult");

    result.classList.remove("hidden");

    result.innerHTML = `

        <h3>
            🤖 AI is analyzing your discovery...
        </h3>

        <p>
            Examining patterns, objects and
            environmental features...
        </p>

    `;


    setTimeout(() => {

        completeMission();

    }, 2200);

}


/* =========================================
   COMPLETE MISSION
========================================= */

function completeMission() {

    const earnedXP = 50;

    xp += earnedXP;

    updateXP();


    const result =
        document.getElementById("aiResult");


    result.innerHTML = `

        <h3>
            ✅ Mission Completed!
        </h3>

        <p>
            NatureQuest AI detected an interesting
            natural pattern in your discovery.
        </p>

        <p>
            <strong>
                +${earnedXP} XP
            </strong>
        </p>

        <br>

        <p>
            🌿 Great job. You actually went outside.
        </p>

        <button
            class="complete-btn"
            onclick="nextMission()"
        >
            NEXT MISSION →
        </button>

    `;

}


/* NEXT MISSION */

function nextMission() {

    missionNumber++;

    document.getElementById("uploadSection")
        .classList.add("hidden");

    document.getElementById("questSection")
        .scrollIntoView({
            behavior: "smooth"
        });

    generateMission();

}


/* UPDATE XP */

function updateXP() {

    document.getElementById("xp")
        .innerText = xp;


    level =
        Math.floor(xp / 100) + 1;


    document.getElementById("level")
        .innerText = level;


    const progress =
        xp % 100;


    document.getElementById("progress")
        .style.width =
        progress + "%";


    document.getElementById("progressText")
        .innerText =
        `${progress} / 100 XP to Level ${level + 1}`;

}


/* INITIAL STATE */

updateXP();