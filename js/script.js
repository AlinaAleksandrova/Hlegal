$('.tab li a').click(function(e) {
    e.preventDefault();
    $('.tab li a').removeClass('active');
    $(this).addClass('active');
});
// tabs
const tabs = document.querySelector(".tabpanel");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tabcontent");

tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        contents.forEach(content => {
            content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
};