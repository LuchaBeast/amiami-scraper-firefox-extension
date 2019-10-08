# amiami Product Image Scraper
This is a small Firefox add-on I've created to easily and quickly download product images from amiami.

I've only tested this add-on using Firefox 69 and Ubuntu 18.04.

## How to install
1. Clone the repository to your machine.
2. In Firefox, type **about:debugging** into your url bar and then click 'This Firefox' on the resulting page.
3. Click the 'Load Temporary Add-on' button and navigate to the directory where you cloned the repository.
4. Once in the repository directory, open **manifest.json** to load the add-on into Firefox.
5. If successful, you should see the amiami icon appear in your extension bar.
5. Because the add-on is being loaded as temporary, it will only function during your current browser session. If you close and reopen Firefox, you will need to reload the add-on again via the same steps above.
## How to use
1. Navigate to an amiami product listing page ([example](https://www.amiami.com/eng/detail?gcode=FIGURE-053358)) and then click 'View all pictures'.
2. Once on the picture listing page for a product ([example](https://www.amiami.com/eng/detail/review?gcode=FIGURE-053358)) click the add-on button in your extension bar.
3. The add-on will scrape the image urls and download each one.
4. Images are saved in a folder named 'scraped_images' located inside your default downloads directory. If the folder doesn't exist, it will be created automatically on the first run.
5. Each image is saved using the product name as the file name.
