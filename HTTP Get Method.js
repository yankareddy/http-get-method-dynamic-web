let sendGetRequestBtnEl = document.getElementById("sendGetRequestBtn");
let loadingEl = document.getElementById("loading");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse")

function displayResult(result) {
    loadingEl.classList.add("d-none");
    requestStatusEl.textContent = result.code;
    httpResponseEl.textContent = JSON.stringify(result);
}

function sendGetRequest() {
    loadingEl.classList.remove("d-none");
    let options = {
        method: "GET",
    }
    fetch("https://gorest.co.in/public-api/users", options)
        .then(function(response) {
            return response.json()
        }).then(function(jsonData) {
            console.log(jsonData);
            displayResult(jsonData);
        });
}

sendGetRequestBtnEl.addEventListener("click", sendGetRequest);