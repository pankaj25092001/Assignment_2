
async function getGithubProfile(username) {
    const url = `https://api.github.com/users/${username}`;
    console.log(url);
    try {
        const res = await fetch(url);
        const data = await res.json();
        
        console.log('==============================');
        console.log(`GitHub Profile: ${data.login}`);
        console.log('==============================');
        console.log(`Name:        ${data.name}`);
        console.log(`Bio:         ${data.bio}`);
        console.log(`Location:    ${data.location}`);
        console.log(`Public Repos:${data.public_repos}`);
        console.log(`Followers:   ${data.followers}`);
       // console.log(`Following:   ${data.following}`);
        console.log(`Profile URL: ${data.html_url}`);
        console.log('==============================');
    } catch (err) {
        console.error('Failed:', err);
    }
}


getGithubProfile('pankaj25092001');