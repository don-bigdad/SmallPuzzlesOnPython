#Пользователь должен ввести 4-значное число.Скрипт должен сравнить 1 - 3 и 2-4 числа,выдать значения true если они одинаковы
x=int(input("введите 4-значное число :"))
x1=x//1000
x2=x//100%10
x3=x//10%10
x4=x%10
print(x1,x2,x3,x4)
print(x1==x3 and x1==x3)