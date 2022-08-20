var i = 0;
let img = new Array();
img[0] = `https://i.ytimg.com/vi/mYLXmu0zDJ4/maxresdefault.jpg`;
img[1] = "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/89/fd/b9.jpg"
img[2] = "https://cdn.theculturetrip.com/wp-content/uploads/2020/04/gettyimages-699112711-1.jpg";
img[3] = "https://www.uia-architectes.org/wp-content/uploads/2022/01/shutterstock_795179983_2.jpg"
// img[0]=new Image;
// img[0].src='Images\maxresdefault.jpg'

// img[1]=new Image;
// img[1].src='Images\maxresdefault.jpg'

// img[2]=new Image;
// img[2].src='Images\maxresdefault.jpg'
function changeImg() {
    let Image = document.getElementById('travel-img');
    Image.src = img[i];
    if (i < img.length - 1) {
        i++
    }
    else {
        i = 0
    }
    setTimeout('changeImg()', 3000)
}
var j = 0
changeImg()
let img2 = new Array();
img2[0] = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29uc3VsdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
img2[1] = 'https://thebitterbusiness.files.wordpress.com/2015/03/business-consultant.jpg';
img2[2] = 'https://www.insightssuccess.in/wp-content/uploads/2017/10/Consulting-1-Insights-success.jpg'

function changImg2() {
    let Image2 = document.getElementById('business-img');
    Image2.src = img2[j];

    if (j < img2.length - 1) {
        j++
    }
    else {
        j = 0;
    }

    setTimeout('changImg2()', 3000)
}


changImg2();
var k = 0;
let img3 = new Array();
img3[0] = "https://i0.wp.com/www.asfeworld.tv/wp-content/uploads/2022/06/The-high-cost-of-graduation-ceremonies.jpg?fit=600%2C400&ssl=1";
img3[1] = "https://image.free-apply.com/gallery/l/uni/gallery/lg/1003100015/62a22b230cedcce1589262906c8b704f5c3ec466.jpg?s=640";
img3[2] = "https://cdn.trend.az/2020/08/06/student_main_060820_1.jpg";

function chngImg3() {
    let Image3 = document.getElementById('academics-img');
    Image3.src = img3[k];

    if (k < img3.length - 1) {
        k++
    }

    else {
        k = 0
    }

    setTimeout('chngImg3()', 3000)
}

chngImg3();

var z = 0;
let img4 = new Array();
img4[0] = "https://cdn-aedlj.nitrocdn.com/TXGnHSzgVtmHZyFcCTmqtXBgbiQqZwCm/assets/static/optimized/rev-e77a2e4/wp-content/uploads/2022/02/thai-work-permit-application.jpg"
img4[1] = "https://www.schengenvisainfo.com/news/wp-content/uploads/2021/12/Warsaw-Poland.jpg"
img4[2] = "https://exceptiovisa.com/wp-content/uploads/2021/07/Romania-work-permit.jpg"

function chngImg4() {
    let Image4 = document.getElementById('permit-img');
    Image4.src = img4[z];

    if (z < img4.length - 1) {
        z++
    }

    else {
        z = 0
    }

    setTimeout('chngImg4()', 3000)
}

chngImg4();


