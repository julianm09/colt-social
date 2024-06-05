import styles from './ChannelStatistic.module.scss';

interface ChannelStatisticProps {
  headline: string;
  statistic: any;
}

const ChannelStatistic: React.FC<ChannelStatisticProps> = ({
  headline,
  statistic,
}) => {
  return (
    <div className={styles['container']}>
      <p className={styles['headline']}>{headline}</p>
      <p className={styles['statistic']}>{statistic}</p>
    </div>
  );
};

export default ChannelStatistic;
