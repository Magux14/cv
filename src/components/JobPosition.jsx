export const JobPosition = ({ title, company, lstResponsabilities, logoPath }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h2>{title}</h2>
                    <h3>{company}</h3>
                    <ul>
                        {lstResponsabilities && lstResponsabilities.map(item => <li key={item} >{item}</li>)}
                    </ul>
                </div>
                <div className="col-sm">
                    Foto
                </div>
            </div>
        </div>
    )
}
