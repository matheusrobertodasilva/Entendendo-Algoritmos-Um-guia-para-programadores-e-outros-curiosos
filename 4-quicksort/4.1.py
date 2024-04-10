def soma(lista):
    if lista == []:
        return 0
    return lista[0] + soma(lista[1:])

lista = [2,4,6];
print(soma(lista));
