let registrationUser = {
    firstName: 'Rostyslav',
    lastName: 10,
    telephone: 0995467876,
    password: '34657test',
}

Feature('store');

Scenario('test something', ({ I, homePage, registerPage }) => {
    I.openStore();
    homePage.openRegistrationPage();
    registerPage.verifyRegisterAccountText();
    registrationUser.email = Date.now() + '@test.com';
    registerPage.fillRegistrationDetails(registrationUser);
   
    
    pause();

});

