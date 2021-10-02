   
import { createPortal } from 'react-dom';
import Template from 'react-loader-spinner';
import s from './Loader.module.css';

const loaderRoot = document.querySelector('#loader-root');

const Spinner = () => {
  return createPortal(
    <div className={s.loader}>
      <Template type="Audio" color="#02be6e" height={100} width={100} />
    </div>,
    loaderRoot,
  );
};

export default Spinner;