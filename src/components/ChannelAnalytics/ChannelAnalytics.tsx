'use client';

import styles from './ChannelAnalytics.module.scss';
import React, { useState } from 'react';
import { extractChannelId } from '@/utils/youtube';
import {
  getChannelAnalytics,
  getChannelIdByUsername,
  getChannelIdByCustomUrl,
} from '@/api/youtube';
import ChannelHeader from '../ChannelHeader/ChannelHeader';
import ChannelViews from '../ChannelViews/ChannelViews';

interface ChannelAnalyticsProps {}

const ChannelAnalytics: React.FC<ChannelAnalyticsProps> = ({}) => {
  const [url, setUrl] = useState('https://www.youtube.com/@todayfriendsbest');
  const [channelData, setChannelData] = useState<any>(null);

  const fetchAnalytics = async () => {
    let channelId = extractChannelId(url);
    let channelExtracted = '';
    if (!channelId) {
      alert('Invalid YouTube URL');
      return;
    }

    if (url.includes('/user/')) {
      channelExtracted = await getChannelIdByUsername(channelId);
    } else if (url.includes('/c/')) {
      channelExtracted = await getChannelIdByCustomUrl(channelId);
    } else if (url.includes('/@')) {
      // Handle YouTube handle case
      channelExtracted = await getChannelIdByCustomUrl(channelId);
    }

    const data = await getChannelAnalytics(channelExtracted);
    setChannelData(data);
  };

  console.log(channelData);

  return (
    <div className={styles['container']}>
      <p className={styles['label']}>Paste Channel URL </p>
      <div className={styles['input-container']}>
        <input
          type="text"
          placeholder="Paste YouTube Channel URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className={styles['input']}
        />
        <button className={styles['button']} onClick={fetchAnalytics}>
          Get Analytics
        </button>
      </div>
      {channelData && <ChannelHeader channelData={channelData} />}
      {channelData && <ChannelViews channelData={channelData} />}
    </div>
  );
};

export default ChannelAnalytics;
