# Turtle-Command

# Problem statement:
Turtle is on a N * N grid, with N obstacles. The turtle can only move F orward one position
and can turn L eft or R ight. The grid has 4 directions N, E, W, S

Assuming that the initial position of turtle is 1, 1 (bottom left corner of the grid facing North) and
the grid has random obstacles in a few of its cells, given the movement instructions, find the
final position of turtle and printing the grid state will be an added plus. When there is an
obstacle, movement is not possible.

## Input:
FFFRRFLF

## Output:
2,3 E

# Design
* Language chosen - Javascript
* Thought process:
  * On functional requirement: 
    * randomize function (n) for choosing n x n square grid
    * Create directions array and have a circular pointer implemented to navigate through direction
    * Create a coordinate class (x,y and direction of movement) and instantiate a 'turtle' with move functionality :
  * On Non-functional requirement (If time permits):
    * Prioritize on writing unit-testable code.
    * Angularize the code (with bootstrap grid for better visualization).
    * Host it on heroku.
    * Optional: write a Node/ Express and Mongo for storing the history of inputs and outputs.
   * Future enhancements identified:
      * TBD
