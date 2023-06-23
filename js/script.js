//Description: In this exercise, you'll fetch random profile data from the Random User Generator API. You'll parse the data to a JSON file and then create an array with the daya. Finally, you'll create a function expression to populate data on the page, including the country, name, and profile image

const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
    const usersRequest = await fetch("https://randomuser.me/api?results=5");
    //declare a variable called data to parse the data captured in the usersRequest variable using .json()
    const data = await usersRequest.json();
    
    const userResults = data.results;
    //how do you get the value of userResults? and where did "results" come from?
    displayUsers(userResults);
    //nothing showed up in the console
};

getData();

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