M.AutoInit();

const sectionContent = $(".sectionContent");
const sectionList = $(".sectionList");
// const emailButton = $(".emailButton");

// emailButton.click(function(event) {
//     let name = $(".emailName").val().trim();
//     let content = $(".emailBody").val().trim();
//     let email = $(".email").val().trim();
//     let form = {email, name, content}
//     console.log(name, email, content);
//     $.post("https://mbhp5d3aud.execute-api.us-east-1.amazonaws.com/dev/email/send", form, function(data) {
//         console.log(data);
//     });
// });

screenSizeAdj = () => {
    if ($(window).width() < 990) {
        sectionContent.addClass("center-align");
        sectionList.addClass("narrowList");
    } else if ($(window).width() < 990) {
        sectionContent.removeClass("center-align");
        sectionList.removeClass("narrowList");

    }
};

$(document).ready(function() {
    screenSizeAdj();
    $(window).resize(function() {
        screenSizeAdj();
    });
});