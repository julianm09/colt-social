import { estimateRevenue } from '@/utils/helpers/estimateRevenue';
import ChannelStatistic from '../ChannelStatistic/ChannelStatistic';
import SectionHeadline from '../SectionHeadline/SectionHeadline';
import styles from './ChannelViews.module.scss';
import React from 'react';

interface ChannelViewsProps {
  channelData: any;
}

const ChannelViews: React.FC<ChannelViewsProps> = ({ channelData }) => {
  return (
    <>
      {channelData && (
        <div className={styles['container']}>
          <SectionHeadline text={'Views'} />

          <div className={styles['row']}>
            <div className={styles['column']}>
              <ChannelStatistic
                headline={'Total Views'}
                statistic={channelData.items[0].statistics.viewCount}
              />
              <ChannelStatistic
                headline={'Average Views'}
                statistic={Math.round(
                  channelData.items[0].statistics.viewCount /
                    channelData.items[0].statistics.videoCount
                )}
              />
            </div>
            <div className={styles['column']}>
              <ChannelStatistic
                headline={'Estimated Revenue'}
                statistic={Math.round(
                  estimateRevenue(channelData.items[0].statistics.viewCount)
                )}
              />
              <ChannelStatistic
                headline={'Total Views'}
                statistic={channelData.items[0].statistics.viewCount}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChannelViews;
