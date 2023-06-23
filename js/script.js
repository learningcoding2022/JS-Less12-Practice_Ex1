//Description: In this exercise, you'll fetch random profile data from the Random User Generator API. You'll parse the data to a JSON file and then create an array with the daya. Finally, you'll create a function expression to populate data on the page, including the country, name, and profile image

//create a variable called selectUserNumber to capture the select element
//need # since it is an id name
const selectUserNumber = document.querySelector("#users")

const randomFolks = document.querySelector(".random-peeps");

const getData = async function (numUsers) {
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    //declare a variable called data to parse the data captured in the usersRequest variable using .json()
    const data = await usersRequest.json();
    
    const userResults = data.results;
    //how do you get the value of userResults? and where did "results" come from?
    displayUsers(userResults);
    //nothing showed up in the console
};

getData(1);

const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";

    //loop over userResults. For every user, select their country, first name, and avatar URL with a size of medium.
    for (const user of userResults) {
        const country = user.location.country;
        const name = user.name.first;
        const imageUrl = user.picture.medium;
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
                <h3>${name}</h3>
                <p>${country}</p>
                <img src=${imageUrl} alt="User avatar" />
            `;
        //append the userDiv to the randomFolks element
        randomFolks.append(userDiv);
    }
};

//practice exercise 2: programming a drop-down list to change the number of profiles displayed

//removed the class of "hide" from the html

//add a change event listener for selectUserNumber

selectUserNumber.addEventListener('change', function (e) {
    //create variable called numUsers that will capture the selected value
    const numUsers = e.target.value;
    //console.log(numUsers);
    getData(numUsers);
})



