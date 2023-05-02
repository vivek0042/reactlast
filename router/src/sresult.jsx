import react from 'react'

const Sresult=(props)=>{
    const img=`https://source.unsplash.com/600x400/?${props.name1} `;
    return(
        <>
        <div>
            <img src={img} alt="viv" />
        </div>

        </>
    )
}
export default Sresult;