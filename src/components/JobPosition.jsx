import { useContext } from 'react';
import { AppContext } from '../AppContext';
import './JobPosition.css';
import { JobPositionDesc } from './JobPositionDesc';
import { JobPositionImg } from './JobPositionImg';
import { Technology } from './Technology';

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
                <div className={isMobile || !props.logoPath ? "col" : "col-10"}>
                    <JobPositionDesc {...props} />
                    <Technology lstTechnologies={props.lstTechnologies} small={true} />
                </div>
                {!isMobile && props.logoPath && <div className="col-2">
                    <JobPositionImg logoPath={props.logoPath} />
                </div>
                }
            </div>
        </div>
    )
}
