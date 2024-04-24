from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from api.routers import routers
from config import db_config
app = Flask(__name__)
CORS(app)
#register API
app.register_blueprint(routers)
#Mongo connect
db = db_config.global_init()
if __name__ == '__main__':
    app.run()