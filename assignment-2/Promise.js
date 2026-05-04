"use strict";
async function getUser() {
    console.log("Fetching...");
    let data = await fetchUser();
    console.log(data);
}
getUser();
function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Preeti");
        }, 2000);
    });
}
function getData() {
    return new Promise((resolve, reject) => {
        let success = true;
        setTimeout(() => {
            if (success) {
                resolve("Data received");
            }
            else {
                reject("Error occurred");
            }
        }, 1000);
    });
}
;
getData().then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
