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

# -*-*-*-*-*-*-*-*-*-*-*
# Optimal Basic solution
# -*-*-*-*-*-*-*-*-*-*-*

for i in range(1, 101, 1):
# and check for divisibility (Remainder of a division using the modulo operator)
    buf = ""
    if i % 3 == 0:
        buf = buf + "Fizz"
    if i % 5 == 0:
        buf = buf + "Buzz"
    if len(buf) == 0: # If the length of the buffer is 0, we know
                      # it isn't divisible by 3 and 5. Then we just add the integer
                      # to the buffer.
        buf = buf + str(i)
    print(buf)
