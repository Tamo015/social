import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Content from './components/Content/Content';
import {loginProcess} from './redux/reducers/appReducer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
	  this.props.loginProcess();
  }
  
  
  render() {
	  if(!this.props.initialized) {
		  <Preloader />
	  }
	  return (
		<div>
			<HeaderContainer />
			<div className='wrapper'>
				<NavbarContainer />
				<Content />
			</div>
		</div>
	  );
  }
}

let mapStateToProps = (state)=> {
	return {
		initialized: state.app.initialized
	}
}

export default compose(
	connect(mapStateToProps, {loginProcess})
)(App);
