import './JobPosition.css';
import './JobPositionDesc.css';

export const JobPositionDesc = ({ title, date, company, lstResponsabilities }) => {
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

            <ul>
                {lstResponsabilities && lstResponsabilities.map(item => <li key={item} >{item}</li>)}
            </ul>
        </>
    )
}
