import React from 'react';

export default ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return(

    <li
      className="list-group-item"
      key={video.etag}
      onClick={() => onVideoSelect(video)}
      >
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
};
