import React from 'react';
import s from './Game.module.scss'
import GameCard from "./GameCard/GameCard";
import Button from "../UI/Button/Button";
import {useDispatch} from "react-redux";
import {setPage} from "../../store/uiSlice";

function Game(props) {
    const dispatch = useDispatch()

    const clickHandler = () => {
        dispatch(setPage('SCOREBOARD'))
    }


    return (
        <div className={s.game}>
            <p className={s.title}>Choose!</p>
            <div className={s['card-container']}>
                <GameCard onClick={clickHandler}>&#x270A;</GameCard>
                <GameCard onClick={clickHandler}>&#x270B;</GameCard>
                <GameCard onClick={clickHandler}>&#x270C;</GameCard>
            </div>
            <Button className={s['reset-btn']}>Reset</Button>
        </div>
    );
}

export default Game;