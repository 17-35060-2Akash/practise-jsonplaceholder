const loadComments = () => {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
        .then(response => response.json())
        .then(data => displayComments(data))
}

const displayComments = (comments) => {
    comments = comments.slice(0, 20);
    const commentsContainer = document.getElementById('comments-container');
    comments.forEach(comment => {
        // console.log(comment);
        const commentSection = document.createElement('section');
        commentSection.innerHTML = `
        <div onclick="openPost(${comment.postId})" class="card container mb-5">
        <div class="card-header text-danger fw-semibold mx-0">
                    CommsHub
        </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
                <p class="mb-4">${comment.body}</p>
                <footer class="blockquote-footer"><span class="text-primary"> ${comment.name}</span><cite title="Source Title" class="text-success"> email: ${comment.email}</cite></footer>
            </blockquote>
        </div>
        </div>
        `;
        commentsContainer.appendChild(commentSection);
    });
}

const openPost = (postId) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPost(data))

}

const displayPost = postData => {
    console.log(postData);
    const showPostConatiner = document.getElementById('show-post-conatiner');
    showPostConatiner.textContent = ``;
    const postDiv = document.createElement('div');
    postDiv.innerHTML = `
    <div class="card text-center conatiner mx-5 mb-5">
        <div class="card-header text-danger fs-2">
            Post
        </div>
        <div class="card-body ">
            <h5 class="card-title">${postData.title}</h5>
            <p class="card-text">${postData.body}</p>
        </div>
        <div class="card-footer text-muted">
            2 days ago
        </div>
    </div>
    `;
    showPostConatiner.appendChild(postDiv);
}


loadComments();