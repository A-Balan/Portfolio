function fetchBlogData() {
    const baseUrl = 'https://intheweedsblog-production.up.railway.app';

    fetch(`${baseUrl}/api/BlogPosts/4`)
        .then((response) => response.json())
        .then(function (data) {
            displayBlogData(data, baseUrl);
        });
}