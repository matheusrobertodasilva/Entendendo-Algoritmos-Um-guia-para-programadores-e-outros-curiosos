def conta(lista):
    if lista == []:
        return 0
    return 1 + conta(lista[1:])