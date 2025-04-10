const input = document.querySelector("input");
const btn = document.querySelector("button");

let fetchFile = async (url) => {
    try {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error("Failed to download file :(");
        }
        let file = await res.blob();
        let tempURL = URL.createObjectURL(file);
        console.log(tempURL);
        let aTag = document.createElement('a');
        aTag.href = tempURL;
        aTag.download = "File";
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempURL);
        btn.innerText = "Download File";
    }
    catch(err) {
        btn.innerText = "Download File";
        alert(err)
    }

}

btn.addEventListener("click", e => {
    e.preventDefault();
    btn.innerText = "Downloading File...";
    fetchFile(input.value);
});