import { InfoSegment } from "./InfoSegment";
import { JobPosition } from "./JobPosition";
import './JobPosition.css';
import '../styles.css';
import { lstJobs } from "../../data/i18n/en";
import { Technology } from "./Technology";

export const Summary = () => {
    return (
        <div>

            <div className="text-center p-3">
                <h1>Jorge Yael Espinosa Ruiz</h1>
                <h2>Front End Developer</h2>

                <hr />
                <Technology />
                <hr />
                < InfoSegment
                    title="Objective"
                    desc="Realizar software de utilidad y calidad, aplicando las mejores prácticas de programación.
                    en mi área constantemente, capacitándome con las tecnologías más recientes."
                />
                <hr />
                < InfoSegment title="Previous Jobs" />
            </div>
                {lstJobs && lstJobs.map((item, index) => <div key={item.company} style={{ padding: '10px' }}><JobPosition {...item} imgRight={index % 2 == 0} /></div>)}
            </div>
    )
 
}