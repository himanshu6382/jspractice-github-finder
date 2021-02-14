class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    //method to display the profile details in html
    showProfile(user) {
        console.log(user);
        this.profile.innerHTML = `
            <div class="card card-body mb-3>
                <div class="row">
                    <div class="col-md-3 mx-auto">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-2">View Profile</a>
                    </div>
                    <div class="col-md-9 mb-2 mx-auto">
                        <span class="badge badge-primary mb-2">Public repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary mb-2">Public gists: ${user.public_gists}</span>
                        <span class="badge badge-success mb-2">Followers: ${user.followers}</span>
                        <span class="badge badge-info mb-2">Following: ${user.following}</span>
                        <br>
                        <br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    //clear profile if the text field in entry form is empty
    clearProfile() {
        this.profile.innerHTML = '';
    }

    //show alert if there is no user profile for the text in the text field in the form
    showAlert(message, classToAdd) {
        this.clearProfile(); //clear previous profile if any
        const currentAlert = document.querySelector('.alert'); //see if there is an alerty already displayed
        if (currentAlert === null) { //display an alert only if there is no current alert
            //create div
            const div = document.createElement('div');
            //add classes
            div.className = classToAdd;
            //add text
            div.appendChild(document.createTextNode(message));
            //get parent
            const container = document.querySelector('.searchContainer');
            //get search box
            const search = document.querySelector('.search');
            //insert alert
            container.insertBefore(div, search);
            //remove alert after 2 seconds
            setTimeout(() => {
                this.clearAlert();
            },2000);
        }
    }

    clearAlert() {
        const alertToClear = document.querySelector('.alert');
        alertToClear.remove();
    }

    showRepos(repos) {
        let output = '';
        repos.forEach(repo => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a> 
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary mb-2">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary mb-2">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success mb-2">Forks: ${repo.forks_count}</span>                           
                        </div>
                    </div>
                </div>
            `;
        });

        //output repos
        document.getElementById('repos').innerHTML = output;
    }
}