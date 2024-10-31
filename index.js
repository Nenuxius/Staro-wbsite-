// Array to store the submitted stories
const stories = [];

// Function to submit a story
function submitStory() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const content = document.getElementById('content').value;

    if (title && author && content) {
        // Add story to the array
        stories.push({ title, author, content });

        // Clear the form
        document.getElementById('storyForm').reset();

        // Display stories
        displayStories();
    } else {
        alert("Please fill out all fields.");
    }
}

// Function to display stories
function displayStories() {
    const storyList = document.getElementById('storyList');
    storyList.innerHTML = ''; // Clear existing stories

    stories.forEach(story => {
        const storyDiv = document.createElement('div');
        storyDiv.classList.add('story');

        const storyTitle = document.createElement('h3');
        storyTitle.textContent = story.title;

        const storyAuthor = document.createElement('p');
        storyAuthor.innerHTML = `<strong>By:</strong> ${story.author}`;

        const storyContent = document.createElement('p');
        storyContent.textContent = story.content;

        storyDiv.appendChild(storyTitle);
        storyDiv.appendChild(storyAuthor);
        storyDiv.appendChild(storyContent);
        storyList.appendChild(storyDiv);
    });
}
