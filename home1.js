const navBr = document.getElementById("sElm");
const btnHbgIcn = document.querySelector(".btnHbgIcn i");
hanDleOnClickBtn = () => {
    document.body.scrollIntoView({
        behavior: "smooth",
    });
};
hanDleOnClickBtnK = () => {
    const element = document.getElementById("Contact");
    element.scrollIntoView({ behavior: "smooth", });
};

hanDlegetId = (objButton) => {

    alert("Comming soon!");
}
showMn = () => {
    btnHbgIcn.classList.toggle("bx-x");
    navBr.classList.toggle("showlNav");
}
