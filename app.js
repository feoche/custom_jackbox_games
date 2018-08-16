function getJSON(url, callback) {const xhr = new XMLHttpRequest();xhr.open("get", url, true);xhr.responseType = "json";xhr.onload = () => {const status = xhr.status;if (status == 200) {callback(null, xhr.response);} else {callback(status);}};xhr.send();};

let game = $('.page')[0].className.match('drawful') ? `drawful2`: `quiplash2`;
let lang = "fr" || "en";
let trad = [];
getJSON(`https://feoche.github.io/custom_jackbox_games/${game}/${lang}.json`, (err, data) => {
    if (err != null) {
        console.error(`Something went wrong: ${err}`);
    } else {
        trad = data;
        function loop() {
            if (document.getElementById(`ugc-add-input`).style.display === "none") return;
            setTimeout(() => {
                document.getElementById(`ugc-add-input`).value = trad[Math.floor(Math.random() * trad.length)];
                document.getElementById(`ugc-add-button`).click();
                loop();
            }, 10);
        };
        loop();
    }
});

