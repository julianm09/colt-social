import styles from './SectionHeadline.module.scss';

interface SectionHeadlineProps {
  text: string;
}

const SectionHeadline: React.FC<SectionHeadlineProps> = ({ text }) => {
  return <p className={styles['headline']}>{text}</p>;
};

export default SectionHeadline;
