export interface ApplicationStatus {
    application: string;
    description: string;
    infras: ApplicationInfras

}

export declare type ApplicationInfras = ApplicationEnvStatus[];

export interface ApplicationEnvStatus {
    name: string;
    url: string;
    status: 'UP' | 'DOWN'
}

export declare type ApplicationStatusHttpResponse = { monitor: ApplicationStatus[] };