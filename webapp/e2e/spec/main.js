var login = require('../login.js'),
    properties = require('../../../e2e-properties.js'),
    randomName = require('../wizard/steps/Validation/GerenatorNAME.js'),
    randomCPF = require('../wizard/steps/Validation/GerenatorCPF.js'),
    register = require('../wizard/steps/createAcc.js');

var Url = properties.Url;
var Register = properties.Register;
var username = properties.username;
var password = properties.password;


describe('Starting a customers registration screen',function () {
    var name = new randomName();
    var cpf = new randomCPF();
    var cpfGenerate = cpf.generate();
    var nameUserMale = name.generateNameMale();

    beforeEach(function () {
        browser.driver.get(crmUrl);

        browser.sleep(1000);

        browser.driver.findElement(by.id("username")).sendKeys(username);
        browser.driver.findElement(by.id("password")).sendKeys(password);

        browser.sleep(1000);

        browser.driver.findElement(by.xpath('//*[@id="submit"]')).click();

        browser.get(crmRegister);
    });

    it('Successful customer registration',function () {
    });

});