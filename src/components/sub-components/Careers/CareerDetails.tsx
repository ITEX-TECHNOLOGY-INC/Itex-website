import React from 'react';

const CareerDetails = ({details}:any) => {
    console.log(details)
return(
    <>
        <div className="details">
            <p>{details.about}</p>
            <h3>Responsibilities</h3>
            <div className="responsibilities">
            <ul>
                {
                details.responsibilities.map((m:{id:number,data:string})=>{
                    return(
                        <li key={m.id}>{m.data}</li>
                    )
                })
            }
            </ul>
            </div>
            <h3>Requirements</h3>
            <div className="requirements">
                <ul>
                    {
                        details.requirements.map((m:{id:number,data:string})=>{
                            return(
                                <li key={m.id}>{m.data}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="compensation">
                <h3>Compensation</h3>
                <p>{details.compensation}</p>
            </div>
            <div className="apply">
                <h3>How to Apply</h3>
                <p>{details.apply}</p>
            </div>
            <div className="note">
                <h3>Note</h3>
                <p>{details.note}</p>
            </div>
        </div>
    </>
)

};

export default CareerDetails;