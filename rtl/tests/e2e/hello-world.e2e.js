const { expect } = require('@wdio/globals');
const HelloWorldPage = require('../pages/hello-world.page');
const SecurePage = require('../pages/secure.page');

describe('Hello World Page', () => {
    it('should toggle Title', async () => {
        await HelloWorldPage.open();
        await HelloWorldPage.toggleHeaderVisibility('hello');
        await expect(HelloWorldPage.header).toBeExisting();
        await HelloWorldPage.toggleHeaderVisibility('hello');
        await expect(HelloWorldPage.header).not.toBeExisting();
    });

    it('should not toggle Title', async () => {
        await HelloWorldPage.open();
        await HelloWorldPage.toggleHeaderVisibility('strange text');
        await expect(HelloWorldPage.header).not.toBeExisting();
        await HelloWorldPage.toggleHeaderVisibility('strange text');
        await expect(HelloWorldPage.header).not.toBeExisting();
    })
});
