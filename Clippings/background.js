// request to make new user, assign returned id to chrome storage
function generateUser() {
    console.log("requesting to generate new user in database");
    var url = 'http://localhost:5000/users';
    var requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: 'Generate new user thru POST request'})
    }
    fetch(url, requestOptions)
    .then(res => res.json())
    .then(data => {
        let id = data.id;
        chrome.storage.sync.set({"id": id}, function() {
            console.log("New User:",data.id);
        });
        chrome.storage.sync.set({"codes": []}, function() {
            console.log("empty list of codes generated in chrome storage")
        });
    });
}

// Generate new user in mongodb database when extension is installed
chrome.runtime.onInstalled.addListener(generateUser);
