// Copyright (c) 2017 Codarren Velvindron @ hackers.mu
// Tab Purifier Version 2.1.1
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
                var blacklist = ["fuck", "fucks", "Fucking", "fucking","Porn", "porn", "Porn,", "PORN", "Stripper", "Galleries","galleries", "Stroke","Strokes","stroke","strokes", "Tube", "tubes", "Tubes", "tube", "Stuffers", "Gainers","Hentai", "hentai", "Adult", "adult", "SEXY", "sex", "Sex", "sexy", "Sexy", "Amateur", "Amateurs", "amateur", "amateurs", "Lingerie", "lingerie", "cam", "cams", "Cam", "Cams","GIRLS","Girl", "Girls", "webcam", "Webcam", "Webcams", "TopliveSexcams", "Flirt", "flirt", "Dirty", "dirty", "Whore", "whore", "whores", "Hot", "hot", "Chat", "chat", "Jasmin", "Boobs", "boobs", "tits", "panty", "panties", "Sexy", "sexiest", "Sexiest", "beeg.","Nude", "nude", "nudes", "Nudes", "Nudity", "nudity", "Public", "public", "XXX","xxx", "Celebs", "Pornstars", "Pornstar", "pornstar", "pornstars", "PornStar", "Landing", "Big", "Elegant", "Angel","Perfectgonzo","SuicideGirls","Puffynetwork.com", "Pics", "Fling", "18?", "18", "18+", "Ass", "ass", "boobies", "Archive", "Femdom", "femdom", "BDSM", "SKINN", "slut", "Slut", "sluts", "Sluts", "Pussy", "pussy", "Naked", "naked", "Babes", "Babe", "babe", "NSFW", "nsfw", "Nasty", "nasty", "Underground", "Barely", "legal", "Legal", "Teen","Teens","teen","teens", "teenies", "teensite", "hardcore","Hardcore", "Chick", "Chicks", "chicks", "chick", "Thong", "Thongs", "thong", "thongs", "Huge","huge", "meat", "dick","dicks","Dicks", "Dick", "StreamPorno", "Milf", "milf", "LegalPorno", "HD", "Porno", "Pornos","porno","pornos","porno,", "Porno.", "Porno:", "porno:", "PORNOS!","PORNOS","PORNO", "Sesso", "Playboy", "erotic", "erotica.", "Pornstar", "Sensations", "sensation","Sensation","Desire","Tolerance", "PornMastermind.com", "Models", "Boys", "Model", "model", "MyFreeCams", "Pussytorrents.org","PornoLab.Net", "LustPin.com", "Skeet", "NWSGifs", "Thenewporn", "Updatetube", "Wank", "wank","wanking", "masturbate", "Female", "female", "fapdu", "ElephantTube", "Clips", "Private", "Anal", "Fetish", "free-porn-sites", "free-porn-site", "iWank", "fake", "Fake", "FAP","Fap", "fap", "Fappyness", "free-porn-websites", "TotalPorn", "gay", "shemale", "lesbian", "XVIDEOS.COM", "cochons", "cochon", "cochonne", "Salope", "Sexe", "sexe", "salope", "salopes", "XNXX.COM", "Pornhub.com", "BBWHeavyTits.com", "BangBros", "21sextury", "GetItOn", "JustUsBoys", "Mafia-Linkz", "pornhost.com", "PornShare", "TuKif.com", "adultère", "cul", "chatte", "encule", "chienne", "queue", "grosse", "bite", "chaleur", "nu", "nue",  "Français", "Française", "mariées", "discrétion", "Chaud", "Chauds", "chaud", "chauds", "baise", "baiser", "fille", "Fille", "Petite", "petite", "pute", "mature", "honte", "rencontres", "putas", "Putas", "порно", "Порно"];
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
chrome.commands.onCommand.addListener(function(command) {
  if (command == "quickkill") {
	  detectTab();
}});
