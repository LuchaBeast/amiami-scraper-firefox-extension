// Content script

/** 
 * create arbitrary code block to limit scope of image_list
 * and avoid redeclaration error every time extension is run
 */
{
    const image_list = document.querySelectorAll("ul.item-image__list > li > img");
    
    // Remove "Pre-order" and "Complete" from the product name because they do not contribute to the SEO of the product
    // Remove "/" (if exists) and scale (i.e. 1/8, 1/7) from product name because Linux does not allow '/' in file names
    const product_name = document.querySelector("h2.item-detail__section-title").innerHTML.replace("(Pre-order)","").replace(/[1-9][0-9]*\/[1-9][0-9]*/g,"").replace(/\//g," ").replace("Complete ","").replace("  "," ");

    // Loop over each image and send the values necessary to construct the file name to the background script
    for (let image_counter = 0; image_counter < image_list.length; image_counter++) {
        browser.runtime.sendMessage({
            "image_index": image_counter,
            "name": product_name,
            "image": image_list[image_counter].src,
            "file_ext": image_list[image_counter].src.split('.').pop()
        })
    }

}