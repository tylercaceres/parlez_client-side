import React, {useEffect, useContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ChatViewContext} from './Context';
import {ChatViewProvider} from './Context';

let socket = require('socket.io-client')('ws://localhost:8080');

ReactDOM.render(
	<ChatViewProvider>
		<App />
	</ChatViewProvider>,
	document.getElementById('root')
);
