import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state={
    items: [
      {
       id:0,
       name:"Mountain Dew",
       price: 1,
       quantity: 1,
       subTotal : 1,
      },
      {
        id:1,
        name:"Desperados",
        price: 1,
        quantity: 1,
        subTotal : 1,
      },
      {
        id:2,
        name:"Jack Daniels",
        price: 1,
        quantity: 1,
        subTotal : 1,
      }],
    total: 3,
  }
  updateSubtotal = (e, id)=>{
    if(e.target.value >= 0){
      const item = this.state.items[id];
      const items = this.state.items;
      items[id] = item;
      item.subTotal = e.target.value * item.price;
      item.quantity = e.target.value ;
      this.setState({items}, ()=>this.updateTotal())
    }
    
    
  }
  clearSubtotal = (id)=>{
    const item = this.state.items[id];
    item.subTotal = 0;
    item.quantity = 0;
    const items = this.state.items;
    this.setState({items},()=>this.updateTotal());

  }

  clearTotal = () =>{
    const items = this.state.items;
    const item0 = this.state.items[0];
    item0.quantity = 0;
    item0.subTotal = 0;
    const item1 = this.state.items[1];
    item1.quantity = 0;
    item1.subTotal = 0;
    const item2 = this.state.items[2];
    item2.quantity = 0;
    item2.subTotal = 0;

    this.setState({
      items,total:0,
    })

  }
  

  updateTotal = ()=>{

    
    this.setState({ total: 
      this.state.items[0].subTotal +
      this.state.items[1].subTotal +
      this.state.items[2].subTotal 
    } )
  }
  render() {
    return (
   
        <div className="basket">
          <table>
            {this.state.items.map((item, index) =>{
              return(
                <tr>
                <td>
                 {item.name}
                </td>
                <td>
                <input type="number" value={item.quantity} onChange={(e)=>this.updateSubtotal(e,item.id)}/>
                </td>
                <td >
                  <span className="price">${item.subTotal} </span> <span onClick={()=>this.clearSubtotal(item.id)}>x</span>
                </td>
              </tr>
              )
            })}
                
          </table>
          <div className="total">
            <span className="total__text">${this.state.total}</span> 
             <a className="total__clear" href="#" onClick={()=>this.clearTotal()}> Clear</a> 
             <button className="submit">Check Out ></button>
          </div>
        </div>
     
    );
  }
}

export default App;
