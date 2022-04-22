
number=int(input())
print("even" if number%2==0 else "odd")
some=input()
some=input()
print("Meow" if some=="cat" else "woof" if some=="dog" else "неизвестный покемон")
number=input()
print(f"number digit is {len(number)}")
print("negative number" if number[0]=="-" else "positive number")
first_value = 1
second_value = 1
for i in range(101):
    first_value, second_value = second_value, first_value + second_value
    print(second_value)
    if second_value > 100:
        break
n = "hello world"
print(n.replace("o", "a").replace("l", "e"))
s = "Ham is tasty"
for index in range(len(s)):
    char = s[index]
    if (index + 1) % 2 != 0:
        s = s.replace(char, "_")
    elif (index + 1) % 2 == 0 and char == "a":
        s = s.replace(char, "b", 1)
print(s)

a=[2,4,65,32,2,6,0,-1,3]
x=[elem for elem in a if elem<5]
print(x)
n="aabbaa"
print("Палиндром") if n[:len(n)//2]==n[len(n)//2:][::-1] else print("просто строка")
d = {"a":3, "b":0, "c":4, "d":-3}
print(max(d.values()))
a = {"a":3, "b": "hello", "c":4, "d":-3}
b={}
{b.update({key:value}) for key,value in a.items() if value!=str(value)}
print(max(b.values()))
A= {3,5,11,7,4,-3}
B = {11, 5, 8,1, 10, 7}
print(A.difference(B))
print(B.intersection(A))
a = "a14b6fh"
print(set(a))
no_copy_dict={}
for elem in a:
    no_copy_dict[elem]=a.count(elem)
print(no_copy_dict)
def int_value(a,b):
    x=a+b if type(a)==int and type(b)==int else -1
    return x if x<0 else x
print(int_value(-7,4))
def NOD_of_value(x,y):
    NOD=0
    for element in range(max(x,y),0,-1):
        if x%element==0 and y%element==0:
            NOD=element
            return NOD
    return "NO NOD for this two numbers"


def two_number(a, b):
    try:
        return a / b
    except:
        return "делить на ноль нельзя"


print(two_number(1, 3))
x = [1, 2, 3, 4, 6, 7, 8, 9]


def index(number):
    try:
        return x[number]
    except IndexError:
        return "Такого индекса в спике нет"
    except TypeError:
        return "индекс имеет целосисленое значение"


print(index("фів"))

