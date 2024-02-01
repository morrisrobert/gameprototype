/*
Building the snake game and learning how to develop the ideas to help
1. create the variables we will use
2. create the game board
3. create the snake
4. Make the snake move at least one direction
5. Make the snake change directions
6. draw food
7. Make food randomly generate
8. what happens when snake touches food? what happens after?
9. tell the program to save the scores
10. what happens when the game ends
11. how do we reset or start the game
 */

/*
Constructor - a special class that allows objects/functions to be initialized and called in the same space

The bulk of our JS will be located in a class. the class will hold a constructor where the main containers are created 
*/

class Game{
    constructor() {
        //the "this" keyword refers back to an object without having to type the name of the object

        //colors for the game
        this.boardBorder = "#000080",
        this.boardBg = "#e6e6fa",
        this.snakeColor = "#f45d76",
        this.snakeBorder = "#663399",

        //snake body
        //The snake body will be created using an array of objects of x and y coordinates. 
        this.snake = [
            {x: 200, y: 200},
            {x: 190, y: 200},
            {x: 180, y: 200},
            {x: 170, y: 200},
            {x: 160, y: 200}
        ],

        //grab the snakeBoard (the canvas) then tell the program how to draw in the cavas tag
        this.snakeBoard = document.getElementById("snakeBoard"),
        this.snakeBoardCtx = this.snakeBoard.getContext("2d")



        //end of constructor
    }

    createCanvas() {
        const snakeBoard = this.snakeBoard
        const snakeBoardCtx = this.snakeBoardCtx

        //apply color to the canvas(gameboard)
        snakeBoardCtx.fillstyle = this.boardBg
        snakeBoardCtx.strokeStyle = this.boardBorder
        //apply color to the snake
        snakeBoardCtx.fillRect(0, 0, snakeBoard.width, snakeBoard.height)
        snakeBoardCtx.strokeRect(0, 0, snakeBoard.width, snakeBoard.height)
        //this is the end of creating the canvas
    }

    //draw the snake
    drawSnake() {
        const snake = this.snake
        const snakeBoardCtx = this.snakeBoardCtx

        //use our array to loop through and paint the snake
        snake.forEach(snakePart => {
            snakeBoardCtx.fillstyle = this.snakeColor
            snakeBoardCtx.strokeStyle = this.snakeBoard
            snakeBoardCtx.fillRect(snakePart.x, snakePart.y, 10, 10)
            snakeBoardCtx.strokeRect(snakePart.x, snakePart.y, 10,10)
        })
        //allegedly the snake is done
    }

    //end of class
}

const snake = new Game()
//come back to this you may have done the element wrong
const startBtn = document.getElementById("startBtn")
    startBtn.addEventListener('click', ()=> {
        console.log("start button was clicked")

        snake.createCanvas()
        snake.drawSnake()

    })