document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form');
    form.addEventListener('submit', function(event){
        event.preventDefault();
        //console.log(event)

        const search = document.querySelector('#search')
        //console.log(search.value)
        let users = search.value

        //fetch request
    fetch(`https://api.github.com/users/${users}`, {
        headers: {
            'Accept' : 'application/vnd.github.v3+json'
        }
    })
        .then(response => response.json())
        .then(users => createUsers(users))
    })

    function createUsers(users){
        console.log(users)
        console.log(users.login)

      const userList = document.querySelector('#user-list')
        console.log(userList)
        const li = document.createElement('li')

        li.innerHTML = `
            <p>Username: ${users.login}   </p>
            <p>User Profile: <a href="${users.url}">Link to User Profile</a> </p>
            <p>User Repos: <a href="${users.repos_url}">Link to User Repos</a>
            <p>User Avatar: <img src="${users.avatar_url}"</p>     
        `
        userList.appendChild(li)  
    }
})