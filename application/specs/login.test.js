import { $, expect} from '@wdio/globals'
import { faker } from '@faker-js/faker'


describe('Login Test', () => {
    let userData;
    before( async function () {
        userData = {
            firstName: faker.name.lastName(),
            lastName:  faker.name.firstName(),
            phone: faker.phone.number('national'),
            email: `EBAC_aluno.${Math.floor(Math.random() * 100000)}@qa.com`,
            password: faker.internet.password()
        },
        userData.repassword = userData.password;
    })
    it('should login with valid credentials', async function () {
        await $('android=new UiSelector().text("Profile")').click()
        await $('android=new UiSelector().text("Sign up")').click()

            const firstName = $('android=new UiSelector().text("First Name")');
            const lastName = $('android=new UiSelector().text("Last Name")');
            const phone = $('android=new UiSelector().text("Phone Number")');
            const email = $('android=new UiSelector().text("Email Address")');
            const password = $('android=new UiSelector().text("Password")');
            const repassword = $('android=new UiSelector().text("Re-enter Password")');
        

        await firstName.setValue(userData.firstName)
        await lastName.setValue(userData.lastName)
        await phone.setValue(userData.phone)
        await email.setValue(userData.email)
        await password.setValue(userData.password)
        await repassword.setValue(userData.repassword)
        await $('android=new UiSelector().text("Create")').click()

        await driver.pause(10000)
    })
})
