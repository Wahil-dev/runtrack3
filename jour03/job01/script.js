let text = $("#text");
// $("#show").on("click", () => {
//     text.addClass("afficher")
// })

// $("#hide").on('click', () => {
//     //text.removeClass("afficher");
//     document.write("")
// })

$(function() {
    $("#show").click(() => {
        text.show();
    })
    $("#hide").click(() => {
        text.hide();
    })
})