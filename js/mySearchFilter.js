//Search function to filter results based on user input

function search() {
    //get user input as they type
    let userSearch = document.getElementById('search').value;
    userSearch = userSearch.toLowerCase();

    //create an array to store image titles in so that I don't have to use a NodeList
    const titleArr = [];
    let title, result;

    //creating a static NodeList of all images
    let images = document.querySelectorAll('img');

    //creating a live collection of all anchors (children of grid)
    let anchors = document.getElementsByTagName('a');

    //making title array
    for (let i = 0; i < 12; i++) {
        titleArr.push(images[i].title)
    }

    //looping through title array to see if user input matches any title
    for (let i = 0; i < titleArr.length; i++) {
        title = titleArr[i];
        result = title.includes(userSearch);

        if (!result) {
            images[i].style.display = "none";
            anchors[i].style.order = "1";
        }
        else {
            images[i].style.display = "block";
            anchors[i].style.order = "-1"
        }
    }
}

