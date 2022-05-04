// //Get the button:
// bttbutton = document.getElementById("backtotopBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         bttbutton.style.display = "block";
//     } else {
//         bttbutton.style.display = "none";
//     }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
    return document.documentElement || document.body;
};

const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth"
    });
};

document.addEventListener("scroll", () => {
    //   console.log("Scroll Height: ", scrollContainer().scrollHeight);
    //   console.log("Client Height: ", scrollContainer().clientHeight);

    //   const scrolledPercentage =
    //     (scrollContainer().scrollTop /
    //       (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    //     100;

    //   pageProgressBar.style.width = `${scrolledPercentage}%`;

    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("hidden");
    } else {
        backToTopButton.classList.add("hidden");
    }
});

backToTopButton.addEventListener("click", goToTop);
