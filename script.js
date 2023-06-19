function changeBg(){
    var nav = document.getElementById('nav');
    var scrollValue = window.scrollY;

    if(scrollValue < 600){
        nav.classList.remove('bgColor');
    } else {
        nav.classList.add('bgColor');
    }
}

window.addEventListener('scroll', changeBg);

function searchMentor() {

    var searchInput = document.getElementById("search-input").value.toLowerCase();

    var mentorCards = document.getElementsByClassName("mentor-card");

    for (var i = 0; i < mentorCards.length; i++) {
        var mentorName = mentorCards[i].querySelector(".mentor-card-title").innerText.toLowerCase();
        var mentorCat = mentorCards[i].querySelector(".mentor-card-category").innerText.toLowerCase();
        var mentorField = mentorCards[i].querySelector(".mentor-card-field").innerText.toLowerCase();

        if (mentorName.includes(searchInput) || mentorCat.includes(searchInput) || mentorField.includes(searchInput)) {
            mentorCards[i].style.display = "grid";
        } else {
            mentorCards[i].style.display = "none";
        }
    }
}

function showMentorCards(filter) {
    var mentorCards = document.getElementsByClassName("mentor-card");

    for (var i = 0; i < mentorCards.length; i++) {
        var mentorName = mentorCards[i].querySelector(".mentor-card-category").innerText.toLowerCase();

        if (filter === "all" || mentorName.includes(filter)) {
            mentorCards[i].style.display = "grid";
        } else {
            mentorCards[i].style.display = "none";
        }
    }
}

var searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", searchMentor);

const buttons = document.querySelectorAll('#buttons button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        const filterValue = this.value.toLowerCase();

        showMentorCards(filterValue);
    });
});


// Booking Box Start //
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const tabInfo = document.querySelector('.tab-info');

tabBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
        const tabId = this.getAttribute('data-tab');

        // Menghapus class 'active' dari semua tombol dan konten tab
        tabBtns.forEach((btn) => {
            btn.classList.remove('active');
        });
        tabContents.forEach((content) => {
            content.style.display = 'none';
        });

        // Menambah class 'active' pada tombol yang diklik dan menampilkan konten tab yang terkait
        this.classList.add('active');
        document.getElementById(tabId).style.display = 'block';

        // Menampilkan keterangan harga dan unorder list yang sesuai dengan tab yang aktif
        tabInfo.innerHTML = document.getElementById(`${tabId}-info`).innerHTML;
    });
});
// Menampilkan tab pertama secara default
tabBtns[0].click();
const bookNowBtn = document.getElementById('book-now-btn');
bookNowBtn.addEventListener('click', function () {
    window.location.href = 'https://www.google.com';
});
// Booking Box End //

// Profile Part2 Start //
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
// Profile Part2 End //