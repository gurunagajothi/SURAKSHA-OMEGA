// world.js - Live Dashboard Integration
const statusDiv = document.getElementById("status");

// Function to fetch SOS status from backend
async function fetchSOSStatus(country = "IN") {
  try {
    const response = await fetch(`http://localhost:8080/sos/${country}`, {
      method: "POST",
    });
    const text = await response.text();
    statusDiv.innerText = `🌍 Global SOS Status: ${text}`;
  } catch (error) {
    statusDiv.innerText = "⚠️ Backend not reachable!";
    console.error(error);
  }
}

// Update dashboard every 5 seconds
fetchSOSStatus(); // initial load
setInterval(() => fetchSOSStatus(), 5000);
