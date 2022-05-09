function checkWarp() {
    if (getPageSetting('warpPressed') === true) {
        game.global.lastOnline = new Date() - 3600 * 1000 * 10;
        checkOfflineProgress()
        setPageSetting('warpPressed', false)
    }

    if (getPageSetting('resetDailies') === true) {
        game.global.recentDailies = [];
        setPageSetting('resetDailies', false)
    }

    if (getPageSetting('addHeirlooms') === true) {
        const amount = getPageSetting('addHeirloomAmount')
        const level = getPageSetting('addHeirloomLevel')
        const addSpireCores = getPageSetting('addHeirloomSpire');

        [...new Array(amount)].map(() => createHeirloom(level, false, addSpireCores, false))
        setPageSetting('addHeirlooms', false)
    }
}