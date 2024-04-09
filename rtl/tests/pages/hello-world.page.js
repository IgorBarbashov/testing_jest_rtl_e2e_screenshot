const { $ } = require('@wdio/globals')
const Page = require('./page');

class HelloWorldPage extends Page {

    get toggleBtn () {
        return $('#toggle');
    }

    get header () {
        return $('#hello');
    }

    get input () {
        return $('#search');
    }

    async toggleHeaderVisibility(text) {
        await this.input.setValue(text);
        await this.toggleBtn.click();
    }

    open () {
        return super.open('/hello-world');
    }
}

module.exports = new HelloWorldPage();
