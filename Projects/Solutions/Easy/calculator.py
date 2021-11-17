"""

Simple Calculator

Write a program which:
 - Asks for an operation
	- addition
	- subtraction
	- multiplication
	- division
	- power
 - Asks the user for two numbers
	- These should be floats, not integers
 - Prints the result of the calculation

Extension:
 - Ensure the input is valid
 - Support sine, cosine, tangent, etc.
 - Check for an invalid operation and warn the user
	- E.g. division by zero
	- E.g. tan(90)
 - Allow the user to type "pi" as an input and process it correctly

"""

# Ask for the operation (make sure it's lower case)
operation = input("What operation would you like? >>> ").lower()

# Ask for the two inputs as floats
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

# Check for the different operations and print the result of the calculation
if operation in ["add", "addition"]:
	print(num1 + num2)
elif operation in ["sub", "subtract"]:
	print(num1 - num2)
elif operation in ["mul", "multiply"]:
	print(num1 * num2)
elif operation in ["div", "divide"]:
	print(num1 / num2)
