import { getIssueDetails, getIssueComments } from './fetchIssueData';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
 
const IssueDetails = () => {
    const { id, name, owner } = useParams();
    const history = useHistory();
    const [ isPending, setIsPending ] = useState(false);
    const [ error, setError ] = useState('');
    const [ issue, setIssue ] = useState(null);
    const [ comments, setComments ] = useState(null);
    const location = useLocation();
    const state = location.state;
    let personalAccessToken = '';
    if(state){
        personalAccessToken = state.personalAccessToken;
    }
    console.log('personalAccessToken =', personalAccessToken);
    console.log('id =', id);
    console.log('name =', name);
    console.log('owner =', owner);

    useEffect(() =>{
        setIsPending(true);
        getIssueDetails(owner, name, id, personalAccessToken)
            .then(data => {
                setIssue(data.issue);
                setError(data.error);
            });
        getIssueComments(owner, name, id, personalAccessToken)
            .then(data => {
                if(!error){
                    setError(data.error);
                }
                setComments(data.comments);
            });
        setIsPending(false);
    }, []);

    return (
        <div>
            <button onClick={() => {history.go(-1)}}>Back to Home</button>
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { issue && 
                <div>
                    <section>
                        <article>
                            <h2>{issue.title}</h2>
                            <h5>Opened by: {issue.user.login}</h5>
                            {issue.assignee && <h5>Assigned to: {issue.assignee.login}</h5>}
                            <h6>Last updated: {issue.updated_at}</h6>
                            <div>{issue.labels.map(label => (
                                <div style={`color:#${label.color};`}>{label.name}</div>
                            ))}</div>
                            <p>{issue.body}</p>
                        </article>
                        {comments && comments.map(comment => (
                            <article>
                                <h5>At {comment.updated_at}, {comment.user.login} commented:</h5>
                                <p>{comment.body}</p>
                            </article>
                        ))}
                    </section>
                </div>
            }
        </div>
    );
};
/**
 * <button onClick={history.go(-1)}>Back to Home</button>
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { issue && 
                <div>
                    <section>
                        <article>
                            <h2>{issue.title}</h2>
                            <h5>Opened by: {issue.user.login}</h5>
                            <h5>Assigned to: {issue.assignee.login}</h5>
                            <h6>Last updated: {issue.updated_at}</h6>
                            <div>{issue.labels.map(label => (
                                <div style={`color:#${label.color};`}>{label.name}</div>
                            ))}</div>
                            <p>{issue.body}</p>
                        </article>
                    </section>
                </div>
            }
 */

export default IssueDetails;