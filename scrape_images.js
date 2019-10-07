// content script

// create arbitrary code block to limit scope of image_list
// and avoid redeclaration error every time extension is run
{
    let image_list = document.querySelectorAll("ul.item-image__list > li > img");

    for (let image_counter = 0; image_counter < image_list.length; image_counter++) {
        console.log(image_list[image_counter].src);
    }
}