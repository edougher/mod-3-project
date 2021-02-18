// listen for click on specific dog card.
// Render modal overlay in center of screen with image, name, breed, like button.
// clicking off modal should drop it
// clicking like button should add to the dogs total number of likes and the dog to the user's liked dogs.
//                                   //                              //
//                                   //                              //
//                       OVERHEAD STUFF                              //
//                                   //                              //
//                                   //                              //
function ce(tag){
    return document.createElement(tag)
}

const likeBtn = document.querySelector("like-btn");
const adoptBtn = document.querySelector("adopt-btn");
let mainSection = document.querySelector('.py-5');

const jakeMain = () => {
    grandClickListener()
}
//                                   //                              //
//                                   //                              //
//                       DOG CARD STUFF                              //
//                                   //                              //
//                                   //                              //




function grandClickListener() {
    mainSection.addEventListener('click', function(e) {
        console.log("hello")
        const dogId = e.target.parentElement.parentElement.dataset.dog
        console.log(dogId)
        if (e.target.className === "like-btn"){
            console.log('yarp')
            // debugger
            getDogForLikes = () => {
                fetch(`http://localhost:3000/animals/${dogId}`)
                    .then(resp => resp.json())
                    .then(console.log('yolooooooo'))
                    .then(dog => {
                        // debugger
                        handleLikeButton(dog)
                        
                    })
            }
            getDogForLikes() 
        }
        if (e.target.className === "adopt-btn") {
            console.log('ARF ARF')
            getDogForAdoption = () => {
                fetch(`http://localhost:3000/animals/${dogId}`)
                    .then(resp => resp.json())
                    .then(console.log('yolooooooo'))
                    .then(dog => {
                        // debugger
                        handleAdoptButton(dog)
                        
                    })
            }
            getDogForAdoption() 
        }
    })
}


//                                   //                              //
//                                   //                              //
//                        LIKES OF DOGS                              //
//                                   //                              //
//                                   //                              //


// const handleLikeButton = dog => {
//     console.log(dog)
//     const dogId = dog.target.parentElement.dataset.id;
//     const likeCount = parseIntdog.target.parentElement.children[2].innerText.split(" ")[0];
//     // assemble an object to pass to the patch request
//     // send the dog's
//     // send the current like count and add 1 to account for the new like
//     const likeData = {
//       likes: likeCount + 1
//     }
  
//     // assemble a PATCH request object
//     const reqObj = {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify(likeData)
//     }
//     fetch(`http://localhost:3000/animals/${dogId}`)
//       .then(resp => resp.json())
//       .then(data => {
//         console.log(data);
//         generateDogs();
//       })
//       .catch(err => console.log(err))
  
//   }

//                                   //                              //
//                                   //                              //
//                           ADOPT A DOG                             //
//                                   //                              //
//                                   //                              //


// const handleAdoptButton = (dog) => {
//     console.log(`http://localhost:3000/animals/${dog.id}`)
//     fetch(`http://localhost:3000/animals/${dog.id}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         }, 
//         body: JSON.stringify(dog)
//     })
//     .then(res => res.json())
//     .then(dog => {
//         mainSection.remove(dog)
//     })
// }

//                                   //                              //
//                                   //                              //
//                        CREATE A DOG                               //
//                                   //                              //
//                                   //                              //

const createBtn = document.querySelector(".create-btn");
createBtn.addEventListener("click", () => {
    console.log("CREATE ME")
    // hide & seek with the form
    const conjureForm = `
    <div class="create-form-div">
    <form class="add-dog-form">
      <input type="text" name="name" value="" placeholder="Dog Name" class="input-text"/>
      <br />
      <input type="text" name="image" value="" placeholder="Dog image URL" class="input-text"/>
      <br />
      <input type="text" name="breen" value="" placeholder="Dog Breed" class="input-text"/>
      <br />
      <input type="submit" name="submit" value="Create" class="submit"/>
    </form>
  </div>
  `
  const body = document.querySelector('body')
  body.innerHTML +=  conjureForm

})

// // save new dog
let createForm = document.querySelector('.add-dog-form')
createForm.addEventListener('submit', event => {
    debugger
    event.preventDefault()
    console.log(event.target)
    // handleNewDog(event.target)
}
)

// const handleNewDog = (target) => {

// let data = {
//     name: createForm[0].value,
//     image: createForm[1].value,
//     breed: createForm[2].value.id,
// } 
// createForm.reset()

//     fetch('http://localhost:3000/animals', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: JSON.stringify(data)
//     })
//     .then(res => res.json())
// }



jakeMain()
