const note1 = document.getElementById("note1");
const note2 = document.getElementById("note2");
const noteButton1 = document.getElementById("noteButton1");
const noteButton2 = document.getElementById("noteButton2");
const bBgColor = noteButton1.style.backgroundColor;
const bColor = noteButton1.style.color;
const bBgColorOver = "red";
const bColorOver = "#e2e2e2";

note1.addEventListener("mouseenter", function () {
    note1.style.cursor = "pointer";
    noteButton1.style.backgroundColor = bBgColorOver;
    noteButton1.style.color = bColorOver;
});

note1.addEventListener("mouseleave", function () {
    note1.style.cursor = "default";
    noteButton1.style.backgroundColor = bBgColor;
    noteButton1.style.color = bColor;
});

note1.addEventListener("click", function () {
    note1.classList.add("hidden");
    note2.classList.remove("hidden");
});

note2.addEventListener("mouseenter", function () {
    note2.style.cursor = "pointer";
    noteButton2.style.backgroundColor = bBgColorOver;
    noteButton2.style.color = bColorOver;
});

note2.addEventListener("mouseleave", function () {
    note2.style.cursor = "default";
    noteButton2.style.backgroundColor = bBgColor;
    noteButton2.style.color = bColor;
});

note2.addEventListener("click", function () {
    note2.classList.add("hidden");
    note1.classList.remove("hidden");
});

window.onload = function () {
    document.getElementById("presentation").style.visibility = 'visible';
    document.getElementById("presentation").focus();
}

