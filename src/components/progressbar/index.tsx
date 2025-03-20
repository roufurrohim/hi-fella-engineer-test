import styles from '@/styles/progressbar.module.scss';

const ProgressBar = ({ percentage = 0, height = 20, backgroundColor = '#CECECE', fillColor = '#008FFF', radius = 20, animate = true }) => {
  return (
    <div className={styles['progress-bar-container']} style={{ height: `${height}px`, backgroundColor, borderRadius: `${radius}px` }}>
      <div 
        className={`${styles['progress-bar-fill']} ${animate ? styles['animate'] : ''}`} 
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