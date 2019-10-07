// background script

browser.browserAction.onClicked.addListener((tab) => {
    console.log(tab.url);
    
    browser.tabs.executeScript({
        file: "/scrape_images.js",
        allFrames: true
    });

});