import styles from '@/styles/progressbar.module.scss';

interface ProgressBarProps {
  percentage: number;
  height?: number;
  backgroundColor?: string;
  fillColor?: string;
  radius?: number;
  animate?: boolean;
}

/**
 * ProgressBar component
 * @param percentage - The percentage of the progress bar
 * @param height - The height of the progress bar
 * @param backgroundColor - The background color of the progress bar
 * @param fillColor - The fill color of the progress bar
 * @param radius - The radius of the progress bar
 * @param animate - Whether to animate the progress bar
*/
const ProgressBar = ({ percentage = 0, height = 20, backgroundColor = '#CECECE', fillColor = '#008FFF', radius = 20, animate = true }: ProgressBarProps) => {
  return (
    <div className={styles['progress-bar-container']} style={{ height: `${height}px`, backgroundColor, borderRadius: `${radius}px` }}>
      <div 
        className={`${styles['progress-bar-fill']} ${animate ? 'animate' : ''}`} 
        style={{ 
          width: `${percentage}%`, 
          backgroundColor: fillColor,
          borderRadius: `${radius}px`
        }}
      />
    </div>
  );
};

export default ProgressBar;