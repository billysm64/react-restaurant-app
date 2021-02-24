//Django serve up JSON data, React send and receive JSON data//Django serve up JSON data, React send and receive JSON data//Django serve up JSON data, React send and receive JSON data//Django serve up JSON data, React send and receive JSON data//Django serve up JSON data, React send and receive JSON data//Django serve up JSON data, React send and receive JSON data//Django serve up JSON data, React send and receive JSON data//Django serve up JSON data, React send and receive JSON data//Django serve up JSON data, React send and receive JSON data//Django serve up JSON data, React send and receive JSON data//Django serve up JSON data, React send and receive JSON data//Django serve up JSON data, React send and receive JSON data//Django serve up JSON data, React send and receive JSON data

import React, { Component } from 'react';
import './App.css';
import MenuList from './MenuList'

// function App() {
//   return (
//     <div className="App">Hello, World!</div>
//   );
// }

class App extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   items: []
    // };
    // this.menuBarClick = this.menuBarClick.bind(this);
    // this.menuClick = this.menuClick.bind(this);
    // this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
  };

  componentDidMount() {
    const menuItems = [{
      name: 'Chin hum',
      desc: 'It is a slowly stewed meat curry from northern Thailand. This particular version is made with beef.',
      price: '5.25',
    }, {
      name: 'Kaeng om',
      desc: 'A spicy Lanna "curry" with meat, and without any coconut milk.',
      price: '6.75',
    }, {
      name: 'Tom saep',
      desc: 'A spicy soup made with stewed meat (usually pork, chicken or beef), roasted fresh herbs and spices, ground roasted rice, and generous amounts of lime juice and fresh herbs just before serving.',
      price: '10.71',
    }, {
      name: 'Yam thale',
      desc: 'A spicy salad with mixed seafood (cuttlefish, shelled prawns, mussels), shallots, lime juice, fish sauce and Thai celery.',
      price: '4.05',
    }, {
      name: 'Mu phat sato',
      desc: 'Sliced pork stir-fried with sato (the beans of the Parkia speciosa, also known as "stink bean" or "bitter bean"), onion, garlic, fish sauce, chili peppers, and oyster sauce.',
      price: '15.00',
    }];
    this.setState({ menuItems: menuItems });
    // this.setState({ menuItems });
  }

/*
localStorage.setItem("cartItems", "")
undefined
localStorage.getItem("cartItems")
""
itemString = localStorage.getItem("cartItems")
""
itemsArray = itemString.split(",")
[""]
itemsArray.push(3)
2
itemsArray
(2) ["", 3]
localStorage.setItem("cartItems", itemsArray)
undefined
localStorage.getItem("cartItems")
",3"
*/
  addItem(event) {
    event.preventDefault();
    //
    const menuItem = this.state.menuItems[event.target.id]
    // cartItems = []
    localStorage.setItem("cartItems", "")
    // prices = [...this.state.menuItems]

    // alert(price)
    // Click Add button
    // Add + price to Cart, display on Cart
    // Put data in localStorage
  }

  render() {
    console.log('this', this);
    const menuItems = this.state?.menuItems.map((menuItem, index) => (
      <div key={index} className="menuItem-item">
          <p className="menuItem-item-title">{menuItem.name}</p>
          <p className="menuItem-item-text">{menuItem.desc}</p>
          <button id={index} onClick={this.addItem} type="submit">ADD ITEM</button>
          <button type="submit">REMOVE ITEM FROM LIST</button>
      </div>
    ))
    return (
      <React.Fragment>
        { //MenuList class, will be binded here in html classes -->
        }
        <button>CART</button>
        <h1>Majestic Thai</h1>

        <div>{menuItems}</div>
      </React.Fragment>
    );
  }
}

export default App;
