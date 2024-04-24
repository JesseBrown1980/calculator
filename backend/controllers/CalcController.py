from models.CalcModel import CalcModel
def calcMulti(n):

    number = int(n)
    result = number * 2
    model = CalcModel()
    model.number = number
    model.multi = result
    model.save()
    return result
def calcExp(n):
    number = int(n)
    result = (number * 2) ** 2
    model = CalcModel()
    model.number = number
    model.exp = result
    model.save()
    return result