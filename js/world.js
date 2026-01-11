const statusDiv = document.getElementById("status");
const countries = ["IN", "US", "UK", "EU"];

// ⚠️ GitHub Pages cannot run backend
// This is DEMO MODE for online deployment

function updateDashboard() {
    statusDiv.innerHTML = "";

    countries.forEach(country => {
        const p = document.createElement("p");
        p.innerText = `${country}: 🚨 SOS SYSTEM READY`;
        statusDiv.appendChild(p);
    });
}

updateDashboard();
