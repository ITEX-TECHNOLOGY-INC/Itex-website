import React from 'react';

const Contact = () => {

    const handleform = (e:any) => {

        e.preventDefault()
        console.log(e.target[0].value)
    }
    const contactform = [{
        'title': 'Please enter the subject',
        'type': 'text',
        nameinput: 'subject'
    }, {'title': 'Enter your Name', 'type': 'text', nameinput: 'name'}, {
        'type': 'email',
        'title': 'Enter your Email address',
        nameinput: 'email'
    }]
    return (
        <div className={`contactus`}>
            <form onSubmit={(e) => {
               handleform(e)
            }}>
                {
                    contactform.map((m: { title: string, type: string, nameinput: string }) => {
                        return (
                            <input key={m.title} type={m.type} placeholder={m.title} name={m.nameinput}/>
                        )
                    })
                }
                <textarea name={'feedback'} placeholder={`Enter your Feedback/Query`}></textarea>
                <input type={`submit`} value={`submit`}/>
            </form>
        </div>
    );
};

export default Contact;