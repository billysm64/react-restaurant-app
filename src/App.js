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

    this.state = {
      cart: [],
      menuItems: [],
      subtotal: 0,
      name: '',
    }
    // this.state = {
    //   items: []
    // };
    // this.menuBarClick = this.menuBarClick.bind(this);
    // this.menuClick = this.menuClick.bind(this);
    // this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  };

  componentDidMount() {
    const menuItems = [{
      name: 'Chin hum',
      desc: 'It is a slowly stewed meat curry from northern Thailand. This particular version is made with beef.',
      price: 5.25,
    }, {
      name: 'Kaeng om',
      desc: 'A spicy Lanna "curry" with meat, and without any coconut milk.',
      price: 6.75,
    }, {
      name: 'Tom saep',
      desc: 'A spicy soup made with stewed meat (usually pork, chicken or beef), roasted fresh herbs and spices, ground roasted rice, and generous amounts of lime juice and fresh herbs just before serving.',
      price: 10.71,
    }, {
      name: 'Yam thale',
      desc: 'A spicy salad with mixed seafood (cuttlefish, shelled prawns, mussels), shallots, lime juice, fish sauce and Thai celery.',
      price: 4.05,
    }, {
      name: 'Mu phat sato',
      desc: 'Sliced pork stir-fried with sato (the beans of the Parkia speciosa, also known as "stink bean" or "bitter bean"), onion, garlic, fish sauce, chili peppers, and oyster sauce.',
      price: 15.00,
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

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log(event.target)

    const order = {
      name: this.state.name,
      items: this.state.cart,
    }

    localStorage.setItem('cartItems', JSON.stringify(order));
    alert(`Thank you, ${order.name}. Your order will be ready in 25 minutes.`)
  }

  addItem(menuItem) {
    // add selected menuItem to the order
    this.setState({cart: [...this.state.cart, menuItem]});
  }

  removeItem(menuItem) {
    // make a copy of cart that lives on state
    const cart = [...this.state.cart];
    // find index of the menu item
    const index = cart.indexOf(menuItem);
    // remove one item from array at index
    if (index !== -1) {
      cart.splice(index, 1);
      this.setState({ cart });
    }
  }

  render() {
    console.log('this', this);

    const menuItems = this.state.menuItems.map((menuItem, index) => (
      <div key={index} className="menuItem-item">
          <p className="menuItem-item-title">{menuItem.name}</p>
          <p className="menuItem-item-text">{menuItem.desc}</p>
          <p className="menuItem-item-price">${menuItem.price}</p>
          <button onClick={() => this.addItem(menuItem)} type="button">ADD ITEM</button>
      </div>
    ));

    const orderItems = this.state.cart.map((menuItem, index) => (
      <div key={index}>
        <p className="menuItem-item-title">{menuItem.name}</p>
        <p className="menuItem-item-text">{menuItem.desc}</p>
        <p className="menuItem-item-price">${menuItem.price}</p>
        <button onClick={() => this.removeItem(menuItem)} type="button">REMOVE ITEM FROM LIST</button>
      </div>
    ));

    const subtotal = this.state.cart.reduce((accum, i) => {
      return accum + i.price;
    }, 0);

    console.log('sub', subtotal)

    return (
      <div className="container">
        { //MenuList class, will be binded here in html classes -->
        }
        <h1>Majestic Thai</h1>
        <div className="row">

          <div className="col">
            <div>{menuItems}</div>
          </div>
          <div className="col">
            <h2>Cart (${subtotal.toFixed(2)})</h2>
            <div>{orderItems}</div>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleInput} required/>
              <button type="submit">Submit Order</button>
            </form>
          </div>

        </div>



      </div>
    );
  }
}

export default App;
