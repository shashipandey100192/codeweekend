import React, { PureComponent } from "react";

export class Mychildclass extends PureComponent{
    render(props)
    {
        return <div>
            
                <h1>this is class Child class component: </h1>
                {this.props.user}
            </div>
    }


}