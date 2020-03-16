import React , {Component} from 'react';
import './App.css';
import data from "./data.js";
import Image from "./card.js"


class App  extends Component {
  constructor(props){
    super(props);
    this.state = {
      properties: data.properties,
      property:data.properties[1]

    }
  }

  nextImage = ()=>{
     if (this.state.property.index+1 === 6){
        const newImage =this.state.property.index-4;
        this.setState({
          property:data.properties[newImage]
        })
     }else{
        const newImage = this.state.property.index+1;
    this.setState({
      property:data.properties[newImage]
    })
     }
    
  }
  
  prevImage = ()=>{
    if (this.state.property.index-1 === 0){
      const newImage =this.state.property.index+4;
    this.setState({
      property:data.properties[newImage]
    })
  }else{
    const newImage = this.state.property.index-1;
this.setState({
  property:data.properties[newImage]
})
 }
}


  render(){
    const {properties,property}= this.state;

    return(
        <div className = "App" >
            <header>
                <h2>MY SLIDESHOW</h2>
                <p>this is my react slideshow with a server</p>
            </header>
            <button  className="next"
                onClick={() => this.nextImage()}
                disabled={property.index === data.properties.length-1}>
                    Next
            </button>
            <button className="previous"
            onClick={() => this.prevImage()}
            disabled={property.index === 0}>
                prev
            </button> <br/>
            <br/>
            <div className="page ">
                <div className="col">
                    <div className={`cards-slider active-slide-${property.index} `}>
                        <div className="cards-slider-wrapper" style={{'transform':`translateX(-${property.index*(100/properties.length)}%)`}}>
                            {
                                properties.map(property => <Image key={property._id} property={property}/>)
                            }
                        </div><br/>
                       
                    </div>
                    
                </div>
                
             </div><br/>
             <p className="footer">React Slideshow © Peter J Tshiani. All rights reserved.</p>
             
             </div>
             
              
             
        )
  }

      

}

export default App;