import React from "react";



// const Count = ({ total }) => {
//     return (
//         <p>Total of {total} exercises</p>
//     )
// }

const Titles = ({ course }) => {
    return (
        <h1 key={course.id}>{course.name}</h1>
    )
}

const Subtitles = ({ part }) => {
    return (
        <p key={part.id}>{part.name} {part.exercises}</p>
    )
}
// {Calculate total number of exercises and pring the total}
const Total = ({ part }) => {
    console.log(part)
    var sum = part.reduce((prev, curr) => prev + curr.exercises,
        0)
    console.log(sum)
    return (
        <div>
            <p>Total is {sum}</p>
        </div>
    )
}


const Course = ({ course }) => {
    // console.log('course', course)
    // var total = 0
    // const titles = course.map((title) => {
    //     return (
    //         <div>
    //             <Titles course={title} />
    //             {/* {
    //                 title.parts.map(
    //                     (part) => (
    //                         <SubTitles course={title.parts} />
    //                     )
    //                 )
    //             } */}
    //             <Count total={total} />
    //         </div>
    //     )
    // })
    // console.log(course)


    return (
        <div>
            {/* {prints Title of the courses only using Title component} */}
            <Titles course={course} />
            {course.parts.map(
                (part) => (
                    <Subtitles part={part} />
                )
            )
            }

            {/* {call Total component to calculate total # of execises} */}
            <Total part={course.parts} />


        </div>
    )
}

export default Course