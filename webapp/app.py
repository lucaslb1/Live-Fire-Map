from flask import Flask, render_template
from setup_database import get_fires

app = Flask(__name__)


@app.route('/')
def home():
    return get_fires()


if __name__ == '__main__':
    app.run(debug=True)
