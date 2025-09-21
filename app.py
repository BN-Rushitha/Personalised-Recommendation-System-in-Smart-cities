from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/choice')
def choice():
    return render_template("choice.html")

@app.route('/login')
def login():
    return render_template("login.html")

@app.route('/mood')
def mood():
    return render_template("mood.html")

@app.route('/restaurants')
def restaurants():
    return render_template("restaurants.html")

@app.route('/spots')
def spots():
    return render_template("spots.html")

if __name__ == "__main__":
    app.run(debug=True)
