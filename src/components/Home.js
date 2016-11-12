import { Component } from 'react';
import template from './Home.rt';
class Home extends Component {
  constructor(props,context){
    super(props,context);
    this.state = {
     name:"ling"
    };
  }
  render() {
    return template.apply(this);
  }
}

export default Home;
