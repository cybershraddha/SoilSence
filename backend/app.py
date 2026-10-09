import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(_name_)

# CORS - Allow your GitHub Pages domain
CORS(app, resources={
    r"/*": {
        "origins": ["https://cybershraddha.github.io", "http://localhost:*"],
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

# Load model with proper path
BASE_DIR = os.path.dirname(os.path.abspath(_file_))
MODEL_PATH = os.path.join(BASE_DIR, "soil_model.pkl")

try:
    model = joblib.load(MODEL_PATH)
    print("✅ Model loaded successfully!")
except Exception as e:
    print(f"❌ Error loading model: {e}")
    raise

FEATURES = [
    "sand_pct", "silt_pct", "clay_pct", "moisture_pct",
    "organic_matter_pct", "nitrogen_mg_kg", "phosphorus_mg_kg",
    "potassium_mg_kg", "ph"
]

@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "SoilSense ML API is running!", "status": "success"})

@app.route("/predict", methods=["POST", "OPTIONS"])
def predict():
    if request.method == "OPTIONS":
        return jsonify({"message": "CORS preflight successful"}), 200

    data = request.get_json(silent=True)

    if not data:
        return jsonify({"error": "Invalid JSON data"}), 400

    try:
        values = {feature: float(data[feature]) for feature in FEATURES}
        sample = pd.DataFrame([values], columns=FEATURES)
        prediction = model.predict(sample)[0]

        return jsonify({
            "status": "success",
            "predicted_soil_type": str(prediction)
        })
    except KeyError as e:
        return jsonify({"error": f"Missing feature: {str(e)}"}), 400
    except (TypeError, ValueError):
        return jsonify({"error": "All values must be numbers"}), 400

if _name_ == "_main_":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
