import Nav from '@/components/Nav/Nav';
import styles from './page.module.scss';
import ChannelAnalytics from '@/components/ChannelAnalytics/ChannelAnalytics';

export default function Home() {
  return (
    <main className={styles['main']}>
      <Nav />
      <ChannelAnalytics />
    </main>
  );
}
