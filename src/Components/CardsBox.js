import React from 'react'
import recipe from './images/recipe.png'
import emoji from './images/emoji.png'
import guessTheNumber from './images/guess-the-number.png'
import rockPaperScissors from './images/rock-paper-scissors.png'
import pokemon from './images/pokemon.png'
import eBirthdayCard from './images/e-birthday-card.png'
import WorkCard from './WorkCard'

const CardsBox = () => {

    const CardArray = [
        {
            image:recipe,
            title:"Recipe Web Page",
            description:"I built a Dalgona Coffee Recipe page using HTML & CSS."
        },
        {
            image:emoji,
            title:"My Fav Emojis",
            description:"I created my favorite emojis & cartoons using CSS only."
        },
        {
            image:guessTheNumber,
            title:"Guess the Number",
            description:"I built guess the number game using JavaScript."
        },
        {
            image:rockPaperScissors,
            title:"Rock Paper Scissors",
            description:"I made a virtual rock paper scissors game using JS."
        },
        {
            image:pokemon,
            title:"Pokemon Game",
            description:"I built the Pokemon based game using HTML, CSS & JS."
        },
        {
            image:eBirthdayCard,
            title:"E-birthday Card",
            description:"I’ve built my own e-birthday card using JS."
        },
    ]

    return (
        <div className='cards-box'>
            {CardArray.map((card)=>{
                return <WorkCard title={card.title} body={card.description} image={card.image} />
            })}
            
        </div>
    )
}

export default CardsBox