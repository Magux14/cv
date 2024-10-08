import { lstTechnologies } from "./technologies";

export const i18nEs = {

    objective:
        `Crear software de calidad con las mejores prácticas, mi mejor habilidad es crear aplicaciones móviles utilizando Ionic Framework con Angular.`,
    lstTechnologies: lstTechnologies,
    lstPersonalProjects: [
        {
            title: 'Personal Video Game',
            company: 'Unity',
            desc: 'I Always wanted to create a video game, so I investigate how to use Unity and I created a little piece of a game. This is a RPG game you are at the school and crazy stuff happens every day. Cova (the main character) has to fight against many enemies avoiding their attacks. I haven\'t finished this game yet but this is a little test',
            lstResponsabilities: [
            ],
            lstTechnologies: [
                ...lstTechnologies.filter(item =>
                    item.img == 'unity'
                    || item.img == 'csharp'
                )
            ],
            lstImgs: [],
            lstVideos: [
                'https://www.youtube.com/watch?v=95fxS7eKxAs'
            ]
        },
        {
            title: 'Personal Finances App',
            company: 'Ionic Angular',
            desc: 'Living in couple may be a little challenging talking about money. I created an App to handle my finances to control every spend I have.',
            lstResponsabilities: [
            ],
            lstTechnologies: [
                ...lstTechnologies.filter(item =>
                    item.img == 'ionic'
                    || item.img == 'angular'
                    || item.img == 'firebase'
                    || item.img == 'typescript'
                )
            ],
            lstImgs: [],
            lstVideos: []
        },
        {
            title: 'Boardgame App',
            Company: 'Ionic Angular',
            desc: 'I really like Mario Party, so I created an App to play with a boardgame, it\'s like the video game but in real life.',
            lstResponsabilities: [
            ],
            lstTechnologies: [
                ...lstTechnologies.filter(item =>
                    item.img == 'ionic'
                    || item.img == 'angular'
                    || item.img == 'typescript'
                )
            ],
            lstImgs: [],
            lstVideos: []
        },
        {
            title: 'Python Scripting',
            Company: 'Pyhton 3',
            desc: 'Time to time I like to play with scripting, making some usefull stuff with python (nothing complex)',
            lstResponsabilities: [
                'Getting all wifi passwords of a computer.',
                'When I gave IT classes to elder people I liked to face them with a quizz, with pyhton I made quick random selector of my students.'
            ],
            lstTechnologies: [
                ...lstTechnologies.filter(item =>
                    item.img == 'python'
                )
            ],
            lstImgs: [],
            lstVideos: []
        }
    ],
    lstJobs: [
        {
            company: 'Definity First',
            date: 'October 2021 - Current',
            title: 'Frontend Developer Sr.',
            lstResponsabilities: [
                'Create and support an insurance app with Ionic 6 + Capacitor 4',
                'Give support and create new modules for a web page with ASP .NET + Jquery + SQL Server + React'
            ],
            logoPath: 'definity',
            lstTechnologies: [
                ...lstTechnologies.filter(item =>
                    item.img == 'javascript'
                    || item.img == 'typescript'
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
                    || item.img == 'sqlite'
                    || item.img == 'csharp'
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
                    item.img == 'typescript'
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
                'Development of hybrid mobile applications(Android / iOS) with Ionic(3, 4, 5), implementing Cordova plugins and custom ones with native Java/ Swift 5 code. ',
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
                    || item.img == 'typescript'
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
                    || item.img == 'csharp'
                    || item.img == 'java'
                )
            ]
        },
        {
            company: 'TOWA',
            date: 'January 2018 – November 2018',
            title: '.NET Developer',
            lstResponsabilities: [
                'Give support and create new modules for a web page with .NET Core 2 + Jquery + SQL Server'
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
                    || item.img == 'csharp'
                )

            ]
        },
        {
            company: 'Ashcroft Instruments México',
            title: 'IT Trainee',
            date: 'May 2017- January 2018',
            lstResponsabilities: [
                'DB Manager JR',
                'Basic automation scripting with pyhton 2',
                'It client support',
                'Hardware maintenance'
            ],
            logoPath: 'ashcroft',
            lstTechnologies: [
                ...lstTechnologies.filter(item =>
                    item.img == 'sqlserver'
                    || item.img == 'python'
                )
            ]
        }
    ]

}
