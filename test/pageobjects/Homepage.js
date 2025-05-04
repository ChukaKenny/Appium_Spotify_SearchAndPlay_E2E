class homePage {

    get searchIcon(){
        return $('android= new UiSelector().resourceId("com.spotify.music:id/search_tab")')
    }

    async clickOnSearchIcon(){ 
            
        await this.searchIcon.waitForExist({timeout:20000,timeoutMsg:"Search Icon did not load"})
        await this.searchIcon.click()

        
    }

}

module.exports = new homePage()