import './JobPosition.css';
import './JobPositionDesc.css';

export const JobPositionDesc = ({ title, desc, date, company, lstResponsabilities, lstVideos, lstImgs }) => {
    return (
        <>
            <div className='main-info-container'>

                <div className="job-title">{title}</div>
                <div className="company-name">
                    {company}
                </div>
                <small className="date">{date}</small>
            </div>

            <br />

            {desc &&
                <>
                    <p>{desc}</p>
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
                                <img src={`/assets/img/${img}`} alt="" />
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
