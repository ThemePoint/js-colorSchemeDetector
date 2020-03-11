function getOSColorScheme() {
    if (window.matchMedia === undefined || !window.matchMedia) {
        return 'light';
    }

    var mediaMatches = window.matchMedia('(prefers-color-scheme: dark)');

    if (mediaMatches.matches) {
        return 'dark';
    }

    return 'light';
}

function isDarkMode() {
    var scheme = getOSColorScheme();
    
    if (scheme === 'dark') {
        return true;
    }
    
    return false;
}


function isLightMode() {
    var scheme = getOSColorScheme();

    if (scheme === 'light') {
        return true;
    }

    return false;
}
