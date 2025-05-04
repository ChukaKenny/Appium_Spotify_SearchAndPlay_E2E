class nowPlayingWindow {

    get musicSeekBar(){
        return $('android=new UiSelector().resourceId("com.spotify.music:id/seekbar")')
        
    }

    get Offline(){
        return $('android= new UiSelector().text("You’re offline")')
    }

    get musicDuration_Timer(){
        return $('android= new UiSelector().resourceId("com.spotify.music:id/position_text")')
    }

    get nowPlayingBar(){
        return $('~Now Playing Bar')
    }

    get NowPlayingBar_WindowView_CloseButton(){
        return $('android= new UiSelector().description("Close")')
    }

    async durationStringToNumber(durationString){
            
            const[minutes,seconds] = durationString.split(":")
            return parseFloat(`${minutes}.${seconds}`)

    }

    async isSongPlaying(){

            await this.musicSeekBar.waitForExist({timeout:10000,timeoutMsg:"Now Playing Bar Window-View was not triggered"})
            const initialDuration_Value_String = await this.musicDuration_Timer.getText()
            const initialDuration_Value_Number = await this.durationStringToNumber(initialDuration_Value_String)
            await browser.pause(5000)
            const laterDuration_Value_String = await this.musicDuration_Timer.getText()
            const laterDuration_Value_Number = await this.durationStringToNumber(laterDuration_Value_String)
            const timeElapsed = parseFloat(laterDuration_Value_Number-initialDuration_Value_Number)
            const zeroedTimer = parseFloat(0.00)

            console.log(`
                            Initial time: ${initialDuration_Value_String} 
                            later time: ${laterDuration_Value_String}
                            Initial time (decimal): ${initialDuration_Value_Number}
                            Later time (decimal): ${laterDuration_Value_Number}
                            Time Elapsed: ${timeElapsed}
                        `)

            expect (laterDuration_Value_Number).toBeGreaterThan(initialDuration_Value_Number)
            expect (timeElapsed).toBeGreaterThan(zeroedTimer)


    }

    

    async verifySelectedSongIsPlaying(){ 
         

        if ((await this.Offline.isExisting()) === false) { 

            await this.isSongPlaying()

        }

        else if ((await this.Offline.isExisting()) === True) {

                await browser.pause(5000)
                await this.isSongPlaying()
                  
        }


    }

    


    async closeNowPlayingBar_WindowView(){
        
        await this.NowPlayingBar_WindowView_CloseButton.click()
        await this.nowPlayingBar.waitForExist({timeout:5000,timeoutMsg:"Now Playing Bar Window View did not close"}) 

     }   



        


        
        
    


} 

module.exports = new nowPlayingWindow()