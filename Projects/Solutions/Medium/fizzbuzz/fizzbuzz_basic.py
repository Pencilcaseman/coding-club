# Written by Maximilian 'NervousNullPtr' Schleicher, 2022.
# https://github.com/nervousnullptr.

"""

Fizz Buzz

Task:

Write a program which loops through the numbers between 1 and 100 (inclusive) and
print each number. The number must not be printed if:
    - It is divisible by 3; Then it needs to print "Fizz",
    - It is divisible by 5; Then it needs to print "Buzz",
    - It is divisible by both 3 and 5; Then it needs to print "FizzBuzz".

"""
# -*-*-*-*-*-*-*-
# Basic solution
# -*-*-*-*-*-*-*-

# Loop through the numbers 1..=100
for i in range(1, 101, 1):
# and check for divisibility (Remainder of a division using the modulo operator)
    if i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    elif i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    else:
        print(i)
