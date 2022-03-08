import { EmployeesManager } from './employeesManager.js';

const messageElem = document.querySelector('.message');
const employeesManager = new EmployeesManager();

messageElem.innerHTML = 'loading...';

(async () => {
	const response = await fetch('http://localhost:3100');
	// const data = await response.json();
	const data = await response.text();
	messageElem.innerHTML = data;

})();