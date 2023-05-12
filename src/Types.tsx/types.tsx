export interface data {
    id:string;
    name:string;
    email:string;
    status:boolean;
    role:string;
    test:string;
}

export interface Data {
    
}


export interface sliceData {
	data: any;
	page: number;
	rowsPerPage:number;
	path: string;
}