import { Fragment } from "react"



function Myloginpage()
{
    return <h1>this is first element </h1>
}

export default Myloginpage

export function Myloginpage1()
{
    return(
        <Fragment>
        <h1 style={{color:"red",backgroundColor:"orange"}}>return the multi elements</h1>
        <h1>return the multi elements</h1>
        <h1 className="first">return the multi elements</h1>
        <h1>return the multi elements</h1>
        <h1>return the multi elements</h1>
        </Fragment>
    )
}

