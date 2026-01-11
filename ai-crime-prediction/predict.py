def predict_risk(hour):
    if hour >= 22 or hour <= 3:
        return "HIGH RISK"
    return "LOW RISK"
