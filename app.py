from flask import (Flask, json, render_template, jsonify, request, redirect, url_for)
from pymongo import MongoClient
from dotenv import load_dotenv
import os

app = Flask(__name__)

# Load .env file
load_dotenv()

# Read environment variables
connection_string = os.getenv("DB_CONNECTION_STRING")
db_name = os.getenv("DB_NAME")
SECRET_KEY = os.getenv("SECRET_KEY")

# Set up MongoDB connection
client = MongoClient(connection_string)
db = client[db_name]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)