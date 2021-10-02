import s from './LoadMoreButton.module.css';

const LoadMoreButton = ({ onClick }) => (
  <div className={s.buttonClick}>
    <button type="button" className={s.button} onClick={onClick}>
      Load more
    </button>
  </div>
);

export default LoadMoreButton;