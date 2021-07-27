const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
    /**
     * define selectors using getter methods
     */

    get signUpEmailTbx () { return $('[name=email]') }
    
    get signUpBtn () { return $('[type=submit]') }

    get emailPasswordSignUpBtn () { return $('[type=button]') } 

    get nameTbx () { return  $('[name=name]') }

    get passwordTbx () { return  $('[name=password]') }
  
    get submitSignUpDetailsTbx () { return $('[value="Continue"]') }

    get emailInvitationText () { return $('[class=pbl]') }


    
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    executeSignUpFlow (email, fullName, password) {
       this.signUpEmailTbx.waitForDisplayed()
       this.signUpEmailTbx.setValue(email)
       this.signUpBtn.waitForDisplayed
       this.signUpBtn.click()
       browser.pause(1000)
       this.emailPasswordSignUp.click()
       this.nameTbx.waitForDisplayed()
       this.nameTbx.setValue(fullName)
       this.passwordTbx.waitForDisplayed()
       this.passwordTbx.setValue(password)
       this.submitSignUpDetailsTbx.click()
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new LandingPage();