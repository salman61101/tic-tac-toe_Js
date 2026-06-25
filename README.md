# Tic Tac Toe

A browser-based Tic Tac Toe game built with HTML, CSS, and JavaScript.

## Overview

This project focuses on applying JavaScript design patterns such as Factory Functions and the Module Pattern (IIFE) to create a maintainable and organized application.

Players can enter their names, take turns placing markers on the board, and play until a winner is determined or the game ends in a draw.

## Features

* Two-player gameplay
* Custom player names
* Dynamic game board rendering
* Win detection for all possible combinations
* Tie game detection
* Restart functionality
* Responsive user interface
* Modular JavaScript architecture

## Built With

* HTML5
* CSS3
* JavaScript (ES6)

## Concepts Practiced

* Factory Functions
* Module Pattern (IIFE)
* Closures
* DOM Manipulation
* Event Handling
* Array Methods
* Game Logic Design
* Separation of Concerns
* Git & GitHub Workflow

## Project Structure

```text
tic-tac-toe/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── .gitignore
```

## Game Logic

### Player Factory

Players are created using a factory function:

```javascript
function Player(name, marker) {
    return {
        name,
        marker
    };
}
```

### Gameboard Module

The game board is stored as an array inside a module:

```javascript
const Gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];
})();
```

### Game Controller

Responsible for:

* Managing turns
* Checking win conditions
* Detecting ties
* Restarting the game

### Display Controller

Responsible for:

* Rendering the board
* Updating game messages
* Handling user interaction

## Winning Conditions

The game checks all possible winning combinations:

* Horizontal rows
* Vertical columns
* Diagonal lines

If no winning combination exists and the board is full, the game is declared a draw.

## Installation

Clone the repository:

```bash
git clone https://github.com/salman61101/tic-tac-toe_Js.git
```

Navigate into the project folder:

```bash
cd tic-tac-toe
```

Open `index.html` in your browser.

## Future Improvements

* Single-player mode against AI
* Difficulty levels
* Score tracking
* Local storage support
* Animations and sound effects
* Dark mode
* Online multiplayer support

## Learning Outcomes

Through this project I gained practical experience with:

* Structuring JavaScript applications
* Managing state with modules
* Creating reusable components with factory functions
* Separating business logic from UI logic
* Building interactive browser applications

## Author

Salman

GitHub:
https://github.com/salman61101
