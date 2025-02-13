function logoutAdmin(){
    var adminPanel = document.getElementById("adminPanel");
    adminPanel.style.animation = "fadeOutScale 0.1s forwards";
    setTimeout(function() {
        adminPanel.style.display = "none";
    }, 100); // Match the duration of the animation
    console.log("Logged out");
}

function showLogin() {
    var adminLogin = document.getElementById("adminLogin");
    adminLogin.style.display = "block";
    adminLogin.style.animation = "fadeInScale 0.1s forwards";
}

function hideLogin() {
    var adminLogin = document.getElementById("adminLogin");
    adminLogin.style.animation = "fadeOutScale 0.1s forwards";
    setTimeout(function() {
        adminLogin.style.display = "none";
    }, 100); // Match the duration of the animation
}

function checkAdmin() {
    var password = document.getElementById("adminPassword").value;
    if (password === "101112" || password === "912" || password === "69420") {
        document.getElementById("adminLogin").style.display = "none"; // Hide login box
        var adminPanel = document.getElementById("adminPanel");
        adminPanel.style.display = "block"; // Show admin panel
        adminPanel.style.animation = "fadeInScale 0.1s forwards"; // Add animation
        setTimeout(function() {
            document.getElementById("adminTitle").style.animation = "rainbowColors 2s infinite";
        }, 100);
    } else {
        document.getElementById("errorMessage").innerText = "Incorrect password!";
    }
}



function sendToDiscord() {
    var message = document.getElementById("discordMessage").value;
    var webhookURL = "https://discord.com/api/webhooks/1338413983765364768/BYnfCEij_evwEEJRq1fRH7mRvHWisCA_2ANcI8bojjUZMX5-A8QdZ1Xft0cuDynMvUKn";

    if (message.trim() === "") {
        document.getElementById("webhookStatus").innerText = "Message cannot be empty!";
        return;
    }

    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: message })
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("webhookStatus").innerText = "Message sent!";
            document.getElementById("discordMessage").value = ""; // Clear input
        } else {
            document.getElementById("webhookStatus").innerText = "Failed to send message.";
        }
    })
    .catch(error => {
        document.getElementById("webhookStatus").innerText = "Error: " + error;
    });
}