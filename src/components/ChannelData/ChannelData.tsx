import styles from './ChannelData.module.scss';
import React from 'react';

interface ChannelDataProps {
  channelData: any;
}

const ChannelData: React.FC<ChannelDataProps> = ({ channelData }) => {
  return (
    <>
      {channelData && (
        <div className={styles['container']}>
          <div className={styles['profile-container']}>
            <img
              className={styles['thumbnail']}
              src={channelData.items[0].snippet.thumbnails.default.url}
              alt="Channel Thumbnail"
            />
            <div className={styles['profile-container-info']}>
              <p className={styles['title']}>
                {channelData.items[0].snippet.title}
              </p>
              <p className={styles['username']}>
                {channelData.items[0].snippet.customUrl || 'N/A'}
              </p>
              <p className={styles['description']}>
                {channelData.items[0].snippet.description}
              </p>
            </div>
          </div>

          <div className={styles['stats-container']}>
            <div className={styles['stats-container-info']}>
              <p className={styles['label']}>Subscribers</p>
              <p className={styles['stat']}>
                {channelData.items[0].statistics.subscriberCount}
              </p>
            </div>
            <div className={styles['stats-container-info']}>
              <p className={styles['label']}>Views</p>
              <p className={styles['stat']}>
                {channelData.items[0].statistics.viewCount}
              </p>
            </div>
            <div className={styles['stats-container-info']}>
              <p className={styles['label']}>Videos</p>
              <p className={styles['stat']}>
                {channelData.items[0].statistics.videoCount}
              </p>
            </div>
            <div className={styles['stats-container-info']}>
              <p className={styles['label']}>Country</p>
              <p className={styles['stat']}>
                {channelData.items[0].snippet.country || 'N/A'}
              </p>
            </div>
            <div className={styles['stats-container-info']}>
              <p className={styles['label']}>Channel Type</p>
              <p className={styles['stat']}>
                {channelData.items[0].snippet.customUrl ? 'Custom' : 'Standard'}
              </p>
            </div>
            <div className={styles['stats-container-info']}>
              <p className={styles['label']}>User Created</p>
              <p className={styles['stat']}>
                {new Date(
                  channelData.items[0].snippet.publishedAt
                ).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChannelData;
