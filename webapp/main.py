from flask import Flask, render_template
from pymongo import MongoClient
from passwords import *
from twitter import *

client = MongoClient("mongodb+srv://zolamb:"+ MONGODB_PASSWORD +"@scfire-6siv5.gcp.mongodb.net/test?retryWrites=true&w=majority")
db = client.SCFire

app = Flask(__name__)

@app.route('/vue_endpoint')
def vue_endpoint():
    print("here")

@app.route('/check_new_tweet')
def check_new_tweet():
    t = Twitter(auth=OAuth(ACCESS_TOKEN, ACCESS_TOKEN_SECRET, API_KEY, API_KEY_SECRET))
    recent = t.statuses.home_timeline()
    for i in range(20):
        if(db.fireData.find({"id" : recent[i]['id_str']}).count() == 0):
            print("------------------HERE-------------------2")
            print(recent[i]['id_str'])
            #db.fireData.insert_one(tweet)
        else:
            break

@app.route('/')
def home():
    return "home"


if __name__ == '__main__':
    app.run(host="127.0.0.1", port=8080, debug=True)
