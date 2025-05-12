const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "../images/avatar-vangogh.jpg",
        post: "../images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "../images/avatar-courbet.jpg",
        post: "../images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "../images/avatar-ducreux.jpg",
        post: "../images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.querySelector('main')

// Function to render posts
// This function loops through the posts array and creates HTML for each post
// It then sets the innerHTML of the main element to the generated HTML
function renderPosts() {
    let postsHTML = ""

    for(let i = 0; i < posts.length; i++) {
        const postObj = posts[i] // variable names are not the best, but it works so why fix it?
        let postTemp = `

            <div class="post-content">
                <div class="post-header">
                    <img src="${postObj.avatar}" class="post-maker-avatar" alt="Post maker's Avatar">
                    <div class="post-maker-info">
                        <h1 class="post-maker-name">${postObj.name}</h1>
                        <h2 class="post-maker-location">${postObj.location}</h2>
                    </div>
                </div>

                <div class="post-image-container">
                    <img src="${postObj.post}" class="post-image" alt="Post Image/Video">
                </div>
                
                <div class="post-body">
                    <div class="user-interaction-icons">
                        <img src="../images/icon-heart.png" class="interaction-icon" alt="Like Icon">
                        <img src="../images/icon-comment.png" class="interaction-icon" alt="Comment Icon">
                        <img src="../images/icon-dm.png" class="interaction-icon" alt="Share Icon">
                    </div>

                    <span class="likes-count"><span class="no-of-likes">${postObj.likes}</span> likes</span>

                    <div class="post-caption">
                        <span class="post-maker-uid">${postObj.username}</span>
                        <span class="caption-text">${postObj.comment}</span>
                    </div>
                </div>
            </div>

        `

        postsHTML += postTemp

    }

    mainEl.innerHTML = postsHTML

}

renderPosts()