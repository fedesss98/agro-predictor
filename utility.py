"""
Created by Federico Amato
2023 - 08 -06
Utility functions to manage data and models
"""
import pandas as pd
from joblib import load

m0 = ('ETo', 'U2', 'RHmin', 'RHmax', 'Tmin', 'Tmax', 'SWC', 'NDVI', 'NDWI', 'DOY',
      'I', 'P', 'EToC', 'IC', 'PC', 'LID', 'LPD', 'LWD')
m1 = ('Rs', 'U2', 'RHmin', 'RHmax', 'Tmin', 'Tmax', 'SWC', 'NDVI', 'NDWI', 'DOY')
m2 = ('Rs', 'U2', 'RHmax', 'Tmin', 'Tmax', 'SWC', 'NDVI', 'NDWI', 'DOY')
m3 = ('Rs', 'U2', 'RHmax', 'Tmax', 'SWC', 'NDVI', 'NDWI', 'DOY')
m4 = ('Rs', 'U2', 'RHmax', 'Tmax', 'SWC', 'NDWI', 'DOY')
m5 = ('Rs', 'U2', 'Tmax', 'SWC', 'NDWI', 'DOY')
m6 = ('Rs', 'U2', 'Tmax', 'SWC', 'DOY')
m7 = ('Rs', 'Tmax', 'SWC', 'DOY')
m8 = ('Rs', 'U2', 'RHmin', 'RHmax', 'Tmin', 'Tmax')
m9 = ('ETo', 'SWC', 'NDVI', 'NDWI', 'DOY')
m10 = ('ETo', 'NDVI', 'NDWI', 'DOY')
m11 = ('Rs', 'SWC', 'NDVI', 'NDWI', 'DOY')
m12 = ('Rs', 'NDVI', 'NDWI', 'DOY')
m13 = ('Rs', 'U2', 'RHmin', 'RHmax', 'Tmin', 'Tmax', 'SWC', 'NDVI', 'NDWI', 'DOY', 'I', 'P')


MODELS_FEATURES = {
    m1: 'RF_1',
    m2: 'RF_3',
    m3: 'RF_3',
    m4: 'RF_4',
    m8: 'RF_8',
    m9: 'RF_9',
    m12: 'RF_12',
    }


def retrieve_data(form):
    # Create a new dictionary with the column names and data
    data = {key: [float(value)] for key, value in form.items()}
    return pd.DataFrame(data)


def choose_model(data):
    """ Choose the model to use based on avaliable features """
    features = data.columns.tolist()
    # Use features to filter the correct model
    model_name = MODELS_FEATURES[tuple(features)]
    return load(f'models/{model_name}.joblib')


def scale_data(data, direction):
    """ Scale data to use in the model """
    scaler = load('models/scaler.joblib')
    if direction == 'in':
        data = scaler.transform(data)
    if direction == 'out':
        data = scaler.inverse_transform(data)
    return data
