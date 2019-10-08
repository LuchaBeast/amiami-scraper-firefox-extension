// Background script

// Execute only when extension button is clicked
browser.browserAction.onClicked.addListener((tab) => {
    
    browser.tabs.executeScript({
        file: "/scrape_images.js",
        allFrames: true
    });

    browser.runtime.onMessage.addListener(returned_image_urls);

    function returned_image_urls(message) {
        var downloading = browser.downloads.download({
            url: message.image,
            filename: "scraped_images/" + message.name + " " + message.image_index + "." + message.file_ext,
            saveAs: false
        });

        downloading.then(onStartedDownload, onFailedDownload);
    }

    function onStartedDownload(id) {
        console.log(`Started downloading: ${id}`);
    }

    function onFailedDownload(error) {
        console.log(`Download failed: ${error}`);
    }

});