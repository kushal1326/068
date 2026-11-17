num = int(input("Enter your marks: "))
for i in range(1, 21):
    print(num, "x", i, "=", num * i)

    num = "i"
    for i in range(1,21):
        print(i)
   
    total = 0

    for i in range(1, 11):
        total = total + i

        print("sum=", total)   
        num = 0

        for i in range(1,51):
            if i % 2 == 0:
                print(1, end=" ")
                num = 1
                
