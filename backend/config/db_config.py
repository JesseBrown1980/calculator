import mongoengine
import os
from dotenv import load_dotenv
load_dotenv()
DB_HOST = os.getenv('DB_HOST')
DB_NAME = os.getenv('DB_NAME')
alias = 'default'
data = dict(
    host=DB_HOST,
    port=27017,
    ssl=False)

def global_init():
    mongoengine.register_connection(alias=alias, name=DB_NAME, **data)