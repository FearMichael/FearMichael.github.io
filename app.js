M.AutoInit();

const sectionContent = $(".sectionContent");
const sectionList = $(".sectionList");
const title = $(".titleButtons");

screenSizeAdj = () => {
    if ($(window).width() < 990) {
        sectionContent.addClass("center-align");
        sectionList.addClass("narrowList");
        title.removeClass("valign-wrapper");
    } else {
        sectionContent.removeClass("center-align");
        sectionList.removeClass("narrowList");
        title.addClass("valign-wrapper");
    }
};

$(document).ready(function() {
    screenSizeAdj();
    $(window).resize(function() {
        screenSizeAdj();
    });
});