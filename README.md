# Turtle-Command [![Build Status](https://travis-ci.org/bparthu/turtle-command.svg?branch=master)](https://travis-ci.org/bparthu/turtle-command)

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

#Working prototype:
clone the repository and run below commands

```
npm install
bower install
npm test
```

# Design
* Language chosen - Javascript
* Thought process:
  * On functional requirement: 
    * ~~randomize function (n) for choosing n x n square grid~~
    * ~~Create directions array and have a circular pointer implemented to navigate through direction~~
    * ~~Create a coordinate class (x,y and direction of movement) and instantiate a 'turtle' with move functionality~~
    * ~~Scaffolded yeoman angular app (Tests passing and Heroku auto deploy on Git push to master).~~
    * code refactor.
    * Angularize the code (with bootstrap grid for better visualization).
  * On Non-functional requirement (If time permits):
    * ~~Prioritize on writing unit-testable code.~~
    * Refactor the unit test after "anglarizing" the app.
    * ~~Host it on heroku.~~
    * Optional: write a Node/ Express and Mongo for storing the history of inputs and outputs.
   * Future enhancements identified:
      * TBD
