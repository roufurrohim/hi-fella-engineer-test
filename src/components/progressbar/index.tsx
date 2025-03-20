// ProgressBar.jsx
import './ProgressBar.scss';

const ProgressBar = ({ percentage = 0, height = 20, backgroundColor = '#CECECE', fillColor = '#008FFF', radius = 20, animate = true }) => {
  return (
    <div className="progress-bar-container" style={{ height: `${height}px`, backgroundColor, borderRadius: `${radius}px` }}>
      <div 
        className={`progress-bar-fill ${animate ? 'animate' : ''}`} 
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