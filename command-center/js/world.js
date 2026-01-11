const statusDiv = document.getElementById("status");
const countries = ["IN", "US", "UK", "EU"];

// Fetch SOS status from backend
async function fetchSOS(country) {
    try {
        const response = await fetch(`http://localhost:8080/sos/${country}`, {
            method: "POST"
        });
        const text = await response.text();
        return `${country}: ${text}`;
    } catch {
        return `${country}: ⚠️ Backend not reachable!`;
    }
}

// Update dashboard every 5 seconds
async function updateDashboard() {
    const results = await Promise.all(countries.map(fetchSOS));
    statusDiv.innerHTML = "";
    results.forEach(r => {
        const p = document.createElement("p");
        p.innerText = r;
        statusDiv.appendChild(p);
    });
}

updateDashboard();
setInterval(updateDashboard, 5000);

