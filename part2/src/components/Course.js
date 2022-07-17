import React from "react";



const Count = ({ total }) => {
    const exercises = 
    
    
    return (
        <p>Total of {total} exercises</p>
    )
}


const Course = ({ course }) => {
    var total = 0
    const titles = course.map((title) => {
        return (<div>
            <h1 key={title.id} > {title.name}</h1>
            {title.parts.map((part) =>
                <p key={part.id}>{part.name} {part.exercises}</p>
            )}
            <Count total={total} />
        </div >
        )
    })


    return (
        <div>
            {titles}



        </div>
    )
}

export default Course