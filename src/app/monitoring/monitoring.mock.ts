import { ApplicationStatusHttpResponse } from './monitoring.model';

export const APPLICATION_MONITORING_MOCK: ApplicationStatusHttpResponse = {
    "monitor": [
        {
            "application": "nomApplication1",
            "description": "description de l'application",
            "infras": [
                {
                    "name": "DEV",
                    "url": "http://monadress",
                    "status": "UP"

                },
                {
                    "name": "VALIDE",
                    "url": "http://monadress",
                    "status": "UP"

                },
                {
                    "name": "PPROD",
                    "url": "http://monadress",
                    "status": "UP"

                },
                {
                    "name": "PROD",
                    "url": "http://monadress",
                    "status": "UP"

                }

            ]
        },
        {
            "application": "nomApplication2",
            "description": "description de l'application",
            "infras": [{
                "name": "DEV",
                "url": "http://monadress",
                "status": "DOWN"

            },
            {
                "name": "VALIDE",
                "url": "http://monadress",
                "status": "DOWN"

            },
            {
                "name": "PPROD",
                "url": "http://monadress",
                "status": "UP"

            },
            {
                "name": "PROD",
                "url": "http://monadress",
                "status": "UP"

            }

            ]
        },
        {
            "application": "nomApplication3",
            "description": "description de l'application",
            "infras": [{
                "name": "DEV",
                "url": "http://monadress",
                "status": "DOWN"

            },
            {
                "name": "VALIDE",
                "url": "http://monadress",
                "status": "DOWN"

            },
            {
                "name": "PPROD",
                "url": "http://monadress",
                "status": "UP"

            },
            {
                "name": "PROD",
                "url": "http://monadress",
                "status": "UP"

            }

            ]
        },
        {
            "application": "nomApplication4",
            "description": "description de l'application",
            "infras": [{
                "name": "DEV",
                "url": "http://monadress",
                "status": "DOWN"

            },
            {
                "name": "VALIDE",
                "url": "http://monadress",
                "status": "DOWN"

            },
            {
                "name": "PPROD",
                "url": "http://monadress",
                "status": "UP"

            },
            {
                "name": "PROD",
                "url": "http://monadress",
                "status": "UP"

            }]
        }]
};