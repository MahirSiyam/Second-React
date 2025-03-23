import { useState } from "react"

export default function BatsmanRun ()
{

    const [runs , setRuns] = useState(0);
    const [sixes , setSixes] = useState(0);
    const [fours , setFours] = useState(0);

    const singleRuns = () => {
        const single = runs + 1;
        setRuns(single);
    }

    const fourRuns = () => {
        const four = runs + 4;

        const fourCount = fours + 1;

        setFours(fourCount);
        setRuns(four);
    }

    const sixRuns = () => {
        const six = runs + 6;

        const sixCount = sixes + 1;

        setSixes(sixCount);
        setRuns(six);
    }

    return(
        <div>
            <h1><u>Bangladeshi Batsmen</u></h1>
            {
                runs > 50 && <p>Congrats Your Run Is 50</p>
            }
            <h2>Batsman Run : {runs}</h2>

            <p><small>Six: {sixes}</small></p>
            <p><small>Four: {fours}</small></p>

            <button onClick={singleRuns}>Single</button>
            <button onClick={fourRuns}>Four</button>
            <button onClick={sixRuns}>Six</button>
        </div>
    )
};