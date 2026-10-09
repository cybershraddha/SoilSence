
from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

model = joblib.load("soil_model.pkl")

FEATURES = [
    "sand_pct",
    "silt_pct",
    "clay_pct",
    "moisture_pct",
    "organic_matter_pct",
    "nitrogen_mg_kg",
    "phosphorus_mg_kg",
    "potassium_mg_kg",
    "ph"
]

@app.route("/")
def home():
    return jsonify({
        "message": "SoilSense ML API is running!"
    })

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json(silent=True)

    if not isinstance(data, dict):
        return jsonify({"error": "Send soil values as JSON"}), 400

    try:
        values = {feature: float(data[feature]) for feature in FEATURES}
        sample = pd.DataFrame([values], columns=FEATURES)
        prediction = model.predict(sample)[0]

        return jsonify({
            "predicted_soil_type": str(prediction)
        })
    except (KeyError, TypeError, ValueError):
        return jsonify({
            "error": "Please provide all 9 features as numeric values"
        }), 400

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
