// Copyright (c) 2017 Codarren Velvindron @ hackers.mu
// Tab Purifier Version 1.73
// The purpose of Tab Purifier Lite is to close all porn tabs using only 1 button!
// MIT License

function detectTab(){
    chrome.tabs.query({

    },  function(array_of_Tabs) {
            arrayLength = array_of_Tabs.length;
            for (var i = 0; i < arrayLength; i++) {
                var tab = array_of_Tabs[i].id;
                var title = array_of_Tabs[i].title;

//Create a blacklist of words common to bad sites
                var blacklist = ["Porn", "porn", "Porn,", "PORN", "Tube", "Tubes", "Adult", "adult", "sex", "Sex", "sexy", "Sexy", "Amateur", "amateur", "Lingerie", "lingerie", "cam", "Cam", "tube", "tubes","Girl", "Girls", "webcam", "Webcam", "Webcams", "Flirt", "flirt", "Hot", "hot", "Chat", "chat", "Jasmin", "Boobs", "boobs", "tits", "panty", "panties", "Sexy", "sexiest", "Sexiest", "beeg.","Nude", "nude", "nudes", "Nudes", "XXX", "Pics", "Fling", "18?", "Ass", "ass", "boobies", "Archive", "Femdom", "femdom", "BDSM", "SKINN","Naked", "naked", "Babes", "Babe", "babe", "NSFW", "nsfw", "Teen", "teen", "StreamPorno", "Milf", "milf", "LegalPorno", "HD", "Porno","porno","pornos", "Sesso", "Playboy", "erotic", "erotica.", "Pornstar", "Sensations", "sensation","Sensation","Desire","Tolerance", "PornMastermind.com", "Models", "Model", "model", "MyFreeCams", "Skeet", "NWSGifs", "Thenewporn", "Updatetube", "Wank", "wank","wanking", "masturbate", "Female", "female", "fapdu", "ElephantTube", "Clips", "Private", "Anal", "Fetish", "free-porn-sites", "free-porn-site", "fake", "Fake", "Fappyness", "free-porn-websites", "TotalPorn", "gay", "shemale", "lesbian", "XVIDEOS.COM"];
                var words = title.split(" ");
                var detectBad = words.filter (function(a) {
            return blacklist.indexOf(a) != -1;
        });

    var check = detectBad.length;
    if (check>0){
        chrome.tabs.remove(tab, function() { });
    };           }
    });
};

chrome.browserAction.onClicked.addListener(detectTab);

