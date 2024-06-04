import styles from './ChannelData.module.scss';
import React from 'react';

interface ChannelDataProps {
  channelData: any;
}

const ChannelData: React.FC<ChannelDataProps> = ({ channelData }) => {
  return (
    <div className={styles['container']}>
      {channelData && (
        <div>
          <img
            src={channelData.items[0].snippet.thumbnails.default.url}
            alt="Channel Thumbnail"
          />
          <h2>{channelData.items[0].snippet.title}</h2>
          <p>Username: {channelData.items[0].snippet.customUrl || 'N/A'}</p>
          <p>Description: {channelData.items[0].snippet.description}</p>
          <p>Subscribers: {channelData.items[0].statistics.subscriberCount}</p>
          <p>Views: {channelData.items[0].statistics.viewCount}</p>
          <p>Videos: {channelData.items[0].statistics.videoCount}</p>
          <p>Country: {channelData.items[0].snippet.country || 'N/A'}</p>
          <p>
            Channel Type:{' '}
            {channelData.items[0].snippet.customUrl ? 'Custom' : 'Standard'}
          </p>
          <p>
            User Created Date:{' '}
            {new Date(
              channelData.items[0].snippet.publishedAt
            ).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default ChannelData;
