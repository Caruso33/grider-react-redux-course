import React from 'react';
import VideoListItem from './video_list_item';

export default (props) => {
  const videoItems = props.videos.map(video => (
    <VideoListItem
      key={video.etag}
      video={video}
      onVideoSelect={props.onVideoSelect}
    />
  ));
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};
