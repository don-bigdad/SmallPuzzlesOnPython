#Выведите все точные квадраты натуральных чисел, не превосходящие данного числа N.
i=1
N=int(input())
while N>i**2:
    print(i,i**2)
    i=i+1
#первый медведь весит меньше чем второй,но каждый год его вес утраивается,в то время как второго удваивается
#через столько лет 1ый медведь будет весить строго больше второго
a=int(input())
b=int(input())
years=0
while a<b:
    a*=3
    b*=2
    years+=1
print("первый медведь будет весить больше первого через ",years,"лет")
#Напишите программу,которая при помощи цикла while сделает обратный отсчет
#от 15 до 0 (включительно) и затем выведет "Поехали!" в самом конце.
start=15
while start>=0:
    print(start)
    start-=1
print("поехали")
#Вывести на экран циклом пять строк из нулей, причем каждая строка должна быть пронумерована
str=1
while str<6:
    print(str,0)
    str+=1
#Вывести на экран все чётные значения в диапазоне от 1 до 497;
i=0
count=0
while i<497:
    i+=2
    print(i)
    count+=1
print("в диапазоне от1 до 497",count,"четных чисел")
#Перемножить все не чётные значения в диапазоне от 0 до 99;
i=1
j=1
while i<=99:
    print(i)
    j*=i
    i+=2
print(j)
#Записать в список все числа в диапазоне от 54 до 9184 кратные 5;
h=54
list=[]
while h<=9184:
    h+=1
    if h%5==0:
        list.append(h)
print(list)
#Найти Наибольший общий делитель двух чисел которые вводяться с клавиатуры
a=int(input())
b=int(input())
x=a*b
while a!=b:
    if a>b:
        a=a-b
    else:
        b=b-a
print(a,b)
#Найти Наименьшее общее кратное этих чисел
N=x/a
print(N)
