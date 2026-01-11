import pandas as pd
from sklearn.linear_model import LinearRegression

data = pd.read_csv("data/sample_crime_data.csv")
X = data[["hour"]]
y = data["crime_rate"]

model = LinearRegression().fit(X, y)
print("Model Trained")
