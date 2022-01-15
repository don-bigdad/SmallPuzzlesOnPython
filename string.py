#Ввести два окремих рядки, які містять щонайменше по 4 слова. Виконати такі дії: 
#Визначити чи співпадають останні слова у двох рядків;
string_1=input("Введите строку 1:")
string_2=input("Введите строку 2:")
s1=string_1[-5:] #работает только если последнее слово имеет 5 букв
s2=string_2[-5:]
print(s1 == s2)
#another solution (method split)
r1=string_1.split()[-1]
r2=string_2.split()[-1]
print(r1==r2 ,"\n","---------------")
#Замінити у першому рядку всі пробіли на знак табуляції; 
print(string_1)
print(string_1.replace(" ","\t"))
#Замінити перші слова у рядках;
string_1=input("Введите строку 1:")
string_2=input("Введите строку 2:")
a=string_1.split()[0]
b=string_2.split()[0]
h=string_1.replace(string_1.split()[0],b)
n=string_2.replace(string_2.split()[0],a)
print(h,n)
