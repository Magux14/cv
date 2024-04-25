import './JobPosition.css';
import { JobPositionDesc } from './JobPositionDesc';
import { JobPositionImg } from './JobPositionImg';

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
                </div>
                <div className="col-3">
                    <JobPositionImg logoPath={props.logoPath} />
                </div>
            </div>
        </div>
    )
}
