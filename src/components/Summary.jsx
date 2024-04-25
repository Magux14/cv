import { InfoSegment } from "./InfoSegment";
import { JobPosition } from "./JobPosition";


const lstJobs = [
    {
        company: 'Definity First',
        title: 'Ionic Sr. Developer',
        lstResponsabilities: [
            'Create and support an insurance app with Ionic 6 + Capacitor 4',
            'Give support and create new modules for a web page with .NET + Jquery + SQL Server'
        ],
        logoPath: ''
    },
    {
        company: 'Vision Consulting',
        title: 'Mobile Development Leader',
        lstResponsabilities: [
            'Development of hybrid mobile applications(Android / iOS) with Ionic(5) + Capacitor 2. ',
            'Management of the following concepts in Ionic: reusable components, rxjs, async - await, promises, APIS, web requests, dynamic forms, observable, among others... ',
            'SCRUM for agile development, user stories, daily meetings, etc. ',
            'Unit and integration testing. ',
            'Code quality control. ',
            'Version control through Git, using different branches, integrating the code of the other developers.',
        ],
        logoPath: ''
    },
    {
        company: 'Process Management and Solutions',
        title: 'Mobile Development Leader',
        lstResponsabilities: [
            'Development of hybrid mobile applications(Android / iOS) with Ionic(3, 4, 5), implementing Cordova ',
            'plugins and custom ones with native Java/ Swift 5 code. ',
            'Management of the following concepts in Ionic: reusable components, rxjs, async - await, promises, APIS, web requests, dynamic forms, observable, among others... ',
            'Connection with bluetooth peripherals(smart bracelet with vital signs taking). ',
            'Implement push notifications with Firebase. ',
            'Consumption and creation of REST microservices, JSON with .NET Core 2. ',
            'Management of SQL Server / MySQL database, creation of Stored Procedures. ',
            'SCRUM for agile development, user stories, daily meetings, etc. ',
            'Unit and integration testing. ',
            'Code quality control. ',
            'Version control through Git, using different branches, integrating the code of the other developers. ',
        ],
        logoPath: ''
    },
    {
        company: 'TOWA',
        title: '.NET Developer',
        lstResponsabilities: [
            'Give support and create new modules for a web page with .NET + Jquery + SQL Server'
        ],
        logoPath: ''
    },
    {
        company: 'Ashcroft Instruments Mexico',
        title: 'IT Trainee',
        lstResponsabilities: [
            'DB Manager JR',
            'Basic automation scripting',
            'It client support',
            'Hardware maintenance'
        ],
        logoPath: ''
    }
]

export const Summary = () => {
    return (
        <div>
            <h1>Jorge Yael Espinosa Ruiz</h1>
            <h2>Front End Developer</h2>
            <InfoSegment
                title="Objective"
                desc="Realizar software de utilidad y calidad, aplicando las mejores prácticas de programación.
                en mi área constantemente, capacitándome con las tecnologías más recientes."
            />

            <InfoSegment
                title="Objective"
                desc="Realizar software de utilidad y calidad, aplicando las mejores prácticas de programación.
            Mejorar en mi área constantemente, capacitándome con las tecnologías más recientes."
            />

            {lstJobs && lstJobs.map(item => <JobPosition key={item.company} {...item} />)}
        </div >
    )
}