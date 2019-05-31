import loadReactApp from './react-app/loadReactApp';
import startTimer from './non-react-stuff/startTimer';

const button = document.createElement('button');
button.innerHTML = 'Load React App';
button.addEventListener('click', loadReactApp);

document.body.appendChild(button);

// do
startTimer();
