#задачи if else
#Даны два числа,вывести наибольшее
a,b=int(input()),int(input())
c=a*b
j=max(a,b)
print(j)
#another solution
if a>b:
    print(a)
else:
    print(b)
#Програма должна вывести 1 если первое чило больше,2-если больше второе
if a>b:
    print(1)
else:
    print(2)
#Правильный калькулятор
if a*b==c:
    print(c)
else:
    print("error")
#счастливый билет.проверить является ли шестизначный билет счастливым.Если получится не привязыватся к
# номеру билета выполнить код
f=list(map(int,str(input("enter your ticket(six-digit)"))))
if f[0:4] == f[4:]:
        print("You ticket is lucky")
else:
    print("you have a regular ticket")
#Если билет имеет больше 6-ти цифр
f=list(map(int,str(input("enter your ticket"))))
h=len(f)//2
print(f[0:h]==f[h:])
if f[0:h]==f[h:]:
    print("your ticket is lucky")
else:
    print("You have a regular ticket")
#Требуется определить: может ли ладья выполнить ход из клетки с координатами (X1,Y1)
#в клетку с координатами (X2,Y2) на стандартной шахматной доске?
X1=int(input())
Y1=int(input())
X2=int(input())
Y2=int(input())
if X1==X2 or Y1==Y2:
    print("the rook can walk")
else:
    print("move forbidden")
#Требуется определить: может ли слон выполнить ход из клетки с координатами (X1,Y1)
#в клетку с координатами (X2,Y2) на стандартной шахматной доске?
a=int(input())
b=int(input())
c=int(input())
d=int(input())
if abs(a-c)==abs(b-d):
    print("move allowed")
else:
    print("move forbitten")
