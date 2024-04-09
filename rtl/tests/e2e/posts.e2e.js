const PostsPage = require('../pages/posts.page');

describe('PostsPage Page', () => {
    it('should rendering correctly', async () => {
        await PostsPage.loadData('post-delete');
    });

    it('should delete post', async () => {
        await PostsPage.loadData('post-delete');
        await PostsPage.deletePost();
    });
});
