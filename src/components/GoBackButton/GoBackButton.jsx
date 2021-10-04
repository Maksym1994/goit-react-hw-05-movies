import s from './GoBackButton.module.css';

const GoBackButton = ({ onClick }) => (
  <button type="button" className={s.button} onClick={onClick}>
    Go back
  </button>
);

export default GoBackButton;
