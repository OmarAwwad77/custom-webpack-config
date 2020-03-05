import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Page1 from './containers/Page1';
import Page2 from './containers/Page2';

class App extends Component {
	render() {
		return (
			<div>
				<div>
					<Link to='/'>Page1</Link> | <Link to='/Page2'>Page2</Link>
				</div>
				<div>
					<Route path='/' exact component={Page1} />
					<Route path='/Page2' component={Page2} />
				</div>
			</div>
		);
	}
}

export default App;
