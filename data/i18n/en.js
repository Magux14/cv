import { lstTechnologies } from "./technologies";

export const i18nEng = {

    career: 'Cybernetics and Computer Systems Engineer',
    objective:
        `Create high quality software following the best practices.
My best skill is the creation of mobile applications using Ionic Framework with Angular.`,
    lstTechnologies: lstTechnologies,
    lstPersonalProjects: [
        {
            title: 'Personal Video Game',
            company: 'Unity',
            desc: 'I always wanted to create a video game, so I investigate how to use Unity and I created a little piece of a game. This is a RPG game, you are at the school and crazy stuff happens every day. Cova (the main character) has to fight against many enemies avoiding their attacks. I haven\'t finished this game yet, this is a little demo though.',
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
                'https://www.youtube.com/embed/95fxS7eKxAs'
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
                    || item.img == 'capacitor'
                )
            ],
            lstImgs: [
                'apps/finanzas/1.png',
                'apps/finanzas/2.png'
            ],
            lstVideos: []
        },
        {
            title: 'Pokemon Trainer',
            company: 'React',
            desc: 'I wanted to create mobile and real life board game, so this app is to catch pokemon, if you answer correctly is yours! I haven\'t finished the physical game yet...',
            lstTechnologies: [
                ...lstTechnologies.filter(item =>
                    item.img == 'react'
                    || item.img == 'javascript'
                )
            ],
            lstVideos: [
                'https://www.youtube.com/embed/PwDh9TDkm3g'
            ]
        },
        {
            title: 'Boardgame App',
            company: 'Ionic Angular',
            desc: 'I really like Mario Party, so I created an App to play with a physical board game, it\'s like the video game but in real life.',
            lstResponsabilities: [
            ],
            lstTechnologies: [
                ...lstTechnologies.filter(item =>
                    item.img == 'ionic'
                    || item.img == 'angular'
                    || item.img == 'typescript'
                    || item.img == 'capacitor'
                )
            ],
            lstImgs: [],
            lstVideos: [
                'https://www.youtube.com/embed/3jxowsHhc6A?si=xExFTYcMK1SnmOuF'
            ]
        },
        {
            title: 'Python Scripting',
            Company: 'Python 3',
            desc: 'Time to time I like to play with scripting, making some usefull stuff with python (nothing complex)',
            lstResponsabilities: [
                'Getting all wifi passwords of a computer.',
                'When I gave IT classes to elder people I liked to face them with a quizz, with python I made quick random selector of my students.'
            ],
            lstTechnologies: [
                ...lstTechnologies.filter(item =>
                    item.img == 'python'
                )
            ],
            lstImgs: [],
            lstVideos: []
        },

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
                    || item.img == 'capacitor'
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
                    || item.img == 'capacitor'
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
                    || item.img == 'cordova'
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
                'Basic automation scripting with python 2',
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
