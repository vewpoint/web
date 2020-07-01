let secsTotal = 0;

for (i = 0; i < data.length; i++) {
    const presentation = document.getElementById("presentation");
    const slide = document.createElement("div");
    if (i === data.length - 1) {
        slide.classList.add("capsule", "flex", "snapBottom");
    } else {
        slide.classList.add("capsule", "flex", "snap");
    }
    // slide.classList.add("capsule", "flex", "snap");
    presentation.appendChild(slide);

    const halfL = slide.appendChild(document.createElement("div"));
    const halfR = slide.appendChild(document.createElement("div"));
    halfL.classList.add("half");
    halfR.classList.add("half");

    const text = halfL.appendChild(document.createElement("div"));
    const footer = halfL.appendChild(document.createElement("div"));
    text.classList.add("text");
    footer.classList.add("footer");

    const tldr = text.appendChild(document.createElement("p"));
    tldr.classList.add("title");
    if (document.documentElement.lang === "es") {
        tldr.innerText = data[i].tldrESP;
    } else {
        tldr.innerText = data[i].tldr;
    }

    const frame = halfR.appendChild(document.createElement("div"));
    frame.classList.add("frame");
    // frame.innerHTML = '<img class="photo" src="assets/images/' + data[i].id + '.jpg">';
    let vCode;
    if (document.documentElement.lang === "es") {
        vCode = data[i].videoCodeESP;
    } else {
        vCode = data[i].videoCode;
    }
    frame.innerHTML = '<iframe class="photo lazyload" data-src="https://www.youtube.com/embed/' + vCode + '" frameborder="0"  allowfullscreen></iframe>';

    secsTotal = secsTotal + data[i].secs;

}

if (document.documentElement.lang === "es") {
    document.getElementById("total").innerHTML = "<p class='title'>" + data.length + " cápsulas. " + duration(secsTotal) + " minutos." + "</p>";
} else {
    document.getElementById("total").innerHTML = "<p class='title'>" + data.length + " capsules. " + duration(secsTotal) + " minutes." + "</p>";
}

function duration(t) {
    const m = Math.trunc(t / 60);
    const s = t % 60;
    let ss;
    if (s < 10) {
        ss = "0" + s.toString();
    } else {
        ss = s.toString();
    }
    return m + ":" + ss;
}