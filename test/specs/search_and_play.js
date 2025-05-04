const Homescreen = require("../pageobjects/Homescreen")
const Homepage = require("../pageobjects/Homepage")
const nonEditable_Searchpage = require("../pageobjects/nonEditable_Searchpage")
const Editable_Searchpage = require("../pageobjects/Editable_Searchpage")
const musicListPage = require("../pageobjects/musicListPage")
const nowPlayingWindow = require("../pageobjects/nowPlayingWindow")

describe('Spotify',()=>{


        it('Search & Play',async ()=>{

            const Song_Name = `happy`
            const Song_Artiste = `Pharrell Williams`

            await Homescreen.openApp()
            await Homepage.clickOnSearchIcon()
            await nonEditable_Searchpage.clickOnSearchBar()
            await Editable_Searchpage.searchSong(Song_Name,Song_Artiste)
            await musicListPage.selectSongFromMusicList(Song_Name,Song_Artiste)
            await musicListPage.vefifySongChosen(Song_Name,Song_Artiste)
            await musicListPage.openNowPlayingWindowView()
            await nowPlayingWindow.verifySelectedSongIsPlaying()
            await nowPlayingWindow.closeNowPlayingBar_WindowView()
            await Homescreen.closeApp() 

        })

        
})