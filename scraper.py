from twitter import *

token = ""
secret_token = ""

consumer_key = ""
consumer_secret_key = ""

fire_twitter_handle = "FireDispatchSC"

t = Twitter(
        auth=OAuth(token, secret_token, consumer_key, consumer_secret_key))

#fire = t.user.lookup(screen_name=fire_twitter_handle, _timeout=1)
timeline = t.statuses.home_timeline()


for tweet in timeline:
    text = (tweet['text'])
    if text.split()[0] == "FIRE,":
        print(text)



