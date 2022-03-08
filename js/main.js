import { EmployeesManager } from './employeesManager.js';

const messageElem = document.querySelector('.message');
const employeesManager = new EmployeesManager();

messageElem.innerHTML = employeesManager.getMessage();