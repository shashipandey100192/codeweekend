import React, { PureComponent } from "react";
import { Mychildclass } from "./Myclasschild";

const username="pankaj singh";

export class Myclasspage extends PureComponent{
    render()
    {
        return <div>
            
                <h1>this is class component</h1>
                <Mychildclass user={username}></Mychildclass>
            
            </div>
    }


}