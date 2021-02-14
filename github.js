class Github {
    constructor() {
        this.client_id = "7b2dac44aef99e6c77b3",
        this.client_secret = "6e6d5a9ff812537e82847a3090b46d930b3ed79e",
        this.repos_count = 5,
        this.repos_sort = 'created: asc'
    }

    async getUser(user) {
        const userProfile = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const userRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const userProfileData = await userProfile.json();
        const repos = await userRepos.json();

        return {
            profileDataDisplay: userProfileData,
            repos //if the return object is same as the variable i.e. repos: repos - you can just return repos. Refer to repos in the app initiating the class
        };
    }
}