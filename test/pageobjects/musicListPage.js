class musicListPage {

    get listedSongs(){
        return $$('android=new UiSelector().resourceId("com.spotify.music:id/row_root")')
    }

    get nowPlayingBar(){
        return $('~Now Playing Bar')
    }

    get nowPlayingBar_Title(){
        return $('android=new UiSelector().resourceId("com.spotify.music:id/track_info_view_title")') 
    }

    get nowPlayingBar_subTitle(){
        return $('android= new UiSelector().resourceId("com.spotify.music:id/track_info_view_subtitle")')
    }


    get nowPlayingBar_Center(){
        return $('android=new UiSelector().resourceId("com.spotify.music:id/track_info_view")')
    }


    async selectSongFromMusicList (Song_Name,Song_Artiste){ 


            //select song 
            const listedSongs = await this.listedSongs

            for (let song of listedSongs){
                
                try {
    
                    const songTitle = song.$('android= new UiSelector().resourceId("com.spotify.music:id/title")')
                    const songSubTitle = song.$('android= new UiSelector().resourceId("com.spotify.music:id/subtitle")')
                    const songTitle_Text = await songTitle.getText()
                    const songSubTitle_Text = await songSubTitle.getText()
                    const correctSong = new RegExp(Song_Name,"i").test(songTitle_Text)
                    const correctArtiste = new RegExp(Song_Artiste,"i").test(songSubTitle_Text)
                    const isSong = /song/i.test(songSubTitle_Text)
                    
    
                        if (isSong && correctSong && correctArtiste) {
                            await song.click()
                            break;
                        }
    
                }
                
                catch (error) {
                    console.error(`Error processing songs: ${error.message}`)
                    throw error;
                }
    
            }

  
    }



    async vefifySongChosen(Song_Name,Song_Artiste){

        await this.nowPlayingBar.waitForExist({timeout:5000,timeoutMsg:"Now Playing Bar did not pop up"})
        await expect(this.nowPlayingBar).toExist()

        const nowPlayingBar_Title_Text = await this.nowPlayingBar_Title.getText();
        const nowPlayingBar_subTitle_Text = await this.nowPlayingBar_subTitle.getText();

        await expect(nowPlayingBar_Title_Text).toMatch(new RegExp(Song_Name, 'i'))
        await expect(nowPlayingBar_subTitle_Text).toMatch(new RegExp(Song_Artiste, 'i'))

    }

    async openNowPlayingWindowView(){

        await this.nowPlayingBar_Center.click()

    }


}

module.exports = new musicListPage()