const { I } = inject();

module.exports = {

registerHeaderText: 'Register Account',
firstNameField: {css: '#input-firstname'},
lastNameField: {css: '#input-lastname'},
emailField: {css: '#input-email' },
telephoneField: {css: '#input-telephone'},
passwordField: {css: '#input-password'},
passwordConfirmField: {css: '#input-confirm'},
privacyPolicyButton: {xpath: '//*[@id="content"]/form/div/div/input[1]'},
continueButton: {xpath: '//*[@id="content"]/form/div/div/input[2]'},

verifyRegisterAccountText(){
  I.see(this.registerHeaderText);
},

fillRegistrationDetails(user){
  I.fillField(this.firstNameField, user.firstName);
  I.fillField(this.lastNameField, user.lastName);
  I.fillField(this.emailField, user.email);
  I.fillField(this.telephoneField, user.telephone);
  I.fillField(this.passwordField, user.password);
  I.fillField(this.passwordConfirmField, user.password);

  I.click(this.privacyPolicyButton);
  I.click(this.continueButton);
}
}
