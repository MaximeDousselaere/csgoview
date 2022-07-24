export class StatCategory{
    rank : any;
    percentile : number;
    displayName : string;
    displayCategory : string;
    category : string;
    metadata : any;
    value : number;
    displayValue : string;
    displayType : string;

    constructor(rank : any, percentile : number, displayName : string,displayCategory : string, category : string, metadata : any, value : number, displayValue : string, displayType : string){
        this.rank = rank;
        this.percentile = percentile;
        this.displayName = displayName;
        this.displayCategory = displayCategory;
        this.category = category;
        this.metadata = metadata;
        this.value = value;
        this.displayValue = displayValue;
        this.displayType = displayType
    }
}