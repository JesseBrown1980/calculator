import mongoengine as db
class CalcModel(db.Document):
    number = db.FloatField(required=True)
    multi = db.FloatField(required=False)
    exp = db.FloatField(required=False)
    meta = {
        'db_alias': 'default', #database alias name
        'collection': 'calcs' #table name in database
    }