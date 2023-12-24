chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.action === 'toggleStyles') {
		var targetClasses = ["main-nav", "_2Ts6i _3RGKj"];
		targetClasses.forEach(function (targetClass) {
			var elements = document.getElementsByClassName(targetClass);
			for (var i = 0; i < elements.length; i++) {
				elements[i].style.display = (elements[i].style.display === "none") ? "block" : "none";
			}
		});
	}
});
