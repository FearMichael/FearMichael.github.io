M.AutoInit();

const sectionContent = $(".sectionContent");
const sectionList = $(".sectionList");

screenSizeAdj = () => {
    if ($(window).width() < 990) {
        sectionContent.addClass("center-align");
        sectionList.addClass("narrowList");
    } else {
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