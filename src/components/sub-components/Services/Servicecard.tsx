
type o={
    id:number,
    text:string
}
const Servicecard = ({services}:any) => {

    return (
     services.map((m:o)=>{
         return(
             <div className={`service`} key={m.id}>
                 <p>{m.text}</p>
             </div>
         )
     })
    );
};

export default Servicecard;