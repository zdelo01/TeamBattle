console.log("Hey bigmoney");
let button = document.querySelector("#myButton");
let roles = document.querySelectorAll(".role");

// Handle clicking a role
for (let role of roles) {
    role.addEventListener("click", function() {
        for (let r of roles) {
            r.classList.remove("selected");
        }
        role.classList.add("selected");

        // Save using the key "selectedRole"
        let roleName = role.querySelector("h2").innerText;
        localStorage.setItem("selectedRole", roleName);
    });
}

// Handle the "Lock In" button
button.addEventListener("click", function() {
    let selected = document.querySelector(".role.selected");

    if (selected) {
        let roleName = selected.querySelector("h2").innerText;

        // Hide the selection screen
        document.querySelector("#selection-screen").style.display = "none";

        // Show game screen
        const gameScreen = document.querySelector("#game-screen");
        gameScreen.style.display = "block";

        // Update the message
        const status = document.querySelector("#status-message");
        status.innerText = "Prepare for battle as: " + roleName;

        // Dynamic color based off role
        if (roleName === "Attack") status.style.color = "crimson";
        if (roleName === "Tank") status.style.color = "dodgerblue";
        if (roleName === "Support") status.style.color = "lime";
    } else {
        alert("Please pick a role first!");
    }
});

// Load the selection when the page opens
let saved = localStorage.getItem("selectedRole"); // Match the key used above

if (saved) {
    for (let role of roles) {
        if (role.querySelector("h2").innerText === saved) {
            role.classList.add("selected");
        }
    }
}