import { useState } from 'react';
import { validateEmail } from "../utils";


function ContactPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
     const [email, setEmail] = useState("");
    const [CompanyName, setCompanyName] = useState("");
    const [Message, setMessage] = useState("");

        const EmailValidator = (e) => {
            const emailValue = e.target.value;
            setEmail(emailValue);
            validateEmail(emailValue);
        }

        const getIsFormValid = () => {            
            if (firstName.trim() === "" || !validateEmail(email) || Message.trim().length <= 2) {
            return false;
            
            } else {
            return true;
            
            }
        };

        const handleSubmission = (e) => {
           e.preventDefault();
        }
  
        return (
            <div className='mx-auto w-md-100 contactForm mt-5'>
               <form onSubmit={handleSubmission}>
                <fieldset>
                    <div className="Field"> 
                        <label className="fs-6 fw-bold" htmlFor='firstName'> 
                            First name <sup>*</sup> 
                        </label> 
                         <input name='firstName' value={firstName}  onChange={(e) => { setFirstName(e.target.value);}} placeholder="First name" />
                    </div>

                    <div className="Field"> 
                        <label className="fs-6 fw-bold" htmlFor='lastName'> 
                            Last name
                        </label> 
                         <input name='lastName' value={lastName}  onChange={(e) => { setLastName(e.target.value);}} placeholder="Last name" />
                    </div>

                    <div className="Field">
                        <label className="fs-6 fw-bold" htmlFor='email'> Email address <sup>*</sup> </label>
                        <input name='email' placeholder="Email address" value={email} onChange={EmailValidator}/>
                    </div>
                    <div className="Field"> 
                        <label className="fs-6 fw-bold" htmlFor='companyName'> 
                            Company name
                        </label> 
                         <input name='companyName' value={CompanyName}  onChange={(e) => { setCompanyName(e.target.value);}} placeholder="Company name" />
                    </div>

                    <div className="Field"> 
                        <label className="fs-6 fw-bold" htmlFor='message'> Message <sup>*</sup> </label> 
                        <textarea name='message' value={Message} onChange={(e)=> setMessage(e.target.value)} rows="7"></textarea>
                    </div>
                    <button type="submit"  disabled={!getIsFormValid()}> 
                        Submit
                    </button> 
                </fieldset>
               </form>
            </div>
        );
    }


export default ContactPage;