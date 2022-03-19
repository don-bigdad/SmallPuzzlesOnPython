# Простые задачки
# Пользователь вводит стоимость канцелярских товаров,программа должна расчитать стоимость покупки
# 1 x=карандаш,y=ручки,z=фломастеры
# значения нужно вводить через map(int,input().split())

x, y, z = map(int, input().split())
print("Стоимость покупки:", x + y + z, "\n ---------------------")

# Петя, Катя и Сережа делают из бумаги журавликов. Вместе они сделали S журавликов.
# Сколько журавликов сделал каждый ребенок, если известно, что Петя и Сережа сделали одинаковое количество журавликов,
# а Катя сделала в два раза больше журавликов, чем Петя и Сережа вместе? s-должно вводиться с клавиатуры
s = int(input("Введите кол-во журавликов которые сделали дети:"))
p = s / 6  # Петя
c = s / 6  # Сережа
k = s / 1.5  # Катя
print("Петя сделал журавликов:", p, "\n", "Сережа:", c, "\n", "Катя:", k)
# Во входных данных записаны три целых числа a, b и c, каждое в отдельной строке
# (1≤a,b,c≤10).Выходные данные.Выведите максимальное значение выражения, которое можно получить.
a = int(input("a"))
b = int(input("b"))
c = int(input("c"))
d = (a + b) * c
e = (a + c) * b
f = (b + c) * a
g = a * b * c
h = max(d, e, f, g)
print(h)
# Напишите программу, которая считывает значения двух целочисленных переменных a и b, затем меняет их значения местами
# (то есть в переменной a должно быть записано то, что раньше хранилось в b, а в переменной b записано то, что раньше хранилось в a).
# Затем выведите значения переменных.
a1 = int(input("a"))
b1 = int(input("b"))
a1 = a1 + b1
b2 = a1 - b1
a2 = a1 - b2
print(a2, b2)
# определить сколько банок  не прострерили два разбойника (каждый), данные вводяться с клавиатуры,на двоих 10 банок.
# Количество простреленых банок вводить с клавиатуры
robber_1 = int(input())
robber_2 = int(input())
w = 10 - robber_1
q = 10 - robber_2
print(w, q)
# программа запрашивает у пользователя кол-во лет, и выводит год,когда ему будет 77 лет.
years = int(input("Введите кол-во лет:"))
# years_0=years-years
# years_1=years_0+77
birthday_on = 2022 - years
years_77 = birthday_on + 77
print("Будет 77 в:", years_77, "году")
# Напишите программу, которая считывает целое число и выводит текст с упоминанием следующего и предыдущего для него
# чисел.
a3 = int(input("введите число:"))
b3 = a + 1
c3 = a - 1
print("Следующее число:", b, "Предыдущее число:", c)
# Напишите программу, которая выводит на экран рисунок котика.
#рисую треугольники
n=9
i=0
for j in range (n,0,-2):
    print(i*" "+j * "*")
    i+=1
k=1
n=10
u=n
for q in range (k,n):
    print("*"*k +" "*u)
    k+=1
# Написать функцию, которая заполняет массив случайными числами в диапазоне, указанном пользователем.
# Функция должна принимать два аргумента — начало диапазона и его конец, при этом ничего не возвращать.
# Вывод значений элементов массива должен происходить в основной ветке программы.
import random
# def massive(start,end):
#     x=[]
#     for i in range (10):
#         x.append(random.randint(start,end))
#     return x
# start=int(input())
# end=int(input())
# print(massive(start,end))
def massive(start,end):
    x=[]
    [x.append(random.randint(start,end)) for _ in range (10)]
    return x
start=10
end=20
print(massive(start,end))
# Написать функцию, которая определяет количество разрядов введенного целого числа.
# Написать функцию, которая определяет количество разрядов введенного целого числа.
def number_digit(n):
    count=0
    while n>0:
        n=n//10
        count+=1
    return count
n=int(input())
print("разряд числа",number_digit(n))
# Дан одномерный массив, состоящий из натуральных чисел.
# Выполнить сортировку данного массива по возрастанию суммы цифр чисел.
import random
from re import X

x = []
[x.append(random.randint(10, 400)) for _ in range(5)]
print(x)
y = []
for element in x:
    if len(str(element)) == 3:
        maxsum = 0
        element0 = element // 100
        element1 = element // 10 % 10
        element2 = element % 10
        sum = element0 + element1 + element2
        y.append(sum)
    else:
        element1 = element // 10
        element2 = element % 10
        sum = element1 + element2
        y.append(sum)
y.sort()
print(x, y)
# Дана квадратная матрица.
# Вычислить сумму элементов главной или побочной диагонали в зависимости от выбора пользователя.
# Сумма элементов любой диагонали
def sum_diagonal(n,x):
    sum=0
    x0=x[0]
    x1=x[1]
    x2=x[2]
    if n=="main":
        sum=x0[0]+x1[1]+x2[2]
        return sum
    else:
        sum=x0[2]+x1[1]+x2[0]
        return sum
