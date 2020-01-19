from flask import Flask, render_template
from pymongo import MongoClient
from passwords import *
from twitter import *

client = MongoClient("mongodb+srv://zolamb:"+ MONGODB_PASSWORD +"@scfire-6siv5.gcp.mongodb.net/test?retryWrites=true&w=majority")
db = client.SCFire

app = Flask(__name__)

@app.route('/check_new_tweet')
def check_new_tweet():
    t = Twitter(auth=OAuth(ACCESS_TOKEN, ACCESS_TOKEN_SECRET, API_KEY, API_KEY_SECRET))
    recent = t.statuses.home_timeline()
    
    find_result = db.fireData.find({"id" : recent[1]['id_str']})

    
    return recent[1]['id_str']
    

@app.route('/')
def home():
    return "home"


if __name__ == '__main__':
    app.run(host="127.0.0.1", port=8080, debug=True)
