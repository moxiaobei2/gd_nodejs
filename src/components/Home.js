import { Component } from 'react';
import template from './Home.rt';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
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

//把props与state绑定过来
function mapStateToProps(state) {
  return {
    stores: state.stores
  }
}

function mapDispatchToProps(dispatch) {
  return {
    //navActions:bindActionCreators(navAction, dispatch),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
//export default Home;
