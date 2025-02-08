let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let maleCat = document.getElementById("maleCat");

let yesSize = 20;
let noSize = 20;
let catDistance = 0;

noBtn.addEventListener("click", function() {
    yesSize += 10;
    noSize -= 2;
    
    yesBtn.style.fontSize = yesSize + "px";
    noBtn.style.fontSize = noSize + "px";

    maleCat.textContent = "😿"; // Sad Cat Emoji

    if (noSize <= 5) {
        noBtn.style.display = "none"; 
    }
});

yesBtn.addEventListener("click", function() {
    maleCat.textContent = "😻"; // Happy Cat Emoji
    catDistance += 50; // Move cat closer

    maleCat.style.transform = `translateX(${catDistance}px)`;

    // Show floating heart
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
        alert("Yay! I love you too ❤️😍!");
    }, 1000);
});
