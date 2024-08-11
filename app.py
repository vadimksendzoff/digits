from flask import Flask, request, jsonify, render_template
import psycopg2


templ_folder = '/Users/vadimus/work/courses/digits_site/back_side'

app = Flask(__name__)



@app.route('/')
def hello_world():
    return render_template('index.html')