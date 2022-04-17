# import numpy as np
# import pandas 
# from pymongo import MongoClient

# series= pandas.Series(["this", "is", "a", "python", "list"])
# for num, item in enumerate(series):
#     print(num, "--", item)

# mongo_client= MongoClient("mongodb+srv://chloejepson:chloeclover@cluster0.70eut.mongodb.net/test")

# db= mongo_client.pandas_database
# col= db.pandas_collection
# #API call to monodb collection
# mongo_docs= col.find()


# from flask import Flask, request
# import json 
   
# # Setup flask server
# app = Flask(__name__) 
  
# # Setup url route which will calculate
# # total sum of array.
# @app.route('/arraysum', methods = ['POST']) 
# def sum_of_array(): 
#     data = request.get_json() 
#     print(data)
  
#     # Data variable contains the 
#     # data from the node server
#     ls = data['array'] 
#     result = sum(ls) # calculate the sum
  
#     # Return data in json format 
#     return json.dumps({"result":result})
   
# if __name__ == "__main__": 
#     app.run(port=3000)

# compute_input.py

# import sys, json, numpy as np

# #Read data from stdin
# def read_in():
#     lines = sys.stdin.readlines()
#     #Since our input would only be having one line, parse our JSON data from that
#     return json.loads(lines[0])

# def main():
#     #get our data as an array from read_in()
#     lines = read_in()

#     #create a numpy array
#     np_lines = np.array(lines)

#     #use numpys sum method to find sum of all elements in the array
#     lines_sum = np.sum(np_lines)

#     #return the sum to the output stream
#     print(lines_sum)


# #start process
# if __name__ == '__main__':
#     main()
import sys
import json
import requests
import random
from pymongo import MongoClient
import pymongo

long= str(random.randint(1, 75))
lat= str(random.randint(1, 75))

url= "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=7f13b1298f12b92304dc536e94ab2e9e"
#url= "https://api.openweathermap.org/data/2.5/weather?lat=32&lon=75&appid=7f13b1298f12b92304dc536e94ab2e9e"
#7f13b1298f12b92304dc536e94ab2e9e
r= requests.get(url)
data= r.json()
resp= {
    "Response": 200,
    "Message": "Hello from python file",
    "Data Kind":"Weather",
    "Data": data
}
print(json.dumps(resp))
sys.stdout.flush()

# url2= "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
# r2= requests.get(url2)
# data2= r2.json()
# resp2= {
#     "Response": 200,
#     "Message": "Hello from python file",
#     "Data Kind":"Country data",
#     "Data": data2
# }

# print(json.dumps(resp2))

# CONNECTION_STRING= "mongodb+srv://chloejepson:chloeclover@cluster0.70eut.mongodb.net/test"
# from pymongo import MongoClient
# try:
#     conn= MongoClient(CONNECTION_STRING)
#     print("connected w python")
# except:
#     print("could not connect with python")

# db= conn.lab6db
# collection= db.newapi



