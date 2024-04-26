import './Technology.css';
import { Tooltip } from 'react-tooltip';

export const Technology = ({ lstTechnologies, small = false }) => {
    return (
        <>
            {
                !small &&
                <div className="container">
                    <div className="row">
                        {
                            lstTechnologies && lstTechnologies.sort((a, b) => a.years > b.years ? -1 : 1).map(item =>
                                <div key={item.img} className="col no-padding">
                                    <img src={`/assets/img/logos/tech/${item.img}.png`} alt="" className="tech-logo" />
                                    <br />
                                    <strong className='text-center'>
                                        {item.name}
                                    </strong>
                                </div>
                            )}
                    </div>
                </div>
            }

            {small && lstTechnologies && lstTechnologies.sort((a, b) => a.years > b.years ? -1 : 1).map(item =>
                <a key={item.img} data-tooltip-id={item.img} data-tooltip-content={item.name}>
                    < Tooltip id={item.img} />
                    <img src={`/assets/img/logos/tech/${item.img}.png`} alt="" className="tech-logo-small" />
                </a >
            )}

        </>

    )
}
