import { InfoSegment } from "../info-segment/InfoSegment";
import { JobPosition } from "../job-position/JobPosition";
import { Technology } from "../technology/Technology";
import { Waves } from "../waves/Waves";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { FaSquareGithub } from "react-icons/fa6";
import { Tooltip } from 'react-tooltip';
import '../../styles.scss';
import './summary.scss';

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
        <div className="summary__container">

            <div className="container p-3">
                <div className="row">
                    <div className={`col-12`}>
                        <div className="main-info-container text-center">
                            <h1>Jorge Yael Espinosa Ruiz</h1>
                            <h2>Senior Front End Developer</h2>
                            <div>{i18n.career}</div>
                        </div>

                        <div className="salle-container">
                            <img src={`./assets/img/logos/salle.png`} alt="" />
                        </div>

                    </div>
                    <div className={`summary__sub-info-container`}>
                        < InfoSegment
                            title="Quick Summary"
                            desc={objective}
                        />
                        <div className={`summary__photo-container`}>
                            <img src={`./assets/img/photo.png`} alt="" className="photo" />
                            <div className="align-right copy-to-clipboard">
                                <a data-tooltip-id='phone' data-tooltip-content='Copy to clipboard' onClick={() => copyToClipboard('+525531004755')} className="clicked-flash" >
                                    < Tooltip id='phone' />
                                    <p ><FaSquarePhone size="25" /> +52 5531004755</p>
                                </a>
                                <a data-tooltip-id='email' data-tooltip-content='Copy to clipboard' onClick={() => copyToClipboard('jyer94@gmail.com')} className="clicked-flash">
                                    < Tooltip id='email' />
                                    <p ><MdEmail size="25" /> jyer94@gmail.com</p>
                                </a>
                            </div>
                            <div>
                                <span onClick={openLinkedIn} className="copy-to-clipboard"><FaLinkedin size="30" color="#0a66c2" /></span>
                                <span onClick={openGithub} className="copy-to-clipboard"><FaSquareGithub size="30" /></span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="text-center p-3">
                < InfoSegment title="Technologies & Tools" />
                <Technology lstTechnologies={lstTechnologies.filter(item => item.professional)} />
                <InfoSegment title="Experience" />
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

            <div className="text-center">
                < InfoSegment title="Courses" desc="I like to be up to date with current technologies." />
            </div>
            <div className="p-3c container">
                <ul>
                    <li>2025 Next Js Ecommerce - Shopping Platform From Scratch.</li>
                    <li>2024 NextJS and React - The Complete Guide (Udemy).</li>
                    <li>2024 React with Redux and MERN.</li>
                    <li>2023 React – from beginner to expert (Udemy).</li>
                    <li>2022 React Native (Udemy).</li>
                    <li>2021 Android Developer - Kotlin (Udemy).</li>
                    <li>2021 Ionic 6+: Create IOS, Android and PWAs applications with Angular (Udemy).</li>
                    <li>2021 Illustrator (Udemy).</li>
                    <li>2019 Ionic 4: Create IOS, Android and PWAs applications with Angular (Udemy). </li>
                </ul>
            </div>

            <Waves />
        </div >
    )

}