import { Link } from 'react-router-dom';

const IssueList = (props) => {
    let issues = props.issues;
    let personalAccessToken = props.personalAccessToken;
    let repoOwner = props.repoOwner;
    let repoName = props.repoName;
    const personalAccessTokenData = {
        'peronalAccessToken': `${personalAccessToken}`
    };
    //console.log('ISSUE\n', issues[0]);
    //return (<div></div>);
    return (
        <div className="issue-list">
            <section>
                {issues.map(issue => (
                    <article className="issue-preview" key={issue.number}>
                        <div>
                            <Link to={`/issues/${repoOwner}/${repoName}/${issue.number}`} state={personalAccessTokenData}>
                                <h2>{ issue.title }</h2>
                                <p>Opened by { issue.user.login }</p>
                            </Link>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default IssueList;