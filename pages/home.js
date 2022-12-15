const { I } = inject();

module.exports = {
  myAccountSpoiler: { xpath: '//*[@id="top-links"]/ul/li/span/span' },
  registerButton: { xpath: '//*[@id="top-links"]/ul/li/ul/li[1]/a' },

  openRegistrationPage(){
    I.click(this.myAccountSpoiler);
    I.click(this.registerButton);
  }
}
