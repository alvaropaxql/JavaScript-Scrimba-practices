let myLeads = []
const inputEl = document.getElementById("input-el") // const make a variable not be able to be reassigned
const inputSaveBtn = document.getElementById("input-btn")
const tabSaveBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

inputSaveBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

tabSaveBtn.addEventListener("click", function () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems +=
            `<li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>`
        /*
        listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        *------------------------------------------------------------------------------------------*
        const li = document.createElement("li")
        li.textContent = myLeads[i]
        ulEl.append(li)
        */
    }
    ulEl.innerHTML = listItems
}