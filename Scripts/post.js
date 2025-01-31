document.addEventListener("DOMContentLoaded", function () {
  if (typeof initialPostData !== "undefined") {
    displayPost(initialPostData);
  } else {
    const postId = window.location.pathname.split("/")[2];
    fetchPost(postId);
  }
});

function displayPost(post) {
  const postContainer = document.getElementById("post-container");

  if (!post) {
    postContainer.innerHTML =
      '<div class="title">No post data available.</div>';
    return;
  }

  // Populate post details
  postContainer.innerHTML = `
    <div class="title">${post.postTitle}</div>
    <div class="author">Posted by ${post.postAuthor}</div>
    <div class="content">${post.postContent}</div>
  `;

  // Comments Section
  const commentSectionDiv = document.createElement("div");
  commentSectionDiv.className = "comment-section";
  post.comments.forEach((comment) => {
    const commentDiv = document.createElement("div");
    commentDiv.className = "comment";
    commentDiv.textContent = comment;
    commentSectionDiv.appendChild(commentDiv);
  });

  // Comment Form
  const commentForm = document.createElement("form");
  commentForm.className = "comment-form";
  commentForm.onsubmit = submitComment;
  const commentInput = document.createElement("textarea");
  commentInput.placeholder = "Add a comment...";
  commentInput.required = true;
  commentInput.name = "comment";
  const commentButton = document.createElement("button");
  commentButton.type = "submit";
  commentButton.textContent = "Comment";
  commentButton.className = "subscribe";
  commentForm.append(commentInput, commentButton);

  // Append elements to the post container
  postContainer.append(commentSectionDiv, commentForm);
}

function submitComment(event) {
  event.preventDefault();
  const form = event.target;
  const commentInput = form.elements["comment"];
  const comment = commentInput.value;
  const postId = initialPostData._id;

  fetch("/addComment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId, comment }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        console.log("Comment added:", data.message);
        // Append new comment to the comment section dynamically
        const newCommentDiv = document.createElement("div");
        newCommentDiv.className = "comment";
        newCommentDiv.textContent = comment;
        document.querySelector(".comment-section").appendChild(newCommentDiv);
        commentInput.value = ""; // Clear the input field
      } else {
        console.error("Failed to add comment:", data.message);
      }
    })
    .catch((error) => console.error("Error adding comment:", error));
}
document.addEventListener("DOMContentLoaded", function () {
  if (typeof initialPostData !== "undefined") {
    displayPost(initialPostData);
  } else {
    const postId = window.location.pathname.split("/")[2];
    fetchPost(postId);
  }
});

function displayPost(post) {
  const postContainer = document.getElementById("post-container");

  if (!post) {
    postContainer.innerHTML =
      '<div class="title">No post data available.</div>';
    return;
  }

  // Populate post details
  postContainer.innerHTML = `
    <div class="title">${post.postTitle}</div>
    <div class="author">Posted by ${post.postAuthor}</div>
    <div class="content">${post.postContent}</div>
  `;

  // Comments Section
  const commentSectionDiv = document.createElement("div");
  commentSectionDiv.className = "comment-section";
  post.comments.forEach((comment) => {
    const commentDiv = document.createElement("div");
    commentDiv.className = "comment";
    commentDiv.textContent = comment;
    commentSectionDiv.appendChild(commentDiv);
  });

  // Comment Form
  const commentForm = document.createElement("form");
  commentForm.className = "comment-form";
  commentForm.onsubmit = submitComment;
  const commentInput = document.createElement("textarea");
  commentInput.placeholder = "Add a comment...";
  commentInput.required = true;
  commentInput.name = "comment";
  const commentButton = document.createElement("button");
  commentButton.type = "submit";
  commentButton.textContent = "Comment";
  commentButton.className = "subscribe";
  commentForm.append(commentInput, commentButton);

  // Append elements to the post container
  postContainer.append(commentSectionDiv, commentForm);
}

function submitComment(event) {
  event.preventDefault();
  const form = event.target;
  const commentInput = form.elements["comment"];
  const comment = commentInput.value;
  const postId = initialPostData._id;

  fetch("/addComment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId, comment }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        console.log("Comment added:", data.message);
        // Append new comment to the comment section dynamically
        const newCommentDiv = document.createElement("div");
        newCommentDiv.className = "comment";
        newCommentDiv.textContent = comment;
        document.querySelector(".comment-section").appendChild(newCommentDiv);
        commentInput.value = ""; // Clear the input field
      } else {
        console.error("Failed to add comment:", data.message);
      }
    })
    .catch((error) => console.error("Error adding comment:", error));
}
