const {$} = require('@wdio/globals')
const Page = require('./page');

class PostsPage extends Page {

    get loadingTitle() {
        return $('#posts-loading');
    }

    get postsList() {
        return $('#posts-list');
    }

    get postsItems() {
        return browser.react$$('Post');
    }

    async loadData() {
        try {
            await this.open();
            await this.loadingTitle.waitForDisplayed({timeout: 2000});
            await this.postsList.waitForDisplayed({timeout: 2000});
        } catch (e) {
            throw new Error('Can\'t load posts');
        }
    }

    async deletePost() {
        try {
            const postsCount = await this.postsItems.length;

            if (!postsCount) {
                throw new Error('Posts not found.');
            }

            await this.postsItems[0].$('#post-delete').click();
            const postsCountAfterDelete = await this.postsItems.length;

            if (postsCount - postsCountAfterDelete !== 1) {
                throw new Error('Error occurred during deleting post.');
            }
        } catch (e) {
            throw new Error('Can\'t delete post' + e.error.message);
        }
    }

    open() {
        return super.open('/posts-test');
    }
}

module.exports = new PostsPage();
