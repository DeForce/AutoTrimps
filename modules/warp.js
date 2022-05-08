function checkWarp() {
    if (getPageSetting('warpPressed')) {
        game.global.lastOnline = new Date() - 3600 * 1000 * 10;
        checkOfflineProgress()
        setPageSetting('warpPressed', false)
    }
}