export class Employee {
    private _name:any;
    private _age:any;
    private _email:any;

    setName(pname:string){
        this._name=pname;
    }
    get name(){
        return this._name;
    }

    setAge(page:number){
        this._age=page;
    }
    get age(){
        return this._age;
    }

    setEmail(pemail:string){
        this._email=pemail;
    }
    get email(){
        return this._email;
    }
}
