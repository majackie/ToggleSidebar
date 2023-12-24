const targetClasses = [];

chrome.runtime.sendMessage({ action: 'fetchClasses' }, function (response) {
	if (!response.error) {
		const text = response.classes.split('\n').filter(Boolean);
		targetClasses.push(...text);
	} else {
		console.error('Error fetching classes.txt:', response.error);
	}
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.action === 'toggleStyles') {
		targetClasses.forEach(function (targetClass) {
			const elements = document.getElementsByClassName(targetClass);
			for (let i = 0; i < elements.length; i++) {
				elements[i].style.display = (elements[i].style.display === "none") ? "block" : "none";
			}
		});
	}
});
