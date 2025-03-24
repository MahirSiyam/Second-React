import { use } from "react"

export default function Photos({fetchPhotos}){
    const photo = use(fetchPhotos)

    console.log(photo);
    return(
        <div className="card">
            <h2>Photos: {photo.length}</h2>
        </div>
    )
}