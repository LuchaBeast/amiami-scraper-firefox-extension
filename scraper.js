// background script

browser.browserAction.onClicked.addListener((tab) => {
    browser.tabs.executeScript({
        file: "/scrape_images.js",
        allFrames: true
    });

    browser.runtime.onMessage.addListener(notify);

    function notify(message) {
        console.log(message.image);
    }
    
});