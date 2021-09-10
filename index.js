// // Add your code here



// const formData = {
//     dogname: "Page",
//     dogBreed: "Piano"     
// };

// const configurationObject = {
//     method: "Post",
//     headers: {
//         "Content-Type": "application/json",
//     Accept: "applicatoon/json",
//     },
//     body: JSON.stringify(formData),
// };   


// fetch("http://localhost:3000/dogs" , configurationObject)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (object) {
//         console.log(object);
//     })
//     .catch(function (error) {
//         alert("Bad things!");
//         console.log(error.message);
//     });



const formData = {
    name: "Steve",
    email: "steve@steve.com"     
};

function submitData (name, email){
const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(formData),
};   

fetch("http://localhost:3000/users" , configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        document.body.innerHTML = object["id"]
    })
    .catch(function (e) {
        // if status 409, then below
       document.body.innerHTML = response.statusText
    });

}


