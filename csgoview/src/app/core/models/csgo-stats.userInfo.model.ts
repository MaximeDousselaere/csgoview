export class UserInfo{
    userId : any;
    isPremium : any;
    isVerified : any;
    isInfluencer : any;
    isPartner : any;
    countryCode : any;
    customAvatarUrl : any;
    customHeroUrl : any;
    socialAccounts : any;
    pageviews : any;
    isSuspicious : any;

    constructor(userId : any, isPremium : any, isVerified : any, isInfluencer : any, isPartner : any, countryCode : any,
                customAvatarUrl : any, customHeroUrl : any, socialAccounts : any, pageviews : any, isSuspicious : any ){
        this.userId = userId;
        this.isPremium = isPremium;
        this.isVerified = isVerified;
        this.isInfluencer = isInfluencer;
        this.isPartner = isPartner;
        this.countryCode = countryCode;
        this.customAvatarUrl = customAvatarUrl;
        this.customHeroUrl = customHeroUrl;
        this.socialAccounts = socialAccounts;
        this.isSuspicious = isSuspicious;
    }
}