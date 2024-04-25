import './JobPosition.css';
import { JobPositionDesc } from './JobPositionDesc';
import { JobPositionImg } from './JobPositionImg';
import { Technology } from './Technology';

export const JobPosition = (props) => {
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
                <div className="col-9">
                    <JobPositionDesc {...props} />
                    <br />
                    <Technology lstTechnologies={props.lstTechnologies} small={true} />
                </div>
                <div className="col-3">
                    <JobPositionImg logoPath={props.logoPath} />
                </div>
            </div>
        </div>
    )
}
