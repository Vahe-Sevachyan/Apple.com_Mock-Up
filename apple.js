const plusButton = document.querySelector(".expandiblePlusBtn");
const linkButton = document.querySelector("#expandibleMobileLink");
const expandibleHiddenLinks = document.querySelector(".expandibleHiddenLinkList");


// plusButton.addEventListener("click", expandlinks)

// function expandlinks (){
//     // event.preventDefault();
//     expandibleLinks.style.display = "show";
// };

// plusButton.addEventListener("click", ()=>{
//         event.preventDefault()
//     if(expandibleHiddenLinks.style.display == "none"){
//         expandibleHiddenLinks.style.display = "show";
//     } else expandibleHiddenLinks.style.disply = "none"
//      console.log("clicked");
// });

plusButton.addEventListener("click", (event)=>{
    event.preventDefault()
    expandibleHiddenLinks.classList.toggle("expandibleHiddenLinkList");
});

linkButton.addEventListener("click", (event)=>{
    event.preventDefault()
    expandibleHiddenLinks.classList.toggle("expandibleHiddenLinkList");
});

