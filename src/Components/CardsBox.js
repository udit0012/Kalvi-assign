import React from 'react'
import WorkCard from './WorkCard'

const CardsBox = () => {

    const CardArray = [
        {
            image:"recipe.png",
            title:"Recipe Web Page",
            description:"I built a Dalgona Coffee Recipe page using HTML & CSS."
        },
        {
            image:"emoji.png",
            title:"My Fav Emojis",
            description:"I created my favorite emojis & cartoons using CSS only."
        },
        {
            image:"guess-the-number.png",
            title:"Guess the Number",
            description:"I built guess the number game using JavaScript."
        },
        {
            image:"rock-paper-scissors.png",
            title:"Rock Paper Scissors",
            description:"I made a virtual rock paper scissors game using JS."
        },
        {
            image:"pokemon.png",
            title:"Pokemon Game",
            description:"I built the Pokemon based game using HTML, CSS & JS."
        },
        {
            image:"e-birthday-card.png",
            title:"E-birthday Card",
            description:"I’ve built my own e-birthday card using JS."
        },
    ]

    return (
        <div className='cards-box'>
            {CardArray.map((card)=>{
                return <WorkCard title={card.title} body={card.description} image={`/assets/${card.image}`} />
            })}
            
        </div>
    )
}

export default CardsBox