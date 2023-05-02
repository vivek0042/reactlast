import react from 'react'


function Card(props){
    const style={
        width:"18rem",
        height:"28.6rem",
        display:"flex",
        color:"green",
        display:"flex",
        backgroundColor:"black"
    };
    const style1={
        display:"flex",
        float:"left",
    }
    
    console.log(props);
    return(
      
        <>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"/>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"></script> 
         <div className='cards' style={{style1}}>
            <div className='card' style={{...style}}> 
            <img src={props.imgsrc} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.sname}</p>
            <a href={props.link} className="btn btn-primary">Click</a>
            </div>
            </div> 
         </div>
        </>  
     )}     
          /* <div className='cards'>
            <div className='card'>
              <img 
                src={props.imgsrc} 
                alt="pic" 
                className='card_img'
              />
              <div className='card__info'>
                <span className='card_category'>{props.title}</span>
                <h3 className='card_title'>{props.sname}</h3>
                <a href={props.link} target="blank">
                  <button>Watch Now</button>
                </a>
              </div>
            </div>
          </div> */
         
      
      
export default Card      