console.log("Hey bigmoney");
let button = document.querySelector("#myButton");

button.addEventListener("click", function() {
    console.log("clicked");
})

let roles = document.querySelectorAll(".role");

/* Make selected role persist into starting a game */
for (let role of roles) {
    role.addEventListener("click", function() {
        for (let selectedRole of roles) {
            selectedRole.classList.remove("selected");
        }
        role.classList.add("selected");
    })
}