const PostsPage = require('../pages/posts.page');

describe('PostsPage Page', () => {
    it('should rendering correctly', async () => {
        await PostsPage.loadData();
    });

    it('should delete post', async () => {
        await PostsPage.loadData();
        await PostsPage.deletePost();
    });
});
