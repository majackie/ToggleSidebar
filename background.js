chrome.action.onClicked.addListener(function (tab) {
	chrome.tabs.sendMessage(tab.id, { action: 'toggleStyles' });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'fetchClasses') {
        fetch(chrome.runtime.getURL("/classes.txt"))
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch classes.txt: ${response.status}`);
                }
                return response.text();
            })
            .then(classes => sendResponse({ classes }))
            .catch(error => sendResponse({ error }));
        return true;
    }
});
