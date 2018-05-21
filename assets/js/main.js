$(document).ready(function () {
    $(".LoadingAnimation").fadeOut();
    $(".Main").fadeIn();
});

function GoToSite(SiteName) {
    switch (SiteName) {
        case "Twitter":
            window.location="https://twitter.com/IcarusAP29";
            break;
        case "Instagram":
            window.location="https://www.instagram.com/paranoidphotographer.ig/";
            break;
        case "YouTube":
            window.location="https://www.youtube.com/channel/UC2wTAKmO8zdEyxVJJoNdePQ";
            break;
        case "GooglePlus":
            window.location="https://plus.google.com/+AakashNPAAKASHNP";
            break;
    }
}