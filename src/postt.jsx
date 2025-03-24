export default function Postt({post}){

    const {title , body} = post;

    return(
        <div className="card">
            <h2>Title: {title}</h2>
            <p>Body: {body}</p>
        </div>
    )
}