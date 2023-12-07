function checkNavTab() {
    const tab1 = document.getElementById("tab1")
    const tab2 = document.getElementById("tab2")
    const tab3 = document.getElementById("tab3")

    tabsArray = [tab1, tab2, tab3]
    for (let i =0; i<tabsArray.length; i++){
        tabsArray[i].addEventListener("click", function() {changeTableVisibility(i)});
    }
    console.log('hi')
}

checkNavTab()

function changeTableVisibility(i) {
    const tab1 = document.getElementById("tab1")
    const tab2 = document.getElementById("tab2")
    const tab3 = document.getElementById("tab3")

    const tab1Table = document.getElementById("tab1Table")
    const tab2Table = document.getElementById("tab2Table")
    const tab3Table = document.getElementById("tab3Table")

    if (i==0) {
        tab1Table.style.display = "";
        tab2Table.style.display = "none";
        tab3Table.style.display = "none";
        tab1.classList.add("active");
        tab2.classList.remove("active");
        tab3.classList.remove("active");
    } else if (i==1) {
        tab1Table.style.display = "none";
        tab2Table.style.display = "";
        tab3Table.style.display = "none";
        tab1.classList.remove("active");
        tab2.classList.add("active");
        tab3.classList.remove("active");
    } else if (i==2) {
        tab1Table.style.display = "none";
        tab2Table.style.display = "none";
        tab3Table.style.display = "";
        tab1.classList.remove("active");
        tab2.classList.remove("active");
        tab3.classList.add("active");
    }
}