
import s from './GoBackButton.module.css';

const GoBackButton = ({ onBack }) => (
  <button type="button" className={s.button} onClick={onBack}>
    Go back
  </button>
);

export default GoBackButton;