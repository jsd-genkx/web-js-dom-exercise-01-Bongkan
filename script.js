function changeH2() {
    document.querySelector('#changeMe').innerHTML = "Hello JavaScript InnerHTML!";
    //inline onClick function from HTML link to the function changeH2
    //Inside changeH2 we get the H2 by select tag #changeMe using querySelector
    //then change the text inside with innerHTML = "XXX"


    //Change background of H2 to yellow with style.background
    document.querySelector('#changeMe').style.backgroundColor = "#FAECC6";


    //add class (tailwind css class) to H2 using classList.add
    document.querySelector('#changeMe').classList.add("font-bold");

    document.querySelector('#changeMe').classList.add("text-2xl");
}



