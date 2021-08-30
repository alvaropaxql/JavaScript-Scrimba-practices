let myLeads = []
const inputEl = document.getElementById("input-el") // const make a variable not be able to be reassigned
const inputSaveBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputSaveBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += 
            `<li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>`
        /*const li = document.createElement("li")
        li.textContent = myLeads[i]
        ulEl.append(li)*/
    }
    ulEl.innerHTML = listItems
}