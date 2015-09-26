import ReactDOM from 'react-dom';
import React from 'react';
import Card, { Suits, Ranks } from './components/display/Card.jsx';
import Deck from './components/display/Deck.jsx';
import SmartDeck from './components/controller/SmartDeck.jsx';
import Pile from './components/display/Pile.jsx';
import SmartPile from './components/controller/SmartPile.jsx';

let cards = [];
Object.keys(Suits).forEach(suit => {
    Ranks.forEach(rank => {
        cards.push({ rank, suit })
    })
})

ReactDOM.render(
    <Card rank="A" suit="HEARTS" upturned/>, document.getElementById('card')
);

ReactDOM.render(
    <Deck>
        <Card rank="A" suit="HEARTS" upturned/>
    </Deck>,
    document.getElementById('deck')

);


ReactDOM.render(
    <SmartDeck cards={cards} />, document.getElementById('smart-deck')
);

ReactDOM.render(
    <Pile>
        <Card rank="A" suit="HEARTS"/>
        <Card rank="2" suit="HEARTS"/>
        <Card rank="3" suit="HEARTS"/>
    </Pile>,
    document.getElementById('pile')
);

ReactDOM.render(
    <SmartPile cards={cards.slice(0, 4)} />, document.getElementById('smart-pile')
);
