
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
    let titleArr;
    let images = document.querySelectorAll('img');

    for (let i = 0; i < images.length; i++) {
        titleArr = images[i].title;
        return titleArr;
    }
    console.log(getImageTitle());
}

