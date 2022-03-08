const messageElem = document.querySelector('.message');

const emulationLoadTimeInSeconds = 1000;
messageElem.innerHTML = '<span class="loading">loading...</span>';

setTimeout(() => {
	(async () => {
		const response = await fetch('http://localhost:3100');
		const data = await response.json();
		messageElem.innerHTML = data.message;
	})();
}, emulationLoadTimeInSeconds);