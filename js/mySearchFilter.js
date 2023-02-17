
function getImage() {
    let imgArr = [];
    let image = document.querySelector('img');

    for (i = 0; i < 12; i++) {
        imgArr[i] = image;
        imgArr[i].id = `'${i + 1}'`;
    }
    console.log(imgArr)
}

function search() {
    let userSearch = document.getElementById('search').value;
    userSearch = userSearch.toLowerCase();
    console.log(x);
}