n=input()
x=[[1,2,3],[4,5,6],[11,8,9]]
print(sum_diagonal(n,x))
# Изменить порядок слов в строке на обратный
n="каждый охотник желает знать, где сидит фазан".split()
n.reverse()
n =" ".join(n)
print(n)
# Напишите функцию to_dict(lst), которая принимает аргумент в виде списка и возвращает словарь, 
# в котором каждый элемент списка является и ключом и значением. 
# Предполагается, что элементы списка будут соответствовать правилам задания ключей в словарях.
def to_dict(list):
    dict={}
    for element in list:
        dict[element]=element
    return dict
list=[1,2,3,4,5]
print(to_dict(list))
# Иван решил создать самый большой словарь в мире. Для этого он придумал функцию biggest_dict(**kwargs), 
# которая принимает неограниченное количество параметров «ключ: значение» и обновляет созданный им словарь my_dict,
# состоящий всего из одного элемента «first_one» со значением «we can do it». Воссоздайте эту функцию.
def biggest_dict(**element):
    dict.update(**element)
    return dict
dict={"first_one":"we can do it"}
biggest_dict(k1=22, k2=31, k3=11, k4=91)
print(dict)
# напишите функцию которая сумирует числа(чисел может быть произвольное кол-во)
def summ(*element):
    sum=0
    for item in element:
        sum+=item
    return sum
print(summ(2,2,2,3,3))
# Дана строка в виде случайной последовательности чисел от 0 до 9.
# Требуется создать словарь, который в качестве ключей будет принимать данные числа (т. е. ключи будут типом int), 
# а в качестве значений – количество этих чисел в имеющейся последовательности.
# Для построения словаря создайте функцию count_it(sequence), принимающую строку из цифр. 
str=list(map(int,("1,2,3,4,5,1,2,3").split(",")))
def dict(str):
    dict={}
    list1=[]
    count=0
    for element in str:
        dict[element]=str.count(element)
    return dict
print(dict(str))
# Создайте словарь с количеством элементов не менее 5-ти. Поменяйте местами первый и последний элемент объекта. 
# Удалите второй элемент. Добавьте в конец ключ «new_key» со значением «new_value».
x={1:"one",2:"two",3:"three",4:"four",5:"five"}
def del_second(x):
    i=int(input())
    x.pop(i)
    return x
print(del_second(x))
def switch(x):
    x=[{5:x[5],2:x[2],3:x[3],4:x[4],1:x[1]} for i in range (1)]
    return x
print(switch(x))
x={1:"one",2:"two",3:"three",4:"four",5:"five"}
def new_key(x):
    x["new_key"]="new_value"
    return x
print(new_key(x))
# x={1:"one",2:"two",3:"three",4:"four",5:"five"}
# second=list(x.items())[1]
# print(second)
# Напишите функцию sum_range(start, end), которая суммирует все целые числа от значения start до величины end включительно. 
# Если пользователь задаст первое число большее чем второе, просто поменяйте их местами.
def sum_range(start,end):
    sum=0
    if start<end:
        for i in range(start,end+1):
            sum+=i
        return sum
    else:
        for i in range(end,start+1):
            sum+=i
        return sum
print(sum_range(12,10))
# Создайте функцию three_args(), которая принимает 1, 2 или 3 строго ключевых параметра. 
# В результате ее работы на печать в консоль выводятся значения переданных переменных, но только если они не равны None. 
# Получим, например, следующее сообщение: Переданы аргументы: var1 = 2, var3 = 10.
def three_args(*args):
    dict={}
    for i in range(*args):
        dict[f"var{i}"]=i
three_args(1,2,3)
print(three_args(1,2,3))
def format_duration(seconds):
    minute=seconds//60
    hour=seconds//3600
    days=seconds//86400
    year=seconds//31536000
    if seconds<60 and seconds!=1:
        return f'{seconds} seconds'
    elif seconds==1:
        return f'{seconds} second'
    elif minute>=1 and seconds<3600 :
        return f'{minute} minute and {seconds-(minute*60)} seconds'
    elif seconds>=3600 and seconds<86400:
        return f'{hour} hour, {(seconds-3600*hour)//60} minute and {seconds-(minute*60)} seconds' 
    elif seconds>=86400 and seconds<31536000:
        return f'{days} day {(seconds-86400*days)//3600} hours {(seconds-3600*hour)//60} minutes {seconds-(minute*60)} seconds'
    elif seconds>=31536000:
        return f'{year} years {(seconds-31536000*year)//21600} day {(seconds-86400*days)//3600} hours {(seconds-3600*hour)//60} minutes {seconds-(minute*60)} seconds'
print(format_duration(58))

