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
if sum(f[0:4]) == sum(f[4:]):
        print("You ticket is lucky")
else:
    print("you have a regular ticket")
#Если билет имеет больше 6-ти цифр
f=list(map(int,str(input("enter your ticket"))))
h=len(f)//2
if sum(f[0:h])==sum(f[h:]):
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
# номер месяца (от 1 до 12), и возвращающую время года, которому этот месяц принадлежит (зима, весна, лето или осень).
season = int(input("Enter a season "))
if season <= 2 and season == 12:
    print("winter")
elif season <= 6:
    print("spring")
elif season <= 9:
    print("autumn")
#В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
a=int(input("enter a digit "))
if a<=15: #четверть я считаю из декартовой системы координат
    print("1 четверть")
elif a<=30:
    print("4я четверть")
elif a<=45:
    print("3я четверть")
elif a<=60:
    print("4я четверть")
else:
    print("digit is more than 60")
