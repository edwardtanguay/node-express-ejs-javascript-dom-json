const messageElem = document.querySelector('.message');
const newMessageElem = document.querySelector('.newMessage');
const btnChange = document.querySelector('.btnChange');

const emulationLoadTimeInSeconds = 1000;

messageElem.innerHTML = '<span class="loading">loading...</span>';
newMessageElem.value = '';

const setFormToLoading = () => {
	newMessageElem.disabled = true;
	btnChange.disabled = true;
}

const setFormToReady = (data) => {
	messageElem.innerHTML = data.message;
	newMessageElem.value = data.message;
	newMessageElem.disabled = false;
	btnChange.disabled = false;
}

setFormToLoading();

btnChange.addEventListener('click', (e) => {
	e.preventDefault();
	setFormToLoading();
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ message: newMessageElem.value })
	};
	setTimeout(() => {
		(async () => {
			const response = await fetch('http://localhost:3100', requestOptions);
			const data = await response.json();
			setFormToReady(data);
		})();
	}, emulationLoadTimeInSeconds);
});

setTimeout(() => {
	(async () => {
		const response = await fetch('http://localhost:3100');
		const data = await response.json();
		setFormToReady(data);
	})();
}, emulationLoadTimeInSeconds);