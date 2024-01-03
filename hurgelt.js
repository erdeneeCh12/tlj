document.getElementById("info").style.display = "block";
document.getElementById("lsaddress").style.display = "none";
document.getElementById("payment").style.display = "none";
document.getElementById("medee").classList.add('active');



// document.getElementById("medee").addEventListener("click", () => {
//     document.getElementById("info").style.display = "block";
//     document.getElementById("lsaddress").style.display = "none";
//     document.getElementById("payment").style.display = "none";
// });
// document.getElementById("hayg").addEventListener("click", () => {
//     document.getElementById("info").style.display = "none";
//     document.getElementById("lsaddress").style.display = "block";
//     document.getElementById("payment").style.display = "none";
// });
// document.getElementById("tolbor").addEventListener("click", () => {
//     document.getElementById("info").style.display = "none";
//     document.getElementById("lsaddress").style.display = "none";
//     document.getElementById("payment").style.display = "block";
// });

// document.getElementById("btn_info").addEventListener("click", () => {
//     document.getElementById("info").style.display = "none";
//     document.getElementById("lsaddress").style.display = "block";
//     document.getElementById("payment").style.display = "none";
// });

// document.getElementById("btn_add").addEventListener("click", () => {
//     document.getElementById("info").style.display = "none";
//     document.getElementById("lsaddress").style.display = "none";
//     document.getElementById("payment").style.display = "block";
// });

function removeActiveClass() {
    const buttons = document.querySelectorAll('#submenu button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
}

document.getElementById("medee").addEventListener("click", () => {
    removeActiveClass();
    document.getElementById("medee").classList.add('active');

    document.getElementById("info").style.display = "block";
    document.getElementById("lsaddress").style.display = "none";
    document.getElementById("payment").style.display = "none";
});

document.getElementById("hayg").addEventListener("click", () => {
    removeActiveClass();
    document.getElementById("hayg").classList.add('active');

    document.getElementById("info").style.display = "none";
    document.getElementById("lsaddress").style.display = "block";
    document.getElementById("payment").style.display = "none";
});

document.getElementById("tolbor").addEventListener("click", () => {
    removeActiveClass();
    document.getElementById("tolbor").classList.add('active');

    document.getElementById("info").style.display = "none";
    document.getElementById("lsaddress").style.display = "none";
    document.getElementById("payment").style.display = "block";
});

document.getElementById("btn_info").addEventListener("click", () => {
    removeActiveClass();
    document.getElementById("hayg").classList.add('active');

    document.getElementById("info").style.display = "none";
    document.getElementById("lsaddress").style.display = "block";
    document.getElementById("payment").style.display = "none";
});

document.getElementById("btn_add").addEventListener("click", () => {
    removeActiveClass();
    document.getElementById("tolbor").classList.add('active');

    document.getElementById("info").style.display = "none";
    document.getElementById("lsaddress").style.display = "none";
    document.getElementById("payment").style.display = "block";
});
