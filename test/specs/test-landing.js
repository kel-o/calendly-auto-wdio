const assert = require('assert')
const LandingPage = require('../pageobjects/landing.page')

jasmine.DEFAULT_TIMEOUT_INTERVAL = 400000;

describe('calendly landing page', () => {
    it('should have the right title', () => {
        LandingPage.open()
        
        LandingPage.signUpEmailTbx.waitForDisplayed({timeout:5000})
        LandingPage.signUpEmailTbx.setValue('kel.okekpe+auto3@calendly.com')

        LandingPage.signUpBtn.click()

        LandingPage.emailPasswordSignUpBtn.waitForExist({timeout:5000})
        LandingPage.emailPasswordSignUpBtn.click()

        LandingPage.nameTbx.waitForExist({timeout:5000})
        LandingPage.nameTbx.setValue('Automation User2')
        LandingPage.passwordTbx.setValue('TESTPASSWORD')
        LandingPage.submitSignUpDetailsTbx.click()

        LandingPage.emailInvitationText.waitForExist({timeout:5000})
        assert.strictEqual(LandingPage.emailInvitationText.getText(), 'Before continuing, we need to verify your email address. Please check your inbox for a confirmation link.')
    })
})


