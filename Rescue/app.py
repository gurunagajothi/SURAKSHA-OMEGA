from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route("/")
def home():
    return "🚨 Rescue SOS App Running"

@app.route("/sos/<country>")
def send_sos(country):
    try:
        response = requests.post(f"http://localhost:8080/sos/{country}")
        return jsonify({
            "status": "SOS sent",
            "backend_response": response.text
        })
    except Exception as e:
        return jsonify({
            "error": str(e)
        })

if __name__ == "__main__":
    app.run(port=5000, debug=True)
