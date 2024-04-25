import './JobPosition.css';

export const JobPositionDesc = ({ title, date, company, lstResponsabilities }) => {
    return (
        <>
            <h2>{title}</h2>
            <h3>{company} </h3>
            <small>{date}</small>
            <ul>
                {lstResponsabilities && lstResponsabilities.map(item => <li key={item} >{item}</li>)}
            </ul>
        </>
    )
}
