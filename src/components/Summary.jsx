import { InfoSegment } from "./InfoSegment";
import { JobPosition } from "./JobPosition";
import './JobPosition.css';
import '../styles.css';
import { Technology } from "./Technology";
import { Waves } from "./waves/Waves";
import './Summary.css';
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { FaSquareGithub } from "react-icons/fa6";

export const Summary = () => {
    const { isMobile, i18n } = useContext(AppContext);
    const { lstJobs, lstPersonalProjects, objective, lstTechnologies } = i18n;

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    }

    const openLinkedIn = () => {
        window.open('https://www.linkedin.com/in/jorge-yael-espinosa-ruiz-98280a127/', 'blank');
    }

    const openGithub = () => {
        window.open('https://github.com/Magux14', 'blank');
    }

    return (
        <div>

            <div className="container p-3">
                <div className="row">
                    <div className={`${isMobile ? 'col-12' : 'col-8'}`}>
                        <div className="main-info-container text-center">
                            <h1>Jorge Yael Espinosa Ruiz</h1>
                            <h2>Front End Developer</h2>
                            <div>{i18n.career}</div>
                        </div>

                        <div className="salle-container">
                            <img src={`/assets/img/logos/salle.png`} alt="" />
                        </div>
                        {!isMobile &&
                            <>
                                < InfoSegment
                                    title="Objective"
                                    desc={objective}
                                />
                            </>
                        }
                    </div>
                    <div className={`${isMobile ? 'col-12' : 'col-4'} photo-container`}>
                        <br />
                        <img src={`/assets/img/photo.png`} alt="" className="photo" />
                        <br />
                        <div className="align-right copy-to-clipboard">
                            <p onClick={() => copyToClipboard('+525531004755')} ><FaSquarePhone size="25" /> +52 5531004755</p>
                            <p onClick={() => copyToClipboard('jyer94@gmail.com')}><MdEmail size="25" /> jyer94@gmail.com</p>
                        </div>
                        <div>
                            <span onClick={openLinkedIn} className="copy-to-clipboard"><FaLinkedin size="30" color="#0a66c2" /></span>
                            <span onClick={openGithub} className="copy-to-clipboard"><FaSquareGithub size="30" /></span>
                        </div>
                    </div>

                    {isMobile &&
                        < InfoSegment
                            title="Objective"
                            desc={objective}
                        />
                    }
                </div>
            </div>

            <div className="text-center p-3">
                < InfoSegment title="Technologies & Tools" />
                <Technology lstTechnologies={lstTechnologies.filter(item => item.professional)} />
                < InfoSegment title="Experience" />
            </div>
            {
                lstJobs && lstJobs.map((item, index) => <div key={item.company} style={{ padding: '10px' }}>
                    <JobPosition {...item} imgRight={index % 2 == 0} />
                </div>)
            }

            <div className="text-center">
                < InfoSegment title="Personal Projects" desc="By time to time I like to do personal projects, sometimes for necessity sometimes for fun, here are some examples" />
            </div>

            {
                lstPersonalProjects && lstPersonalProjects.map((item, index) => <div key={item.title} style={{ padding: '10px' }}>
                    <JobPosition {...item} imgRight={index % 2 == 0} />
                </div>)
            }

            <Waves />
        </div >
    )

}