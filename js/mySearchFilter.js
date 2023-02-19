
function getImageTitle() {
    let titleArr;
    let images = document.querySelectorAll('img');

    for (let i = 0; i < images.length; i++) {
        titleArr = images[i].title;
        return titleArr;
    }


}

function search() {
    let userSearch = document.getElementById('search').value;
    userSearch = userSearch.toLowerCase();
    let title;
    let images = document.querySelectorAll('img');

    for (let i = 0; i < images.length; i++) {
        title = images[i].title;
        let result = title.includes(userSearch);

        if (result) {
            images[i].style.display = "block";
        }
        else {
            images[i].style.display = "none";
        }
    }


}

