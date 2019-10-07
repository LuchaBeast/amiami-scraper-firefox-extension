// background script

browser.browserAction.onClicked.addListener((tab) => {
    browser.tabs.executeScript({
        file: "/scrape_images.js",
        allFrames: true
    });

    browser.runtime.onMessage.addListener(returned_images);

    function returned_images(message) {
        browser.downloads.download({url: message.image, filename: "scraped_images/"+message.name+" "+message.image_index+"."+message.file_ext, saveAs: false});
    }

});