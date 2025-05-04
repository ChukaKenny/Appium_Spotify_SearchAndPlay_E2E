class homeScreen {

    get spotifyApp(){
        return $('~Spotify')
    }

    async openApp(){  
        await this.spotifyApp.click()
    }

    async closeApp(){
        await driver.terminateApp("com.spotify.music")
        await driver.pressKeyCode(3)
    }

}

module.exports = new homeScreen()