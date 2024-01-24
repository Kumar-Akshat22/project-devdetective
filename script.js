// Varialbles
const url = "https://api.github.com/users/";
const input = document.getElementById("input");
const search = document.getElementById("search");
const user_avataar = document.getElementById("user_avataar");
const user_name = document.getElementById("user_name");
const date_joined = document.getElementById("date_joined");
const user_profile = document.getElementById("user_profile");
const user_description = document.getElementById("user_description");
const repo_count = document.getElementById("repo_count");
const follower_count = document.getElementById("follower_count");
const following_count = document.getElementById("following_count");
const user_location = document.getElementById("user_location");
const user_website = document.getElementById("user_website");
const user_twitter = document.getElementById("user_twitter");
const user_company = document.getElementById("user_company");

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
    user_description.innerText = `${userData.bio}`;
    repo_count.innerText = `${userData.public_repos}`;
    follower_count.innerText = `${userData.followers}`;
    following_count.innerText = `${userData.following}`;
    user_location.innerText = (userData.location === null) ? "Not Available" : `${userData.location}`;
    user_company.innerText = (userData.company === null) ? "Not Available" : `${userData.comapny}`;
    user_twitter.innerText = (userData.twitter_username === null) ? "Not Available" : `${userData.twitter_username}`;
    user_twitter.href = (userData.twitter_username === null) ? "#" : `https://twitter.com/${userData.twitter_username}`;
    user_website.innerText = (userData.blog === null) ? "Not Available" : `${userData.blog}`;
    user_website.href = (userData.blog === null) ? "#" : `https://${userData.blog}`;
    

}

