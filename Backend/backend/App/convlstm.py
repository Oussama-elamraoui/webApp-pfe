from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Activation, Dropout, Flatten
# from keras.layers.recurrent import LSTM
from tensorflow.keras.layers import ConvLSTM2D, Conv2D, Dense, BatchNormalization
#from tensorflow.keras.layers import Dense, Conv1D, MaxPool2D, Flatten, Dropout, Conv2D, MaxPooling2D, TimeDistributed, LSTM, Activation
from tensorflow.keras.callbacks import EarlyStopping, TensorBoard
from tensorflow.keras.optimizers import Adam, SGD, Nadam
from time import time 
from livelossplot import PlotLossesKeras
from scipy.stats import gaussian_kde
# from keras.layers.advanced_activations import LeakyReLU, PReLU
# from keras.utils import multi_gpu_model
from tensorflow.python.client import device_lib
import tensorflow as tf
from tensorflow import keras
import numpy as np
import matplotlib.pyplot as plt
from sklearn.neighbors import KernelDensity
import os
import pandas as pd
def KDE( week_number):
    global ds
    path= os.path.join(os.path.dirname(__file__), 'outputwithweeks1.csv')
    path1= os.path.join(os.path.dirname(__file__), 'output.csv')
    london_data=pd.read_csv(path, sep=';' )
    print(london_data)
    tranche = london_data[london_data['tranche_horaire']==8]
    ds = tranche[tranche['week_number']==week_number]
    x = ds['X'].values
    y = ds['Y'].values
    kde = gaussian_kde(np.vstack([x, y]), bw_method=0.25)

    # Create a grid of points where we will evaluate the KDE
    xgrid = np.linspace(min(x), max(x), 100)
    ygrid = np.linspace(min(y), max(y), 100)
    Xgrid, Ygrid = np.meshgrid(xgrid, ygrid)

    # Evaluate the KDE on the grid
    Z = kde.evaluate(np.vstack([Xgrid.ravel(), Ygrid.ravel()]))

    # Reshape the result to fit the grid
    Z = Z.reshape(Xgrid.shape)

    return(Xgrid, Ygrid, Z)
def convlstmBody():
    window_size = 4
    input_shape = (None,4,100,100,1)
    densities= []
    for i in range(53):
        densities.append(KDE(i+1)[2])



    # Create input and target sequences for training
    density_matrix = np.expand_dims(densities, axis=(1))
    train_input = []    
    train_target = []
    for i in range(len(density_matrix) - window_size):
        train_input.append(density_matrix[i:i+window_size])
        train_target.append(density_matrix[i+window_size])

    # Convert lists to numpy arrays
    train_input = np.array(train_input)

    train_target = np.array(train_target)


    #some reshaping
    train_input = np.expand_dims(train_input, axis=-1)
    train_target = np.expand_dims(train_target, axis=-1)
    # print(np.shape(train_input),np.shape(train_target))

    train_input = np.squeeze(train_input, axis=2)

    train_target = np.squeeze(train_target, axis=1)

    print (np.shape(train_input), np.shape(train_target))
    # print(np.shape(train_input),np.shape(train_target))
    # Normalize your data if necessary
    # ......
    # Define the ConvLSTM model
    model2 = Sequential()
    model2.add(ConvLSTM2D(filters=64, kernel_size=(3, 3), input_shape=(window_size, 100, 100,1), padding='same', return_sequences=True))
    model2.add(BatchNormalization())
    model2.add(ConvLSTM2D(filters=32, kernel_size=(3, 3), padding='same', return_sequences=True))
    model2.add(BatchNormalization())
    model2.add(ConvLSTM2D(filters=1, kernel_size=(3, 3), padding='same', return_sequences=False))
    model2.add(BatchNormalization())
    model2.add(Conv2D(filters=1, kernel_size=(3, 3), activation='sigmoid', padding='same'))

    # Compile the model
    model2.compile(loss='mean_squared_error', optimizer='adam')
    model2.build(input_shape=input_shape)
    model2.fit(train_input, train_target, epochs=60, batch_size=1)
    ############# plot result ####
    ground_truth = densities[4]
    prediction = model2.predict(train_target)
    prediction_squeezed = np.squeeze(prediction, axis=(0, 3))
    print(prediction)
    print(prediction_squeezed)
    with open('./output.csv', 'w') as f:
        for row in prediction:
            f.write("%s\n" % str(row))