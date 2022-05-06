import React from 'react';
import s from './Rules.module.scss'
import Button from "../UI/Button/Button";

function Rules(props) {
    return (
        <div className={s['rules-card']}>
            <div className={s['rules-card__text']}>
                <p className={s['text__title']}>Rock Paper Scissors</p>
                <p>Everybody knows the rules:</p>
                <ul>
                    <li>Scissors beats a paper</li>
                    <li>Paper beats rock</li>
                    <li>Rock beats scissors</li>
                    <li>And we play up to three wins!</li>
                </ul>
            </div>
            <Button className={s['rules-card__btn']}>Start!</Button>
        </div>
    );
}

export default Rules;