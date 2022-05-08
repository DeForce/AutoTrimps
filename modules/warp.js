function checkWarp() {
    if (getPageSetting('warpPressed')) {
        console.log('checking warp')
        setPageSetting('warpPressed', false)
    }
}