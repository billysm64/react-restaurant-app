import React, { Component } from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">Hello, World!</div>
//   );
// }

class App extends Component {
  componentDidMount() {
    const menuItems = [{
      name: 'Chin hum',
      desc: 'It is a slowly stewed meat curry from northern Thailand. This particular version is made with beef.',
    }, {
      name: 'Kaeng om',
      desc: 'A spicy Lanna "curry" with meat, and without any coconut milk.',
    }, {
      name: 'Tom saep',
      desc: 'A spicy soup made with stewed meat (usually pork, chicken or beef), roasted fresh herbs and spices, ground roasted rice, and generous amounts of lime juice and fresh herbs just before serving.',
    }, {
      name: 'Yam thale',
      desc: 'A spicy salad with mixed seafood (cuttlefish, shelled prawns, mussels), shallots, lime juice, fish sauce and Thai celery.',
    }, {
      name: 'Mu phat sato',
      desc: 'Sliced pork stir-fried with sato (the beans of the Parkia speciosa, also known as "stink bean" or "bitter bean"), onion, garlic, fish sauce, chili peppers, and oyster sauce.',
    }];

    this.setState({ menuItems: menuItems });
    this.setState({ menuItems });
  }
  render() {
    console.log('this', this);
    const menuItems = this.state?.menuItems.map((menuItem, index) => (
      <div key={index} className="menuItem-item">
        <p className="menuItem-item-title">{menuItem.name}</p>
        <p className="menuItem-item-text">{menuItem.desc}</p>
        <button type="submit">ADD ITEM</button>
        <button type="submit">REMOVE ITEM FROM LIST</button>
      </div>
    ))
    return (
      <React.Fragment>
        <h1>Majestic Thai</h1>
        <div>{menuItems}</div>
      </React.Fragment>
    );
  }
}

export default App;
