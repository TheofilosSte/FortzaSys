import React, { useState } from 'react';
import styles from './style.module.css';
import VideoPlayer from './VideoPlayer';




function SearchComponent() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        try {
            // Make HTTP request to fetch search results
            // ...
        } catch (error) {
            console.error('Error searching:', error);
        }
    };

    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
    };

    return (
        <div>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className={styles.placeholder}
                    placeholder="Enter search query"
                />
                <button type="submit">Search</button>
            </form>
            <div>
                {/* Render search results */}
                {searchResults.map((result) => (
                    <div key={result.id} onClick={() => handleVideoSelect(result)}>
                        <h3>{result.title}</h3>
                        <p>{result.description}</p>
                        {/* Render other video metadata */}
                    </div>
                ))}
            </div>
            {selectedVideo && (
                <div>
                    {/* Placeholder for video player */}
                    <h2>Selected Video</h2>
                    <h3>{selectedVideo.title}</h3>
                    <p>{selectedVideo.description}</p>
                    {/* Add video player component here */}
                    <VideoPlayer videoUrl={selectedVideo.url} />
                </div>
            )}
        </div>
    );
}

export default SearchComponent;
