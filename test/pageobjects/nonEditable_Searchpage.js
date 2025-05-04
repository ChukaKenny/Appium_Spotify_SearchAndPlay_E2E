class nonEditable_searchPage {

    get searchBar_Static(){
        return  $('android= new UiSelector().resourceId("com.spotify.music:id/find_search_field_text")')
    }

    async clickOnSearchBar(){ 
         
        await this.searchBar_Static.waitForExist({timeout:10000,timeoutMsg:"Static Search Bar did not load"})
        await this.searchBar_Static.click()

    }

}

module.exports = new nonEditable_searchPage()