#верный пароль
password=input()
while password!="qwerty":
    print("try again")
    password=input()
print(password)
# Есть список
# Выведите все элементы, которые меньше 5.
a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
b=[]
for element in a:
    if element <5 :
        b.append(element)
print(b)
# Даны списки:
# a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
# b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].
# Нужно вернуть список, который состоит из элементов, общих для этих двух списков.
a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
c=[]
for item in a and b:
    if item in a and b:
        c.append(item)
print(c)
# Напишите программу для слияния нескольких словарей в один.
dict1={1:"one"}
dict2={2:"two"}
dict3={3:"three"}
a={}
for element in (dict1,dict2,dict3):
    a.update(element)
print(a)
# Найдите три ключа с самыми высокими значениями в словаре my_dict = {'a':500, 'b':5874, 'c': 560,'d':400, 'e':5874, 'f': 20}.
my_dict = {'a':500, 'b':5874, 'c': 560,'d':400, 'e':5874, 'f': 20}
x=[]
for element in my_dict:
    x.append(my_dict[element])
x.sort(reverse=True)
print(x[:3])
# or
my_dict = {'a':500, 'b':5874, 'c': 560,'d':400, 'e':5874, 'f': 20}
result=sorted(my_dict,key=my_dict.get, reverse=True)[:3]
print(result)
# Дан словарь с числовыми значениями. Необходимо их все перемножить и вывести на экран.
a = {'a': 3, 'b': 4, 'c': 5, 'd': 6}
n = 1
for element in a:
    x = a.get(element)
    n *= x
print(n)

