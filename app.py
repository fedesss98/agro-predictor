"""
Createdd by Federico Amato
2023 - 06 - 06

Python Flask Web Application to use our trained ML model.
Our ML model was trained to predict Actual Evapotranspiration ETa
from different agro-meteorological variables.

Godd example to make an API:
https://www.toptal.com/python/python-machine-learning-flask-example

"""
from flask import Flask, render_template, request
from utility import retrieve_data, choose_model, scale_data
from sklearn.ensemble import RandomForestRegressor

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return render_template('index.html')


@app.route('/models')
def models():
    return render_template('models.html')


@app.route('/predict', methods=['GET', 'POST'])
def form():
    if request.method == 'POST':
        # Get data from form submission
        data = retrieve_data(request.form.to_dict())
        # Scale data
        data = scale_data(data, 'in')
        # Make prediction with machine learning model
        model = choose_model(data)
        prediction = model.predict(data)
        # Rescale data
        prediction = scale_data(prediction, 'out')

        # Render template with prediction
        return render_template('form.html',)  # pass as argument: prediction=prediction
    else:
        # Render template without prediction
        return render_template('form.html')


if __name__ == '__main__':
    app.run(debug=True)
