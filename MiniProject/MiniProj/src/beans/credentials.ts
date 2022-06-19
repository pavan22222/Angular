export class Credentials {

    private _userName!: string;
    private _password!: string;

    public set userName(puserName:string){
        this._userName=puserName;
    }

    public get userName(){
        return this._userName;
    }

    public set password(ppassword:string){
        this._password=ppassword;
    }

    public get password(){
       return this._password;
    }

}
