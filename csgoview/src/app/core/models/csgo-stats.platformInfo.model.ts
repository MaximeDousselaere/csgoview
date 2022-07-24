export class PlatformInfo{
    platformSlug : string;
    platformUserId : string;
    platformUserHandle : string;
    platformUserIdentifier : string;
    avatarUrl : string;
    additionalParameters : any;

    constructor(platformSlug : string, platformUserId : string, platformUserHandle : string, platformUserIdentifier : string, avatarUrl : string, additionalParameters : any){
        this.platformSlug = platformSlug;
        this.platformUserId = platformUserId;
        this.platformUserHandle = platformUserHandle;
        this.platformUserIdentifier = platformUserIdentifier;
        this.avatarUrl = avatarUrl;
        this.additionalParameters = additionalParameters;
    }
}