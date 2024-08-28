import React from 'react';
import ReactDOM from 'react-dom';
import ChessBoard from './App';

function ChessGame(){
    return(
        <ChessBoard />
    )
}
ReactDOM.render(<ChessGame />,document.getElementById("root"))