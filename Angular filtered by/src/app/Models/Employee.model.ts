export class Employee
{
    id: number;
    name: string;
    location: string;
    gender: string;
    isActive: boolean;

    constructor(id:number, name: string, location: string, Gender: string,isActive:boolean)
    {
        this.id=id;
        this.location=location;
        this.name=name;
        this.gender=Gender;
        this.isActive=isActive;

    }
}