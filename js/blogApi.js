function fetchBlogData() {
    const baseUrl = 'https://intheweedsblog-production.up.railway.app';

    fetch(`${baseUrl}/api/BlogPosts/3`)
        .then((response) => response.json())
        .then(function (data) {
            displayBlogData(data, baseUrl);
        });
}

function displayBlogData(blogPosts, baseUrl) {

    let template = document.getElementById('blog-template');
    let blogSection = document.getElementById('blogs');
    blogPosts.forEach((blogPost) => {
        const blogPostCard = document.importNode(template.content, true);
        //format image
        let imageDiv = blogPostCard.querySelector('[data-blog="imageLink"]');
        imageDiv.setAttribute(
            "href",
            `${baseUrl}/content/${blogPost.slug}`
        );
        imageDiv.href = `${baseUrl}/content/${blogPost.slug}`;


        let imgTag = document.createElement('img');
        // with this:
if (blogPost.imageData && blogPost.imageType) {  
    imgTag.setAttribute(
      "src",
      `data:${blogPost.imageType};base64,${blogPost.imageData}`
    );
  } else {
    imgTag.setAttribute(
      'src',
      'https://intheweedsblog-production.up.railway.app/img/sample.png'
    );
  }
        imgTag.classList.add('blog-image');
        imageDiv.appendChild(imgTag);
        // <img src="data:image/gif;base64,xxxxxxxxxxxxx..." class="blog-image" alt="...">
        //add title
        let blogTitleDiv = blogPostCard.querySelector('[data-blog="title"]');
        blogTitleDiv.innerHTML = blogPost.title;

        // let blogDate = new Date(blogPost.dateCreated); // 2009-11-10
        // let month = blogDate.toLocaleString('default', { month: 'long' });
        // let day = blogDate.getDate();

        // //add day
        // let blogDayDiv = blogPostCard.querySelector('[data-blog="day"]');
        // blogDayDiv.innerHTML = day;

        // //add month
        // let blogMonthDiv = blogPostCard.querySelector('[data-blog="month"]');

        // blogMonthDiv.innerHTML = month;

        //add content
        let blogContentDiv = blogPostCard.querySelector('[data-blog="content"]');
        blogContentDiv.innerHTML = blogPost.content;

        //readmore link
        let blogLink = blogPostCard.querySelector('[data-blog="readMoreLink"]');
        blogLink.setAttribute(
            "href",
            `${baseUrl}/content/${blogPost.slug}`
        );

        // let blogPubDate = blogPostCard.querySelector('[data-blog="publishedDate"]');

        // let dateToday = new Date();
        // let createdDate = new Date(
        //     blogPost.updated != null ? blogPost.updated : blogPost.Created
        // );
        // let diffTime = Math.abs(dateToday.getTime() - createdDate.getTime());
        // let lastupdated = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        // // if (lastupdated == 1) {
        //     blogPubDate.innerHTML = `Published ${lastupdated} day ago`;
        // } else {
        //     blogPubDate.innerHTML = `Published ${lastupdated} days ago`;
        // }

        blogSection.appendChild(blogPostCard);
    });
}

fetchBlogData();