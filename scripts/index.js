const dots = document.querySelector("#dots");
const btnSubmit = document.querySelector("#btn-submit");
dots.addEventListener("click", (event) => {
    if (event.target.id ==dots.id ) return 
    else{
        event.target.style.backgroundColor = "hsl(25, 97%, 53%)";
    let value = event.target.innerHTML;
    const amount = document.querySelector("#amount").innerHTML=value;
    dots.setAttribute("disabled", true);
    }
});
btnSubmit.addEventListener("click", () => {
    const card = document.querySelector("#card").style.display = "none";
    const cardThank = document.querySelector("#card-thank").style.display = "flex";
});
