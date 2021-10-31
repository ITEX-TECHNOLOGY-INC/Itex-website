import web from '../../../Images/web.svg'
import data from '../../../Images/data.svg'
import seo from '../../../Images/seo.svg'
import mobile from '../../../Images/mobile.svg'
type o={
    id:number,
    text:string,
    image:string
}
const Servicecard = ({services}:any) => {
    const imgs=[web,mobile,data,seo]

    return (
     services.map((m:o,i: number)=>{
         return(
             <div className={`service`} key={m.id}>
                 <p>{m.text}</p>
                 {console.log(i)}
                 <img src={imgs[i]} alt="Illustration" loading="lazy"></img>
             </div>
         )
     })
    );
};

export default Servicecard;