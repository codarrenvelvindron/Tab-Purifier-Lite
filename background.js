// Copyright (c) 2017 Codarren Velvindron @ hackers.mu
// Tab Purifier Version 2.3.1
// The purpose of Tab Purifier Lite is to close all porn tabs using only 1 button!
// MIT License

function detectTab(){
    chrome.tabs.query({

    },  function(array_of_Tabs) {
            arrayLength = array_of_Tabs.length;
            var blacklist = ["fuck", "fucks", "Fucks", "Fucking", "fucking","Porn", "porn", "Porn,", "PORN", "Stripper", "Young", "young", "Galleries","galleries", "Stroke", "squirt", "Wet", "wet",  "Squirt",  "Blowjob", "blowjob", "Black", "Drilling", "Sucking", "Getting", "getting", "sucking", "came", "Came", "foursome", "threesome", "Threesome", "Foursome", "Cum", "cum", "Wild", "wild",  "drilling","Strokes","stroke","strokes", "Tube", "tubes", "Machine",  "Tubes", "tube", "tube,", "Stuffers", "Gainers","Hentai", "hentai", "Adult", "adult", "sweet", "Sweet", "SEXY", "sex", "Sex", "sex,", "sex.", "Sexing", "sexy", "Sexy", "Amateur", "Amateurs", "amateur", "amateurs", "Lingerie", "lingerie", "cam", "cams", "Cam", "Cams","GIRLS","Girl", "Girls", "webcam", "Webcam", "Webcams", "TopliveSexcams", "Flirt", "flirt", "Dirty", "dirty", "cock", "Cock", "back", "Back", "Whore", "whore", "whores", "Hot", "hot", "Hottest",  "Chat", "chat", "Jasmin", "Boobs", "boobs", "tits", "Tits", "panty", "panties", "Sexy", "sexiest", "Sexiest", "beeg.","Nude", "nude", "nudes", "Nudes", "Nudity", "nudity", "Public", "public", "Latina", "XXX","xxx", "Celebs", "Pornstars", "Pornstar", "pornstar", "pornstars", "PornStar", "Topless", "topless", "Landing", "Big", "Elegant", "Angel","Perfectgonzo","SuicideGirls","Puffynetwork.com", "Pics", "Fling", "18?", "18", "18+", "Ass", "ass", "boobies", "Archive", "Femdom", "femdom", "BDSM", "SKINN", "slut", "Slut", "sluts", "Sluts", "Nipples", "Pussy", "pussy", "good", "Good", "father", "Father", "Daughter", "daughter", "Russian", "Arabe", "Spanish", "British",  "Naked", "Tease", "naked", "Mistress", "Babes", "Babe", "babe", "NSFW", "nsfw", "Nasty", "nasty", "Underground", "Barely", "legal", "Legal", "likes", "Teen","Teens","teen","teens", "teenies", "dressing", "room", "teensite", "japanese", "Older", "old", "hardcore","Hardcore", "Grind", "Chick", "Chicks", "chicks", "chick", "Thong", "Thongs", "thong", "thongs", "Huge","huge", "meat",  "dick","dicks","Dicks", "Dick", "StreamPorno","MILF", "Milf", "milf", "LegalPorno", "HD", "Porno", "small", "Small",  "Pornos","porno","pornos","porno,", "Vintage", "Porno.", "Porno:", "porno:", "PORNOS!","PORNOS","PORNO", "Sesso", "Playboy", "erotic", "erotica.", "Pornstar", "Sensations", "couple", "Couple", "Busty", "Share", "sensation","Sensation","Desire","Tolerance", "PornMastermind.com", "Models", "Boys", "Model", "model", "MyFreeCams", "Pussytorrents.org","PornoLab.Net", "LustPin.com", "Skeet", "NWSGifs", "Thenewporn", "Updatetube", "Wank", "wank", "upskirt", "uniform", "wanking", "masturbate", "Female", "female", "fapdu", "ElephantTube", "Clips", "Private", "Anal", "anal", "Fetish","fetish", "kinky", "Kinky", "free-porn-sites", "free-porn-site", "iWank", "fake", "Fake", "FAP","Fap", "fap", "Fappyness", "free-porn-websites", "TotalPorn", "gay", "shemale", "lesbian", "XVIDEOS.COM", "cochons", "cochon", "cochonne", "Salope", "Sexe", "sexe", "salope", "salopes", "XNXX.COM", "xHamster", "ImLive.com","", "Wife", "wife", "BBC", "BBW", "GF", "gf", "Cuckold", "cuckold", "his","His", "MOTHERLESS.COM", "Pornhub.com", "BBWHeavyTits.com", "BangBros", "21sextury", "GetItOn", "JustUsBoys", "Mafia-Linkz", "pornhost.com","swegold.com", "PornShare", "TuKif.com", "adultère", "cul", "chatte", "Chatte", "mouille", "Beurette", "beurette", "encule", "chienne", "queue", "grosse", "bite", "chaleur", "nu", "nue", "BELLE", "belle", "Français", "Française", "mariées", "discrétion", "Chaud", "Chauds", "chaud", "chauds", "baise", "baiser", "fille", "Fille", "Femme", "femme","Leche", "leche", "Petite", "tights", "Meaty", "buttocks", "petite", "pute", "Mature", "mature", "honte", "rencontres", "puta", "Puta", "putas", "Putas", "порно", "Порно", "Married", "Dating", "dating", "Luscious", "lust", "Lust", "pornBB", "Schwester", "Frau", "deren", "pornografia", "Bastos", "sexo", "mulher", "pornô", "Pornô", "espontaneo", "Espontaneo", "Follando", "Follanda", "follanda", "follando", "Culo", "culo", "mujer", "Mujer", "dama", "Dama", "Parejita", "parejita", "Jovencisima", "jovencisima", "Vicio", "vicio", "Amador", "amador", "grabando", "Grabando", "escena", "SEB", "Lesbico", "lesbico", "Pelirroja", "pelirroja", "Pollas", "pollas", "Vicioso", "vicioso", "Viciosa", "Viciosa", "VICIOSA", "Atracada", "atracada", "Bestia", "bestia", "verga", "Verga", "meten", "chochaso", "miesposa", "acrobatica", "Follada", "nena", "guarra", "fea", "culito", "Culito", "mostrando", "chica", "trio", "Trio", "Ninfomana", "ninfomana", "Orgia", "orgia", "par", "Par", "corridas", "esposa", "Esposa", "cama", "Cama", "asyali", "kizin", "Kizin", "sikmek", "Seks", "seks",  "eşek", "horoz"];

            for (var i = 0; i < arrayLength; i++) {
                var tab = array_of_Tabs[i].id;
                var title = array_of_Tabs[i].title;
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
