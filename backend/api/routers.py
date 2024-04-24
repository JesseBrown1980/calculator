from flask import Blueprint, request, jsonify
from controllers.CalcController import calcMulti, calcExp
routers = Blueprint('routers', __name__)

@routers.route('/getMulti', methods=["GET", "POST"])
def getMulti():
    """
    Caculate n * 2
    """
    try:
        value = request.args.get("value")
        result = calcMulti(value)
        if value:
            return jsonify({
                'status': 'true',
                'result' : result
            })
        else:
            return jsonify({
                'status': 'false'
            })
    except Exception as e:
        print(e)
        return jsonify({
                'status': 'error'
            }), 404

    

@routers.route('/getExp', methods=["GET", "POST"])
def getExp():
    """
    Caculate (n * 2)^2
    """
    try:
        value = request.args.get("value")
        result = calcExp(value)
        if value:
            return jsonify({
                'status': 'true',
                'result' : result
            })
        else:
            return jsonify({
                'status': 'false'
            })
    except Exception as e:
        print(e)
        return jsonify({
                'status': 'error'
            }), 
