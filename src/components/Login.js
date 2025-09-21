import { useState } from "react"

export default function Login(){

    const [isActive,setIsActive]=useState(false);
    return(
        <div className={isActive?"wrapper active":"wrapper"}>{/*Sign In*/}
            <div className="form-wrapper sign-in">
                <form action="">
                    <h2>Sign In</h2>
                    <div className="input-group">
                        <input type="text" required></input>
                        <label for="">Username</label>
                    </div>
                    <div className="input-group">
                        <input type="password" required></input>
                        <label for="">Password</label>
                    </div>
                    <button type="submit">Sign In</button>
                    <div className="signup-link">
                        <p>Don't have an account? <a href="#" 
                        className="signupbtn-link" onClick={
                            (e)=>{
                                e.preventDefault();
                                setIsActive(true);
                            }
                        }>Sign up</a></p>

                    </div>

                </form>

            </div>
            <div className="form-wrapper sign-up">
                <form action="">
                    <h2>Sign Up</h2>
                    <div className="input-group">
                        <input type="text" required></input>
                        <label for="">Username</label>
                    </div>
                    <div className="input-group">
                        <input type="text" required></input>
                        <label for="">Email</label>
                    </div>
                    <div className="input-group">
                        <input type="password" required></input>
                        <label for="">Password</label>
                    </div>
                    <div className="input-group">
                         <label>Role</label>
                        <select>
                            <option value=""></option>
                            <option value="Seeker">Seeker</option>
                            <option value="Job-opener">Job-opener</option>
                        </select>
                       
                        
                    </div>
                    <button type="submit">Sign Up</button>
                    <div className="signin-link">
                        <p>Already have an account? <a href="#" 
                        className="signinbtn-link" onClick={(e)=>{
                            e.preventDefault();
                            setIsActive(false);
                        }}>Sign In</a></p>

                    </div>

                </form>

            </div>
        
        </div>
        
        

    )

};