# Выведите все точные квадраты натуральных чисел, не превосходящие данного числа N.
i = 1
N = int(input())
while N > i ** 2:
    print(i)
    i = i + 1
# первый медведь весит меньше чем второй,но каждый год его вес утраивается,в то время как второго удваивается
# через столько лет 1ый медведь будет весить строго больше второго
a = int(input())
b = int(input())
years = 0
while a < b:
    a *= 3
    b *= 2
    years += 1
print("первый медведь будет весить больше первого через ", years, "лет")
# Напишите программу,которая при помощи цикла while сделает обратный отсчет
# от 15 до 0 (включительно) и затем выведет "Поехали!" в самом конце.
start = 15
while start >= 0:
    print(start)
    start -= 1
print("поехали")
# Вывести на экран циклом пять строк из нулей, причем каждая строка должна быть пронумерована
str = 1
while str < 6:
    print(str, 0)
    str += 1
# Вывести на экран все чётные значения в диапазоне от 1 до 497;
i = 0
count = 0
while i < 497:
    i += 2
    print(i)
    count += 1
print("в диапазоне от1 до 497", count, "четных чисел")
# Перемножить все не чётные значения в диапазоне от 0 до 99;
i = 1
j = 1
while i <= 99:
    print(i)
    j *= i
    i += 2
print(j)
# Записать в список все числа в диапазоне от 54 до 9184 кратные 5;
h = 54
list = []
while h <= 9184:
    h += 1
    if h % 5 == 0:
        list.append(h)
print(list)
# Найти Наибольший общий делитель двух чисел которые вводяться с клавиатуры
a = int(input())
b = int(input())
x = a * b
while a != b:
    if a > b:
        a = a - b
    else:
        b = b - a
print(a, b)
# Найти Наименьшее общее кратное этих чисел
N = x / a
print(N)
# Даны два целых числа A и В.
# Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
a = int(input())
b = int(input())
if a > b:
    while a > b:
        b += 1
        print(b)
else:
    while a < b:
        b -= 1
        print(b)
# Вводим переменную a. Выведите значение a!
n = int(input())
for i in range(1, n):
    n *= i
print(n)
# После каждой неудачной попытки должно сообщаться больше или меньше введенное пользователем число, чем то, что загадано.
# Если за 10 попыток число не отгадано, то вывести загаданное число.
import random
n=random.randint(0,100)
i=0
while 10>i:
    i+=1
    f=int(input())
    if f==n:
        print("верное число")
    elif n>f:
        print("число больше")
    elif n<f:
        print("число меньше")
else:
    print("вы потратили десять попыток")
print(n)
#Проверить корректность работы генератора псевдослучайных чисел языка
#с помощью оценки вероятности выпадения четных чисел на выборке не меньше 1000 случайных чисел.
import random
q=0
i=0
while 1000>i:
    N=random.randint(0,100)
    i+=1
    if N%2==0:
        q+=1
print((10*q)/100)
