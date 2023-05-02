import Card from './Card';

const favser='Shark Tank India';
const Fav=(props)=>{
  if(favser==='TMKOC'){
    return(
      <Card
    imgsrc="https://origin-staticv2.sonyliv.com/videoasset_images/tmkoc22_landscape_thumb.jpg"
    title="Sony liv content"
    sname="TMKOC"
    link="https://www.sonyliv.com/shows/taarak-mehta-ka-ooltah-chashmah-1700000084"
  />
  )}
  
  else if(favser==="Master chef"){
    return(
      <Card
    imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTLt3WDnXDfxeAqiSM5qLG2L0z7mMzK7G6Qw&usqp=CAU"
    title="Sony liv content"
    sname="Master chef"
    link="https://www.sonyliv.com/shows/masterchef-india-1700001090/agni-pariksha-challenge-1000211004"
  />
    )}
  else{
    return(
      <Card
    imgsrc="https://origin-staticv2.sonyliv.com/videoasset_images/sharktank7_landscape_thumb1.jpg"
    title="Sony liv content"
    sname="Shark Tank India"
    link="https://www.sonyliv.com/shows/shark-tank-india-1700000741/creating-valuable-businesses-1000211044"
  />
    )
  }  
}

export default Fav