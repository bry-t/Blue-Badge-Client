// Fx, clicked item from NutroObj table to post

const PostMeal = (event, props) => {
    event.preventDefault()

    let url = `http://localhost:${REACT_APP_PORT}/meal/create`

    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            foodName: foodName,
            protein: protein,
            carbs: carbs,
            fats: fats,
            kCal: kCal,
            mealCat: props.mealCat
        }),
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": props.sessionToken
        })
    })
    .then(res => res.json())
    .then(data => props.toggleModal)
    .catch(err => console.log(err))

    return (
    
    )
}



export default PostMeal