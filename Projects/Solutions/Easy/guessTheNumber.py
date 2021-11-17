"""

Random Number Guessing Game

Task:

Write a program which picks a random number between 1 and 100 and
asks the user to guess what it is. If the player guesses too high,
say "You guessed too high!", if they guess too low, say "You guessed
too low!". When the guess the number, it should say "Well done! You
guessed the number. It was ..." (where "..." is the correct number)

Extension:
 - Allow the player to set the range
 - Limit the number of guesses
 - Write an algorithm to guess the number in the fewest moves
   possible

"""

import random # provides randint, which we need to generate a random number

# Pick a random whole number
number = random.randint(1, 100)

guessedCorrectly = False

# Loop until the player gets the right answer
while not guessedCorrectly:
	# Get the player's guess
	# Note: "input" returns a string, so you need to convert it to an "int"
	#       before you can do comparisons on it (i.e. < or > or <= or >=)
	playerGuess = int(input("Enter a number: "))

	# Check if the player guessed too low, too high or got it right
	if playerGuess < number:
		print("You guessed too low!")
	elif playerGuess > number:
		print("You guessed too high!")
	else:
		print("Well done! You guessed the number. It was", number)
		
		# Make sure to stop the loop and finish the game
		guessedCorrectly = True
