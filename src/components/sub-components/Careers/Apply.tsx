import React from 'react';


const Apply = () => {

    const personal=[{"id":1,"type":"text","text":"Please enter your first name"},{"id":2,"type":"text","text":"Please enter your last name"},{"id":3,"type":"email","text":"please enter your email id"},{"id":4,"type":"tel","text":"Please enter your phone number"}]

    const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <>
            <div className="application">
                <form onSubmit={(e) => handlesubmit(e)} encType={'multipart/form-data'}>
                    <div className="personaldetails">
                        <h2>Personal details</h2>
                        {
                            personal.map(i=>
                                <input key={i.id} type={i.type} placeholder={i.text}/>
                            )
                        }
                    </div>
                    <div className="careerdetails">
                    </div>
                    <div className="files">
                        <input type={'file'} accept={".doc,.docx,.pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"}/>
                    </div>
                    <div className="submit">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </>
    );
};

Apply.propTypes = {};

export default Apply;