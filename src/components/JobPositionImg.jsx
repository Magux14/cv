import './JobPosition.css';

export const JobPositionImg = ({ logoPath }) => {
    return (
        <>
            <img src={`./assets/img/logos/company/${logoPath}.png`} alt="" className='logo' />
        </>
    )
}
