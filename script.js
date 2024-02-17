// Varialbles
const wrapper = document.querySelector(".wrapper");
const root = document.documentElement.style;
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
const toggle_theme = document.getElementById("theme-toggle");
const theme_value = document.getElementById("theme-value");
const theme_icon = document.getElementById("theme-icon");
const search_container = document.querySelector(".search-container");
const profile_container = document.querySelector(".profile-container");
const error_container = document.getElementById("error-message");
const month_array = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];


search.addEventListener('click' , ()=>{
    
    console.log('Printing the search input value');
    getUserData(url + input.value);
});

toggle_theme.addEventListener("click" , ()=>{

    console.log('Toggle theme event listener called');
    console.log(theme_value.innerText);

    theme_value.innerText==='DARK' 
    ? 
    (darkMode())
    :
    (lightMode())


});

function darkMode(){

    theme_value.innerText = `${'LIGHT'}`;
    theme_icon.src = './assets/images/sun-icon.svg';
    theme_icon.style.transition = "all 0.3s ease-in-out"
    root.setProperty('--lm-bg' , '#141D2F');
    root.setProperty('--lm-bg-content' , '#1E2A47');
    root.setProperty('--lm-text' , 'white');
    root.setProperty('--lm-text-alt' , 'white');
    root.setProperty(' --lm-icon-bg' , 'white');

}

function lightMode(){

    theme_value.innerText = `${'DARK'}`;
    theme_icon.src = './assets/images/moon-icon.svg';
    root.setProperty('--lm-bg' , '#f6f8ff');
    root.setProperty('--lm-bg-content', '#fefefe');
    root.setProperty('--lm-text' , '#4b6a9b');
    root.setProperty('--lm-text-alt' , '#2b3442');
    root.setProperty(' --lm-icon-bg' , '#4b6a9b');
}

async function getUserData(newUrl){

    error_container.classList.remove("active");
    try{

        const res = await fetch(newUrl);

        if(res.ok){

            const data = await res.json();
            console.log(data);
            renderUserInfo(data);

        }

        else{

            error_container.classList.add("active");
        }

    }

    catch(error){

        console.log('Error in fetching the data');

    }
}

input.addEventListener("change",()=>{

    error_container.classList.remove("active");
})

function renderUserInfo(userData){

    const dateJoined = userData.created_at.split('T').shift().split("-");
    // Year Extracted
    console.log(dateJoined[0]);
    // Month Extracted
    console.log(dateJoined[1]);
    // Date Extracted
    console.log(dateJoined[2]);
    date_joined.innerText = `Joined ${dateJoined[2]} ${month_array[dateJoined[1]-1]} ${dateJoined[0]}`
    user_avataar.src = `${userData.avatar_url}`;
    user_name.innerText = `${userData.name}`;
    user_profile.href = `${userData.html_url}`;
    user_profile.innerText = `@${userData.login}`;
    user_description.innerText = `${userData.bio}`;
    repo_count.innerText = `${userData.public_repos}`;
    follower_count.innerText = `${userData.followers}`;
    following_count.innerText = `${userData.following}`;
    user_location.innerText = (userData.location === null) ? "Not Available" : `${userData.location}`;
    user_company.innerText = (userData.company === null) ? "Not Available" : `${userData.company}`;
    user_twitter.innerText = (userData.twitter_username === null) ? "Not Available" : `${userData.twitter_username}`;
    user_twitter.href = (userData.twitter_username === null) ? "#" : `https://twitter.com/${userData.twitter_username}`;
    user_website.innerText = (userData.blog === "") ? "Not Available" : `${userData.blog}`;
    user_website.href = (userData.blog === null) ? "#" : `https://${userData.blog}`;
    

}

// Initialize the profile info card with some inital value
const initial_userdata = 'thepranaygupta';
getUserData(url+initial_userdata);
