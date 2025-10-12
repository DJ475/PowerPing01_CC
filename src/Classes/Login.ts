
import {NavigateFunction, replace, useNavigate } from "react-router-dom";


export class LoginUser
{
    private navigatorOBJ: NavigateFunction
    constructor(navigatorOBJ: NavigateFunction)
    {
        this.navigatorOBJ = navigatorOBJ;
    }

    private username!: string;
    private password!: string;

    public setUsername(username: string)
    {
        this.username = username;
    }

    public setPassword(password: string)
    {
        this.password = password;
    }

    public login()
    {
        if(this.username && this.password)
        {
            this.LoginAction();
        }
        else
        {
            console.log("Username or Password is Null Value");
        }
    }

    private LoginAction(){
        // TODO: navigate to dashboard if server authentication deems credentials as correct
        this.navigatorOBJ("/Dashboard",{replace:true})
    }
}