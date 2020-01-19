from flask import Flask, render_template, jsonify
from pymongo import *
from passwords import *
from twitter import *
import datetime

def fireResult(tweet):
    if("FIRE," in tweet["text"]):
        return True
    else:
        return False

def parseTweet(tweet):
    id_str = tweet["id_str"]
    text = tweet["text"]
    arr = text.split(",")
    arr.pop(0)
    arr2 = ",".join(arr)
    arr3 = arr2.split(" (")
    address = arr3[0][1:]
    dt = arr3[1].split(" )")[0]
    actual_date = datetime.datetime.strptime(dt, "%m/%d/%Y %I:%M:%S %p")
    actual_date_str = actual_date.strftime("%m/%d/%Y %H:%M:%S")
    ts = actual_date.timestamp()

    return({"id": id_str, "unixtime": ts, "address": address, "timestring": actual_date_str})

app = Flask(__name__)

@app.route('/view_endpoint', methods=['GET'])
def view_endpoint():

    client = MongoClient("mongodb+srv://lucas:pass123@scfire-6siv5.gcp.mongodb.net/test?retryWrites=true&w=majority")
    db = client.SCFire

    collection = db.fireData
    cursor = collection.find({})
    json_dict = dict()
    for i, document in enumerate(cursor):
        json_dict[document['id']] = {"unixtime": document["unixtime"], "timestring":document["timestring"], "address":document["address"]}
    response = jsonify(json_dict)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/check_new_tweet')
def check_new_tweet():
    client = MongoClient("mongodb+srv://zolamb:Cloud1755##@scfire-6siv5.gcp.mongodb.net/test?retryWrites=true&w=majority")
    print(client)
    db = client.SCFire
    t = Twitter(auth=OAuth(ACCESS_TOKEN, ACCESS_TOKEN_SECRET, API_KEY, API_KEY_SECRET))
    recent = t.statuses.home_timeline()
    for i in range(20):
        result = db.fireData.find({"id" : recent[i]['id_str']}).count()
        # If it doesn't exist in the database
        if(result == 0):
            # If the tweet is fire
            if(fireResult(recent[i])):
                tweet = parseTweet(recent[i])
                db.fireData.insert_one(tweet)
        else:
            return "Done updating"
    return "No new tweets"

@app.route('/')
def home():
    return "home"



if __name__ == '__main__':
    app.run(host="127.0.0.1", port=8080, debug=True)
