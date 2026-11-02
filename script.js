(function () {
  const postsListElement = document.querySelector(".posts");
  let posts = [];
  let comments = [];

  const mockAPIUrl = "http://localhost:3000";

  const fetchData = async () => {
    try {
      const postsJSON = await fetch(`${mockAPIUrl}/posts`);
      const postsData = await postsJSON.json();
      posts = postsData;

      const commentsJSON = await fetch(`${mockAPIUrl}/comments`);
      const commentsData = await commentsJSON.json();
      comments = commentsData;
    } catch (error) {
      console.error(error);
    }
  };

  const renderPosts = () => {
    posts.map((post) => {
      const postNode = document.createElement("li");
      postNode.innerHTML = `<p>${post.title}</p>`;
      postsListElement.appendChild(postNode);

      const commentsForCurrentPost = comments.filter(
        (comment) => comment.postId === Number(post.id),
      );

      if (commentsForCurrentPost.length) {
        postNode.innerHTML += `<ul class="comments"></ul>`;
        const commentsRef = postNode.querySelector(".comments");
        commentsForCurrentPost.map((comment) => {
          const commentNode = document.createElement("li");
          commentNode.textContent = comment.body;
          commentsRef.appendChild(commentNode);
        });
      }
    });
  };

  const fetchAndRender = async () => {
    await fetchData();
    renderPosts();
  };

  fetchAndRender();
})();
