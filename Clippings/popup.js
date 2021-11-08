// get user element
let user = document.getElementById("user");
let uploadButton = document.getElementById("upload");

chrome.storage.sync.get("id", ({ id }) => {
    user.innerHTML = id;
});

// load file uploaded, parse by whitespace, adds to chrome storage
function upLoadCouponFile() {
    var reader = new FileReader();
    var [file] = document.querySelector("input[type=file]").files;
    reader.addEventListener('load', function() {
        let newCodes = reader.result.split(" ");
        chrome.storage.sync.get({codes: []}, (data) => {
            alert(data.codes);
            newCodes.forEach(function(code) {
                if (!(code in data.codes)) {
                    data.codes.push(code);
                }
            });
            chrome.storage.sync.set({codes: data.codes});
        });
    }, false);
    reader.readAsText(file);
}

uploadButton.addEventListener("click", upLoadCouponFile);