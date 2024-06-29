import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Myregistor() {


const {register,handleSubmit,formState: { errors }}=useForm()

const myformsubmit = (e)=>{
    console.log(e);
}


    return (
        <form onSubmit={handleSubmit(myformsubmit)}>
        <div className='container'>
            <div className='row justify-content-md-center'>
                <div className='col-md-8'>
                    <div className='container-fluid border p-5 mt-5 shadow rounded bg-light'>
                        <div className='row'>
                            <div className='col-12 text-center '>
                                <h2>User Registor Page</h2>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">FullName</label>
                                    <input type="text" class="form-control" {...register("fullname",{required:true,minLength:5,maxLength:10})} />
                                    {/* {errors.fullname && <p className='text-danger'>required full name</p>} */}

                                    {errors.fullname ?.type==="required" && (<p className='text-danger'>required full name</p>)}
                                    {errors.fullname ?.type==="maxLength" && (<p className='text-danger'>maximum 10 chrek</p>)}
                                    {errors.fullname ?.type==="minLength" && (<p className='text-danger'>minimum 5  chare</p>)}
                
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Email Id</label>
                                    <input type="email" class="form-control" {...register("email",{required:true})} />
                                    {errors.email && <p className='text-danger'>required email id</p>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Select Course</label>
                                    <select className='form-control' {...register("course")}>
                                        <option>Mern</option>
                                        <option>Mean</option>
                                        <option>Java</option>
                                        <option>Excel</option>
                                        <option>Web</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Phone No</label>
                                    <input type="text" class="form-control" {...register("phone")}/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Gender</label><br />
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gender" value="mail" {...register("gender")} />
                                        <label class="form-check-label">Male</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gender" value="female"  {...register("gender")}/>
                                        <label class="form-check-label" >Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">DOB</label>
                                    <input type="date" class="form-control" {...register("dob")}/>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Type Comments</label>
                                    <div class="form-floating">
                                        <textarea class="form-control" {...register("comment")}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 text-center'>
                                <input type='submit' value="Registor Now" className='btn btn-success shadow' />
                                <input type='reset' value="cancle" className='btn btn-danger ms-3 shadow' />
                                <Link to="/">Login Page</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
    )
}

export default Myregistor