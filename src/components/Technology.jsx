import { lstTechnologies } from '../../data/i18n/en';
import './Technology.css';

export const Technology = () => {
    return (
        <div className="container">
            <div className="row">
                {
                    lstTechnologies && lstTechnologies.sort((a, b) => a.years > b.years ? -1 : 1).map(item =>
                        <>
                            <div className="col">
                                <img key={item.img} src={`/assets/img/logos/tech/${item.img}.png`} alt="" className="tech-logo " />
                                <br />
                                <strong className='text-center'>
                                    {item.name}
                                </strong>
                            </div>
                        </>
                    )}
            </div>
        </div>
    )
}
