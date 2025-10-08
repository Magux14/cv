import { JobPositionImg } from '../job-position-image/JobPositionImg';
import './job-position-desc.scss';

export const JobPositionDesc = ({ title, desc, date, company, lstResponsabilities, lstVideos, lstImgs, logoPath, lstURLS }) => {
    return (
        <>
            <div className="job-position-desc__header-container">
                <div className='job-position-desc__main-info-container'>
                    <div className="job-title">{title}</div>
                    <div className="company-name">
                        {company}
                    </div>
                    <small className="date">{date}</small>
                </div>
                {
                    logoPath &&
                    <JobPositionImg logoPath={logoPath} />
                }
            </div>
            <div>

            </div>

            <br />

            {desc &&
                <>
                    <p>{desc}</p>
                </>
            }


            {
                lstURLS &&
                <>
                    {
                        lstURLS.map(item => <a href={item}>{item}</a>)
                    }
                    <br /><br />
                </>
            }

            {lstVideos && lstVideos.map(video =>
                <div key={video} className='video-container'>
                    <iframe type="text/html" src={video} width="50%" height="10%"></iframe >
                </div>
            )}

            {lstImgs &&
                <div className="container">
                    <div className='row justify-content-center'>
                        {lstImgs.map(img =>
                            <div key={img} className='col img-container '>
                                <img src={`./assets/img/${img}`} alt="" />
                            </div>
                        )}
                    </div>
                </div>
            }

            <ul>
                {lstResponsabilities && lstResponsabilities.map(item => <li key={item} >{item}</li>)}
            </ul>
        </>
    )
}
