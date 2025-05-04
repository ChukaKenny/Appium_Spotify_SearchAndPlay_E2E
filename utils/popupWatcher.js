async function dismissAppNotRespondingPopup() {
    try {
      
      const waitButton = await $('//*[@text="Wait"]');
  
      if (await waitButton.isDisplayed()) {
        console.log("[Popup Watcher] 'Wait' detected. Clicking...");
        await waitButton.click();
      }
    } catch (error) {
      
    }
  }
  
  module.exports = { dismissAppNotRespondingPopup };
  