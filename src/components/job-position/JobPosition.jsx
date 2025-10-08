import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { JobPositionDesc } from '../job-position-desc/JobPositionDesc';
import { Technology } from '../technology/Technology';
import './job-position.scss';

export const JobPosition = (props) => {
    const { isMobile } = useContext(AppContext);

    return (
        <div className="container job-segment">
            <div className="row">
                {/* {
                    props.imgRight
                        ?
                        <>
                            <div className="col-9">
                                <JobPositionDesc {...props} />
                            </div>
                            <div className="col-3">
                                <JobPositionImg logoPath={props.logoPath} />
                            </div>
                        </>

                        :
                        <>
                            <div className="col-3">
                                <JobPositionImg logoPath={props.logoPath} />
                            </div>
                            <div className="col-9">
                                <JobPositionDesc {...props} />
                            </div>

                        </>
                } */}
                <div >
                    <JobPositionDesc {...props} />
                    <Technology lstTechnologies={props.lstTechnologies} small={true} />
                </div>

            </div>
        </div>
    )
}
