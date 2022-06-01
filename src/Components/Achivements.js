import React from 'react'

const Achivements = () => {
    const achiv_array = [
        { description: "Topped my class with a CPGA of 9.2." },
        { description: "Was awarded ‘Best Performer of the Batch 2018’ for consistent performance in academic for 3 consequetive years." },
        { description: "Currently, taking up “ProGrad Junior Certification Program”. Link to some of my projects - https://github.io/rachel/game1" },
        { description: " Vice Captain, Sports Club of Sunbeam SSC. Bagged several prizes in Running (100 m), Dodge ball, Archery, Regional Badminton tornaments etc." },
        { description: "Member of #include - A global coding club for passionate coders" },
    ]
    return (
        <div className='achiv-details'>
            {achiv_array.map((desc,i) => {
                return <div key={i} className='achiv-desc'>
                    {desc.description}
                </div>
            })}
        </div>
    )
}

export default Achivements