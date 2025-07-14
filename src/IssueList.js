import { Link } from 'react-router-dom';

const IssueList = (props) => {
    let issues = props.issues;
    console.log('ISSUE\n', issues[0]);
    //return (<div></div>);
    return (
        <div className="issue-list">
            {issues.map(issue => (
                <div className="issue-preview" key={issue.id} >
                    <Link to={`/issues/${issue.id}`}>
                        <h2>{ issue.title }</h2>
                        <p>Opened by { issue.user.login }</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default IssueList;