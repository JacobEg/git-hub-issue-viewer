/**
 * Returns the information on a particular issue in a given repo.
 * @param {string} repoOwner The owner of the repo to query
 * @param {string} repoName The name of the repo to query
 * @param {string} issueNumber The id of the issue to query
 * @param {string} personalAccessToken The token for accessing the repo if it's private
 * @returns 
 */
async function getIssueDetails(repoOwner, repoName, issueNumber, personalAccessToken=null){
    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/issues/${issueNumber}`;
    console.log(`Fetching issue from ${url} with token ${personalAccessToken}`)
    let header = {
        accept: 'application/vnd.github+json'
    };
    if(personalAccessToken){
        Object.defineProperty(header, 'Authorization', `Bearer ${personalAccessToken}`);
    }
    let error = null;
    let issue = null;
    try{
        const response  = await fetch(url, header);
        if (!response.ok) { // error coming back from server
            throw Error(`Couldn't fetch issue from ${url} with token ${personalAccessToken}`);
        }
        issue = await response.json();
        console.log(issue);
    }catch(e){
        error = e.message;
    }
    //console.log(issue);
    //if(error) console.error(error);
    return { error, issue }
}

/**
 * Returns the list of issues from a given repo.
 * @param {string} repoOwner The owner of the repo to query
 * @param {string} repoName The name of the repo to query
 * @param {string?} personalAccessToken The token for accessing the repo if it's private
 * @returns 
 */
async function getIssues(repoOwner, repoName, personalAccessToken=null){
    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/issues`;
    console.log(`Fetching issues from ${url} with token ${personalAccessToken}`)
    let header = {
        accept: 'application/vnd.github+json'
    };
    if(personalAccessToken){
        Object.defineProperty(header, 'Authorization', `Bearer ${personalAccessToken}`);
    }
    let error = null;
    let issues = null;
    try{
        const response  = await fetch(url, header);
        if (!response.ok) { // error coming back from server
            throw Error(`Couldn't fetch issue from ${url} with token ${personalAccessToken}`);
        }
        issues = await response.json();
        console.log(issues);
    }catch(e){
        error = e.message;
    }
    console.log(issues);
    //if(error) console.error(error);
    return { error, issues };
}

export { getIssueDetails, getIssues };