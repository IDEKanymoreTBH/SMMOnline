function renderTable(renderableItems) {
    const tableBody = document.querySelector("#e tbody");
    tableBody.innerHTML = ''; //Clear Rows
    renderableItems.forEach(element => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td><a href="${element.link}">${element.name}</a></td>
        <td>${element.dateAdded}</td>
        `;
        tableBody.appendChild(row)
    });

}
let items = [
    {name: "SMM JE Test Level", link: "https://idekanymoretbh.github.io/SMMOnline/?levelId=-1", dateAdded: "N/A"},
    {name: "Wait For Update To Add. Do Krunker Instead", link: "https://krunker.io", dateAdded: "Soon..."}
];
const levelParam = new URLSearchParams(window.location.search);
const level = levelParam.get("levelId");
if(level !== null) {
    document.getElementById("h1").innerHTML = "Level Info";
    document.getElementById("e").style.visibility = "hidden";
    document.getElementById("h2").style.visibility = "hidden";
    document.getElementById("filterButton").style.visibility = "hidden";
    document.getElementById("filterer").style.visibility = "hidden";
    document.getElementById("h21").style.visibility = "visible";
    document.getElementById("h22").style.visibility = "visible";
    document.getElementById("h23").style.visibility = "visible";
    document.getElementById("h21").innerHTML = "Level Id: ".concat(level);
    document.getElementById("h22").innerHTML = "Level Name: SMM JE Test Level";
    document.getElementById("filterer").innerHTML = "Level Creation Date: N/A"; //Will Change For Next Update
    document.getElementById("h23").style.visibility = "hidden";
}
renderTable(items);
function handleFilter() {
    const filter = document.getElementById("filterer").value;
    const filteredItems = items.filter(item => item.name.includes(filter));
    renderTable(filteredItems);
}
