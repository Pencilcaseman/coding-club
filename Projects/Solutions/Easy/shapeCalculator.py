"""

Shape Area and Volume Calculator

Write a program which allows the user to enter the name of
a shape and then prints the area/volume of the shape. If the
shape entered was not valid, the program should output this
and terminate.

For example, the input for a square should be:

What shape would you like? >>> square
What is the side-length of the square? >>> 5
Area: 25.0

You should support the following shapes (you may need to
research the equations for the different shapes)

 - Square (area)
 - Rectangle (area)
 - Circle (area)
 - Trapezium (area)
 - Cube (volume)
 - Cuboid (volume)
 - Sphere (volume)

"""

import math # Provides pi, which is needed for the circle/sphere calculation

# Function for the area of a square
def squareArea(sideLength):
	return sideLength * sideLength

# Function for the area of a rectangle
def rectangleArea(length1, length2):
	return length1 * length2

# Function for the area of a circle
def circleArea(radius):
	return math.pi * (radius * radius)

# Function for the area of a square
def trapeziumArea(length1, length2, height):
	return (length1 + length2) * 0.5 * height

# Function for the volume of a cube
def cubeVolume(sideLength):
	return sideLength * sideLength * sideLength

# Function for the volume of a cuboid
def cuboidVolume(length1, length2, length3):
	return length1 * length2 * length3

# Function for the volume of a sphere
def sphereVolume(radius):
	return (4 / 3) * math.pi * (radius * radius * radius)

shape = input("What shape would you like? >>> ").lower()

# Check for the different shapes and run the corresponding function
if shape == "square":
	sideLength = float(input("What is the side length of the square? >>> "))
	print("Area:", squareArea(sideLength))
elif shape == "rectangle":
	length1 = float(input("What is the width of the rectangle? >>> "))
	length2 = float(input("What is the height of the rectangle? >>> "))
	print("Area:", rectangleArea(length1, length2))
elif shape == "circle":
	radius = float(input("What is the radius of the circle? >>> "))
	print("Area:", circleArea(radius))
elif shape == "trapezium":
	length1 = float(input("What is the first length of the trapezium? >>> "))
	length2 = float(input("What is the second length of the trapezium? >>> "))
	height = float(input("What is the height of the trapezium? >>> "))
	print("Area:", circleArea(length1, length2, height))
elif shape == "cube":
	sideLength = float(input("What is the side length of the cube? >>> "))
	print("Volume:", cubeVolume(sideLength))
elif shape == "cuboid":
	length = float(input("What is the length of the cuboid? >>> "))
	width = float(input("What is the height of the cuboid? >>> "))
	height = float(input("What is the depth of the cuboid? >>> "))
	print("Volume:", cuboidVolume(length, width, height))
elif shape == "sphere":
	radius = float(input("What is the radius of the sphere? >>> "))
	print("Volume:", sphereVolume(radius))
else:
	print("The shape you entered was not valid!")
