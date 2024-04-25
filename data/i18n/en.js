export const lstTechnologies = [
    {
        name: 'Ionic Framework, Cordova / Capacitor (2,3,4,5)',
        years: 5,
        img: 'ionic'
    },
    {
        name: 'Angular (8-17)',
        years: 5,
        img: 'angular'
    },
    {
        name: 'React 18',
        years: 2,
        img: 'react'
    },
    {
        name: 'Javascript/Typescript',
        years: 6,
        img: 'javascript'
    },
    {
        name: 'HTML + CSS3',
        years: 6,
        img: 'html'
    },
    {
        name: 'Kotlin',
        years: 1,
        img: 'kotlin'
    },
    {
        name: 'Swift 5',
        years: 1,
        img: 'swift'
    },
    {
        name: 'Sql Server',
        years: 5,
        img: 'sqlserver'
    },
    {
        name: 'My SQL',
        years: 3,
        img: 'mysql'
    },
    {
        name: 'Firebase',
        years: 5,
        img: 'firebase'
    },
    {
        name: 'Git',
        years: 6,
        img: 'git'
    },
    {
        name: 'Web Services (REST / SOAP)',
        years: 5,
        img: 'webservices'
    },
    {
        name: 'ASP .NET',
        years: 2,
        img: 'net'
    },
    {
        name: 'jQuery',
        years: 3,
        img: 'jquery'
    },
    {
        name: 'Bluetooth',
        years: 1,
        img: 'bluetooth'
    },
    {
        name: 'Java',
        years: 1,
        img: 'java'
    },
]
export const lstJobs = [
    {
        company: 'Definity First',
        date: 'October 2021 - Current',
        title: 'Ionic Sr. Developer',
        lstResponsabilities: [
            'Create and support an insurance app with Ionic 6 + Capacitor 4',
            'Give support and create new modules for a web page with .NET + Jquery + SQL Server + React'
        ],
        logoPath: 'definity',
        lstTechnologies: [
            ...lstTechnologies.filter(item =>
                item.img == 'javascript'
                || item.img == 'html'
                || item.img == 'git'
                || item.img == 'ionic'
                || item.img == 'angular'
                || item.img == 'sqlserver'
                || item.img == 'firebase'
                || item.img == 'webservices'
                || item.img == 'react'
                || item.img == 'net'
                || item.img == 'jquery'
            )
        ]
    },
    {
        company: 'Vision Consulting',
        date: 'May 2021 – October 2021',
        title: 'Mobile Development Leader',
        lstResponsabilities: [
            'Development of hybrid mobile applications(Android / iOS) with Ionic(5) + Capacitor 2. ',
            'Management of the following concepts in Ionic: reusable components, rxjs, async - await, promises, APIS, web requests, dynamic forms, observable, among others... ',
            'SCRUM for agile development, user stories, daily meetings, etc. ',
            'Unit and integration testing. ',
            'Code quality control. ',
            'Version control through Git, using different branches, integrating the code of the other developers.',
        ],
        logoPath: 'vision',
        lstTechnologies: [
            ...lstTechnologies.filter(item =>
                item.img == 'javascript'
                || item.img == 'html'
                || item.img == 'git'
                || item.img == 'ionic'
                || item.img == 'angular'
                || item.img == 'firebase'
                || item.img == 'webservices'
            )
        ]
    },
    {
        company: 'Process Management and Solutions',
        date: 'November 2018 – February 2021',
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
        logoPath: 'pm',
        lstTechnologies: [
            ...lstTechnologies.filter(item =>
                item.img == 'javascript'
                || item.img == 'html'
                || item.img == 'git'
                || item.img == 'ionic'
                || item.img == 'angular'
                || item.img == 'firebase'
                || item.img == 'webservices'
                || item.img == 'kotlin'
                || item.img == 'swift'
                || item.img == 'mysql'
                || item.img == 'sqlserver'
                || item.img == 'bluetooth'
                || item.img == 'net'
                || item.img == 'java'
            )
        ]
    },
    {
        company: 'TOWA',
        date: 'January 2018 – November 2018',
        title: '.NET Developer',
        lstResponsabilities: [
            'Give support and create new modules for a web page with .NET + Jquery + SQL Server'
        ],
        logoPath: 'towa',
        lstTechnologies: [
            ...lstTechnologies.filter(item =>
                item.img == 'javascript'
                || item.img == 'html'
                || item.img == 'git'
                || item.img == 'webservices'
                || item.img == 'sqlserver'
                || item.img == 'net'
                || item.img == 'jquery'
            )

        ]
    },
    {
        company: 'Ashcroft Instruments Mexico',
        title: 'IT Trainee',
        date: 'May 2017- January 2018',
        lstResponsabilities: [
            'DB Manager JR',
            'Basic automation scripting',
            'It client support',
            'Hardware maintenance'
        ],
        logoPath: 'ashcroft',
        lstTechnologies: [
            ...lstTechnologies.filter(item =>
                item.img == 'sqlserver'
            )
        ]
    }
]

