import React from 'react';
import {IoChevronDown } from "react-icons/io5";
import {useHistory} from "react-router-dom"

const CareerDetails = ({details}:any) => {
const history=useHistory()
    function handleToggle(e: React.MouseEvent<SVGElement, MouseEvent>|HTMLElement|any) {
        let path;
        let svgPath;
        if(e.target.nodeName==="svg"){
            path=e.target.parentElement.nextSibling
            svgPath=e.target
        }

        if(e.target.nodeName==="path") {
            path=e.target.parentElement?.parentElement.nextElementSibling
            svgPath=e.target.parentElement

        }

        if(path.classList.contains("activeToggle")){
            path.classList.toggle("activeToggle")
            path.style.maxHeight="0px"
            svgPath.style.transform="rotate(0deg)"
            svgPath.classList.toggle("activeSvg")
        }else {
            path.classList.toggle("activeToggle")
            path.style.maxHeight = path.scrollHeight + "px"
            svgPath.style.transform="rotate(-180deg)"
            svgPath.classList.toggle("activeSvg")
        }
    }

    return(
    <>
        <div className="details">
            <p>{details.about}</p>
            <span className="responsespan">
            <h3>Responsibilities</h3>
                <IoChevronDown  onClick={(e)=>handleToggle(e)}/>
            </span>
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
            <span className="requirespan">
            <h3>Requirements</h3>
                <IoChevronDown onClick={(e)=>handleToggle(e)}/>
            </span>
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
                <button type={'button'} onClick={()=>history.push('/apply')}>Apply</button>
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