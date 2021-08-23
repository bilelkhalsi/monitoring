import { ApplicationStatusHttpResponse } from './monitoring.model';

export const APPLICATION_MONITORING_MOCK: ApplicationStatusHttpResponse = [
    {
        monitor: {
            application: "SOF",
            description: "SOFT Release",
            infras: {
                name: "DEV",
                url: "sofd.grouperci.com",
                status: true,
                port: 56040
            }
        }
    },
    {
        monitor: {
            application: "SOF",
            description: "SOFT Release",
            infras: {
                name: "VALIDE",
                url: "sofv.grouperci.com",
                status: true,
                port: 57040
            }
        }
    },
    {
        monitor: {
            application: "SOF",
            description: "SOFT Release",
            infras: {
                name: "PPROD",
                url: "sofp.grouperci.com",
                status: true,
                port: 58040
            }
        }
    },
    {
        monitor: {
            application: "SOF",
            description: "SOFT Release",
            infras: {
                name: "PROD",
                url: "sofp.grouperci.com",
                status: true,
                port: 58040
            }
        }
    },
    {
        monitor: {
            application: "nomApplication2",
            description: "description de l'application",
            infras: {
                name: "DEV",
                url: "http://monadress",
                status: false,
                port: 58040
            }
        }
    },
    {
        monitor: {
            application: "nomApplication2",
            description: "description de l'application",
            infras: {
                name: "VALIDE",
                url: "http://monadress",
                status: false,
                port: 58040
            }
        }
    },
    {
        monitor: {
            application: "nomApplication2",
            description: "description de l'application",
            infras: {
                name: "PPROD",
                url: "http://monadress",
                status: false,
                port: 58040
            }
        }
    },
    {
        monitor: {
            application: "nomApplication2",
            description: "description de l'application",
            infras: {
                name: "PROD",
                url: "http://monadress",
                status: false,
                port: 58040
            }
        }
    },
    {
        monitor: {
            application: "nomApplication3",
            description: "description de l'application",
            infras: {
                name: "DEV",
                url: "http://monadress",
                status: false,
                port: 58040
            }
        }
    },
    {
        monitor: {
            application: "nomApplication3",
            description: "description de l'application",
            infras: {
                name: "VALIDE",
                url: "http://monadress",
                status: false,
                port: 58040
            }
        }
    },
    {
        monitor: {
            application: "nomApplication3",
            description: "description de l'application",
            infras: {
                name: "PPROD",
                url: "http://monadress",
                status: false,
                port: 58040
            }
        }
    },
    {
        monitor: {
            application: "nomApplication3",
            description: "description de l'application",
            infras: {
                name: "PROD",
                url: "http://monadress",
                status: false,
                port: 58040
            }
        }
    },
    {
        monitor: {
            application: "nomApplication4",
            description: "description de l'application",
            infras: {
                name: "DEV",
                url: "http://monadress",
                status: false,
                port: 58040
            }
        }
    },
    {
        monitor: {
            application: "nomApplication4",
            description: "description de l'application",
            infras: {
                name: "VALIDE",
                url: "http://monadress",
                status: false,
                port: 58040
            }
        }
    },
    {
        monitor: {
            application: "nomApplication4",
            description: "description de l'application",
            infras: {
                name: "PPROD",
                url: "http://monadress",
                status: false,
                port: 58040
            }
        }
    },
    {
        monitor: {
            application: "nomApplication4",
            description: "description de l'application",
            infras: {
                name: "PROD",
                url: "http://monadress",
                status: false,
                port: 58040
            }
        }
    }
];