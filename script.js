const
smooth_divs = document.querySelectorAll('.smooth');

var
screen_h = $(window).height(),
doc_h,
dif;

// loads variable amount of posts in the auto-post element
function load(amount) {
    for (let i = 0; i < amount; i++) {
        $("#auto-post").append(`
        <div class="row py-4">
            <div class="col-sm-6">
                <div class="d-flex align-items-center">
                    <img class="rounded" src="images/user-soikat.jpg" alt="" width="25">
                    <small class="ms-2">
                        <a class="text-dark fw-bold text-decoration-none" href="#">Umair haque</a> in
                        <a class="text-dark fw-bold text-decoration-none" href="#">Eudaimonia and Co</a>
                    </small>
                </div>
                <div class="pt-2">
                    <a href="#" class="fs-5 fw-bold text-dark text-decoration-none">
                        This Long-Awaited Technology May Finally Change the World
                    </a><br/>
                    <small class="d-none d-lg-block">
                        Solid-state batteries are poised to emerge in the coming years
                    </small>
                </div>
                <div>
                    June 16 - 10 min read - 
                    <a href="#" class="text-dark text-decoration-none">Science</a>
                    <button class="text-dark btn mx-2">
                        <i class="far fa-bookmark"></i>
                    </button>
                </div>
            </div>
            <div class="col-sm-6">
                <a href="#">
                    <img class="img-fluid" src="images/facebook-post.png" alt="">
                </a>
            </div>
        </div>
        `);
    }
}


// infinite post effect
$(window).scroll(e => {

    doc_h = $(document).height();
    dif = doc_h - screen_h - 100;
    let top = $(window).scrollTop();

    if (top > dif) {
        // loading three post when user approach near the bottom end
        load(3);
    }

});

smooth_divs.forEach(div => {
    div.style.transition = "all 0.3s ease";
});