export interface ApplicationStatus {
    application: string;
    description: string;
    infras: ApplicationInfras;
}

export declare type ApplicationInfras = ApplicationEnvStatus[];

export interface ApplicationEnvStatus {
    name: string;
    url: string;
    port: number;
    status: boolean
}

export declare type ApplicationStatusHttpResponse = Array<{
    monitor: { application: string, description: string, infras: ApplicationEnvStatus }
}>;