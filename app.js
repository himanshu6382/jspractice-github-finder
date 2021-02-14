const github = new Github; // this class has a method to get the user profile details from Github API. pass text from input form to this class
const ui = new UI; //this class has method to display user details. Pass user details to this class


//assign input field to a variable
const searchUserInput = document.getElementById('searchUser');

//Search input event Listener
searchUserInput.addEventListener('keyup', (e) => {
    //get input text
    const userText = e.target.value;

    if (userText !== '') {
        //make http call to github
        github.getUser(userText) //returns a promise. Need .then to resolve
            .then(data => {
                if (data.profileDataDisplay.message === 'Not Found') {
                    //show alert that user not found
                    ui.showAlert('User not found', 'alert alert-danger mt-4');
                } else {
                    //show profile
                    ui.showProfile(data.profileDataDisplay); //remember, profileDataDisplay is the parameter obtained from github class
                    ui.showRepos(data.repos);
                }   
            });
    } else {
        //clear profile
        ui.clearProfile();
    }
});