import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import LoginPage from '../src/components/login/LoginPage';
import HomePage from '../src/components/HomePage';

// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import {ChatViewProvider} from './Context';

import SignUpPage from '../src/components/signUp/SignUpPage';

export default function App() {
	console.log('STATE', masterState);
	export {handleClick};

	useEffect(() => {
		const {masterState, dispatch} = useContext(ChatViewContext);

		const loadInitialData = (data) => {
			console.log('DATA', data);
			console.log('STATE 2', masterState);
			dispatch({
				type: 'LOAD_INITIAL_DATA',
				data
			});
		};

		socket.on('initial data', loadInitialData);
		return () => {
			/**
			 * TODO: ensure this event listener gets removed
			 */
			socket.removeEventListener('initial data', loadInitialData);
		};
	}, []);

	const handleClick = () => {
		socket.emit('create new room', {
			type: 'single',
			name: 'new chat',
			creatorUserId: masterState.userId,
			usersArr: [1, 2, 3, 4, 5],
			avatar: ''
		});
	};

	const state = {
		auth: true
	};

	return (
		<>
			<HomePage />
			{/* //{' '}
			<div>
				//{' '}
				<BrowserRouter>
					//{' '}
					<Switch>
						// <Route exact path={'/login'} render={<LoginPage />}></Route>
						// <Route exact path={'/'} render={<HomePage />}></Route>
						//{' '}
					</Switch>
					//{' '}
				</BrowserRouter>
				//{' '}
			</div> */}
			<div>
				<BrowserRouter>
					<Switch>
						{state.auth ? <Route path='/chat' component={HomePage} /> : null}
						<Route path='/login' component={LoginPage} />
						<Route path='/signup' exact component={SignUpPage} />
						<Redirect from='/' to='/login' />
					</Switch>
				</BrowserRouter>
			</div>
		</>
	);
}
