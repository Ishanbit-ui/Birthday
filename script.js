
document.addEventListener("DOMContentLoaded", () => {
    const soumadeepBtn = document.getElementById("soumadeepBtn");
    const jungkookBtn = document.getElementById("jungkookBtn");
    const congratsText = document.getElementById("congratsText");
    const cards = document.querySelectorAll(".card");

    // Website starts locked
    document.body.classList.remove("cards-unlocked");

    // Prevent opening sections while locked
    cards.forEach((card) => {
        card.addEventListener("click", (event) => {
            if (!document.body.classList.contains("cards-unlocked")) {
                event.preventDefault();
                event.stopPropagation();
                return;
            }

            const page = card.dataset.page;

            if (page) {
                window.location.href = page;
            }
        });
    });

    // Unlock when THE GREAT SOUMADEEP is clicked
    soumadeepBtn.addEventListener("click", () => {
        if (document.body.classList.contains("cards-unlocked")) {
            return;
        }

        // Unlock the cards and remove their crosses
        document.body.classList.add("cards-unlocked");

        // Show the message below the buttons
        congratsText.textContent = "GOOD GIRL ❤️";
        congratsText.classList.add("show");
    });

    // JUNGKOOK does not unlock the website
    jungkookBtn.addEventListener("click", (event) => {
        if (!document.body.classList.contains("cards-unlocked")) {
            event.preventDefault();
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("birthdayMusic");
    const musicToggle = document.getElementById("musicToggle");

    if (!music || !musicToggle) return;

    // Start music automatically when the browser permits it.
    music.volume = 0.5;

    music.play().then(() => {
        musicToggle.textContent = "🔊";
        musicToggle.title = "Turn music off";
        musicToggle.setAttribute("aria-label", "Turn music off");
    }).catch(() => {
        // Autoplay may be blocked by the browser.
        musicToggle.textContent = "🔇";
        musicToggle.title = "Play music";
        musicToggle.setAttribute("aria-label", "Play music");
    });

    // Toggle music on and off.
    musicToggle.addEventListener("click", async () => {
        if (music.paused) {
            try {
                await music.play();
                musicToggle.textContent = "🔊";
                musicToggle.title = "Turn music off";
                musicToggle.setAttribute("aria-label", "Turn music off");
            } catch (error) {
                console.error("Music playback failed:", error);
            }
        } else {
            music.pause();
            musicToggle.textContent = "🔇";
            musicToggle.title = "Turn music on";
            musicToggle.setAttribute("aria-label", "Turn music on");
        }
    });
});
