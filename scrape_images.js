// content script

// create arbitrary code block to limit scope of image_list
// and avoid redeclaration error every time extension is run
{
    let image_list = document.querySelectorAll("ul.item-image__list > li > img");
    let product_name = document.querySelector("h2.item-detail__section-title").innerHTML.replace("(Pre-order)","").replace(/[1-9][0-9]*\/[1-9][0-9]*/g,"").replace("Complete ","").replace("  "," ");

    for (let image_counter = 0; image_counter < image_list.length; image_counter++) {
        browser.runtime.sendMessage({"image_index": image_counter, "name": product_name, "image": image_list[image_counter].src, "file_ext": image_list[image_counter].src.split('.').pop()})
    }

}