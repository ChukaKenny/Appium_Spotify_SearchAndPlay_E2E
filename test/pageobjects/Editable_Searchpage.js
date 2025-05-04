class editable_searchPage {

    get searchBar_Editable(){
        return $('android= new UiSelector().resourceId("com.spotify.music:id/query")')
    }

    get firstSearchItem(){
        return $('android= new UiSelector().resourceId("com.spotify.music:id/row_root").instance(0)')
    }

    get (){
        return
    }

    get (){
        return
    }

    async searchSong(Song_Name,Song_Artiste){ 
         
                await this.searchBar_Editable.waitForExist({timeout:10000,timeoutMsg:"Editable Search Bar did not load"})
                await browser.keys(`${Song_Name} ${Song_Artiste}`)
                await driver.pressKeyCode(66)
                await this.firstSearchItem.waitForExist({timeout:10000,timeoutMsg:"Songs did not load"})

    }

}

module.exports = new editable_searchPage()