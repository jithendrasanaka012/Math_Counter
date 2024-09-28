import React from "react";
import "./style.css"
class App extends React.Component{
    constructor(){
      super()
      this.state = {
        number:0,
      }
    }
    p=()=>{
      this.setState({number:this.state.number+1})
  }
  m=()=>{
      this.setState({number:this.state.number-1})
  }
  re=()=>{
      this.setState({number:this.state.number=0})
  }


    render(){
      return(

        <>
              <div id="md">
                
                  <img id="cc" src="Assets/images/counter.jpeg"></img>
                <div id="num">
                    {this.state.number}
                </div>
                <div id="plus"  ><button onClick={this.p}><i class="ok fa-solid fa-plus fa-beat"></i></button></div>
                <div id="minus"  ><button onClick={this.m}><i class="ok1 fa-regular fa-square-minus"></i></button></div>
                <div id="reset"  ><button onClick={this.re}><i class="ok2 fa-solid fa-infinity"></i></button></div>


              </div>

        </>
      )
    }
}
export default App;