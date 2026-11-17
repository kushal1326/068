marks=int(input("Enter your marks: "))
if marks>100 or marks<0:
    print("Invalid marks") 
else:
    if marks>=90:
        print("Grade: A")
    elif marks>=75 and marks<90:
        print("Grade: B")
    elif marks>=60 and marks<75:
        print("Grade: C")
    elif marks>=30 and marks<60:
        print("Grade: D")  
    else:
        print("Fail")