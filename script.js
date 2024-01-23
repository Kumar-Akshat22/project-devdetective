// Varialbles
const url = "https://api.github.com/users/";
const input = document.getElementById("input");
const search = document.getElementById("search");
const user_avataar = document.getElementById("user_avataar")

search.addEventListener('click' , ()=>{
    
    console.log('Printing the search input value');
    getUserData(url + input.value);
})

async function getUserData(newUrl){

    try{

        const res = await fetch(newUrl);
        const data = await res.json();
        console.log(data);
        renderUserInfo(data);

    }

    catch(error){

        console.log('Error in fetching the data');

    }
}

function renderUserInfo(userData){

    user_avataar.src = `${userData.avatar_url}`;
}

