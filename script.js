// Varialbles
const url = "https://api.github.com/users/";
const input = document.getElementById("input");
const search = document.getElementById("search");
const user_avataar = document.getElementById("user_avataar");
const user_name = document.getElementById("user_name");
const date_joined = document.getElementById("date_joined");
const user_profile = document.getElementById("user_profile")

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
    user_name.innerText = `${userData.name}`;
    user_profile.href = `${userData.html_url}`;
    user_profile.innerText = `${userData.login}`;


}

