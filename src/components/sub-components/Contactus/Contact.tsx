import React from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

    const sendmail = (data: any, e: any) => {

        emailjs.sendForm('service_h3wdttz', 'template_30hcebi', e.target, 'user_FgcQTuahkGIXucJwpp0Ym')
            .then((result) => {
                alert("Email sent successfully")
                e.target.reset()
            }, (error) => {
                console.log(error);

            });


    }

    const handleform = (e: any) => {

        e.preventDefault()
        const d = {
            'subject': e.target[0].value,
            'name': e.target[1].value,
            'email': e.target[2].value,
            'feedback': e.target[3].value
        }
        sendmail(d, e);
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
            <h2>Contact us</h2>
            <form onSubmit={(e) => {
                handleform(e)
            }}>
                {
                    contactform.map((m: { title: string, type: string, nameinput: string }) => {
                        return (
                            <input key={m.title} type={m.type} placeholder={m.title} name={m.nameinput} required/>
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