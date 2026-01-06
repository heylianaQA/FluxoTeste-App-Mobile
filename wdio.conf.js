export const config = {
    user: 'oauth-harmonica.friends-848f7',
    key: '7138fafc-5117-41dd-8292-980f5969ef6e',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub', 

    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 100,

    capabilities: [{
         /*// capabilities for local Appium web tests on an Android Emulator
         platformName: 'Android',
         'appium:deviceName': 'ebac:5554',
         'appium:platformVersion': '12.0',
         'appium:automationName': 'UiAutomator2',
         'appium:app': `${process.cwd()}/app/ebacstore.apks`,
         'appium:appWaitActivity': '.MainActivity',
         'appium:disableIdLocatorAutocompletion': true, */

       platformName: 'Android',
        'appium:app': 'storage:filename=ebacshop.aab', // The filename of the mobile app
        'appium:deviceName': 'Samsung.*',
        'appium:platformVersion': '13',
        'appium:automationName': 'UiAutomator2',
        'appium:disableIdLocatorAutocompletion': true,
        'sauce:options': {
            build: 'ebacstore',
            name: 'ebac signup test',
            deviceOrientation: 'PORTRAIT',
        },
    }],

    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
}
