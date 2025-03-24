import { use } from "react"
import Postt from "./postt";

export default function Posts({fetchPromisePosts}){

    const posts = use(fetchPromisePosts);
    // console.log(posts.length);

    return(
        <div className="card">
            {
                posts.map(post => <Postt key={post.id} post = {post}></Postt>)
            }
        </div>
    )
}