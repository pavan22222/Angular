export class Employee{

    private _id:number;
    private _name:string;
    private _designation:string;
    private _salary:number;

    public set id(pid:number){
        this._id=pid;
    }

    public get id(){
        return this._id;
    }

    public set name(pname:string){
        this.name=pname;
    }

    public get name(){
        return this._name;
    }

    public set designation(pdesignation:string){
        this._designation=pdesignation;
    }

    public get designation(){
        return this._designation;
    }

    public set salary(psalary:number){
        this._salary=psalary;
    }

    public get salary(){
        return this._salary;
    }





}