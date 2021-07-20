// global variables
var
screen_h = $(window).height(),
doc_h,
dif;

// loads variable amount of posts in the auto-post element
function load(amount) {
    var posts =
    [
        '<div class="row py-4"> <div class="col-sm-7"> <div class="d-flex align-items-center"> <img class="rounded" src="images/About_Bina-1.png" alt="" width="25"> <small class="ms-2"> <a class="text-dark fw-bold text-decoration-none" href="#">Ella Alderson</a> in <a class="text-dark fw-bold text-decoration-none" href="#">Predict</a> </small> </div><div class="pt-2"> <a href="#" class="fs-5 fw-bold text-dark text-decoration-none"> This Long-Awaited Technology May Finally Change the World </a><br/> <small class="d-none d-lg-block"> Solid-state batteries are poised to emerge in the coming years </small> </div><div> May 30 - 6 min read - <a href="#" class="text-dark text-decoration-none">Science</a> <button class="text-dark btn mx-2"> <i class="far fa-bookmark"></i> </button> </div></div><div class="col-sm-5"> <a href="#"> <img class="rounded" width="100%" src="images/post-1.jpeg" alt=""> </a> </div></div>',
        '<div class="row py-4"> <div class="col-sm-7"> <div class="d-flex align-items-center"> <img class="rounded" src="images/About_Colburn-1.png" alt="" width="25"> <small class="ms-2"> <a class="text-dark fw-bold text-decoration-none" href="#">Emma Pattee</a> in <a class="text-dark fw-bold text-decoration-none" href="#">Elemental</a> </small> </div><div class="pt-2"> <a href="#" class="fs-5 fw-bold text-dark text-decoration-none"> Anxiety Is in Your Body, Not Your Mind </a><br/> <small class="d-none d-lg-block"> Why you might want to stop talking about your anxiety and try this instead </small> </div><div> Apr 6 - 7 min read - <a href="#" class="text-dark text-decoration-none">Anxiety</a> <button class="text-dark btn mx-2"> <i class="far fa-bookmark"></i> </button> </div></div><div class="col-sm-5"> <a href="#"> <img class="rounded" width="100%" src="images/post-2.jpeg" alt=""> </a> </div></div>',
        '<div class="row py-4"> <div class="col-sm-7"> <div class="d-flex align-items-center"> <img class="rounded" src="images/About_Leon-1.png" alt="" width="25"> <small class="ms-2"> <a class="text-dark fw-bold text-decoration-none" href="#">Shivendra Misra</a> in <a class="text-dark fw-bold text-decoration-none" href="#">Publishous</a> </small> </div><div class="pt-2"> <a href="#" class="fs-5 fw-bold text-dark text-decoration-none"> 6 Brain Damaging Habits You May Want to Quit </a><br/> <small class="d-none d-lg-block"> Do twice as much as you should, half as well as you could </small> </div><div> Jun 16 - 8 min read - <a href="#" class="text-dark text-decoration-none">Mental Health</a> <button class="text-dark btn mx-2"> <i class="far fa-bookmark"></i> </button> </div></div><div class="col-sm-5"> <a href="#"> <img class="rounded" width="100%" src="images/post-3.jpeg" alt=""> </a> </div></div>',
        '<div class="row py-4"> <div class="col-sm-7"> <div class="d-flex align-items-center"> <img class="rounded" src="images/CarvellWallace.png" alt="" width="25"> <small class="ms-2"> <a class="text-dark fw-bold text-decoration-none" href="#">Sean Kernan</a> in <a class="text-dark fw-bold text-decoration-none" href="#">Mind Cafe</a> </small> </div><div class="pt-2"> <a href="#" class="fs-5 fw-bold text-dark text-decoration-none"> You Aren’t Lazy. You Are Overstimulated. </a><br/> <small class="d-none d-lg-block"> Slowing your life down is the secret to getting things done. </small> </div><div> Jun 2 - 4 min read - <a href="#" class="text-dark text-decoration-none">Life</a> <button class="text-dark btn mx-2"> <i class="far fa-bookmark"></i> </button> </div></div><div class="col-sm-5"> <a href="#"> <img class="rounded" width="100%" src="images/post-4.jpeg" alt=""> </a> </div></div>',
        '<div class="row py-4"> <div class="col-sm-7"> <div class="d-flex align-items-center"> <img class="rounded" src="images/CarvellWallace.png" alt="" width="25"> <small class="ms-2"> <a class="text-dark fw-bold text-decoration-none" href="#">Sean Kernan</a> in <a class="text-dark fw-bold text-decoration-none" href="#">Mind Cafe</a> </small> </div><div class="pt-2"> <a href="#" class="fs-5 fw-bold text-dark text-decoration-none"> 5 Signs You’re Charming and Don’t Even Know it </a><br/> <small class="d-none d-lg-block"> The path to charm is already complete for many of you and available to the rest. </small> </div><div> Jun 3 - 4 min read - <a href="#" class="text-dark text-decoration-none">Life</a> <button class="text-dark btn mx-2"> <i class="far fa-bookmark"></i> </button> </div></div><div class="col-sm-5"> <a href="#"> <img class="rounded" width="100%" src="images/post-5.jpeg" alt=""> </a> </div></div>'
    ]
    var len = posts.length;
    // load random post of specific amount
    for (let i = 0; i < amount; i++) {
        var index = Math.floor(Math.random() * len);
        $("#auto-post").append(posts[index]);
    }
}

// infinite post effect
$(window).scroll(function() {

    doc_h = $(document).height();
    dif = doc_h - screen_h - 100;
    let top = $(window).scrollTop();

    if (top > dif) {
        // loading five post when user approach near the bottom end
        load(5);
    }

});