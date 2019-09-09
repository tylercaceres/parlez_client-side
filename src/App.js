import React, {useState, useContext, useEffect} from 'react';
import {Route, Switch, Redirect, Router} from 'react-router-dom';
import LoginPage from '../src/components/login/LoginPage';
import HomePage from '../src/components/HomePage';
import SignUpPage from '../src/components/signUp/SignUpPage';
import history from './history';
import {ChatViewContext, FriendContext} from './Context';
import axios from 'axios';
import {sendUserId, loadInitialChatroomsData, loadInitialFriendsData, receiveMessage, socket} from './server_api';

const App = () => {
	const {masterState, dispatch} = useContext(ChatViewContext);
	const {friendState, dispatchFriend} = useContext(FriendContext);

	useEffect(() => {
		axios
			.get('http://localhost:3003/auth/checkloggedin', {withCredentials: true})
			.then(res => {
				console.log('RES', res);
				if (res.data.logged_in && masterState.isLoggedIn === false) {
					dispatch({type: 'SIGNUP', id: res.data.user_id, data: res.data.logged_in});
					sendUserId(res.data.user_id);
				}
			})
			.catch(err => console.log('error:', err));

		if (masterState.isLoggedIn) {
			console.log('LOOOGGED IN');
		}

		loadInitialChatroomsData(data => {
			dispatch({
				type: 'LOAD_INITIAL_DATA',
				data
			});
		});

		loadInitialFriendsData(data => {
			dispatchFriend({
				type: 'LOAD_FRIENDS',
				data
			});
		});
		receiveMessage(data => {
			dispatch({
				type: 'ADD_MESSAGE',
				data
			});
		});
	}, []);

	return (
		<div>
			<Router history={history}>
				<Switch>
					<Route path='/signup' exact component={SignUpPage} />
					<Route path='/chat' exact component={HomePage} />
					<Route path='/login' exact component={LoginPage} />
					<Redirect from='/' to='/login' />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
