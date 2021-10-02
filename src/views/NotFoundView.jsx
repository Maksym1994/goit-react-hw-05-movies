import s from 'components/Navigation/Navigation.module.css';

const PageNotFoundViews = () => (
    <h1 className={s.error}>
      Error 404: Page Not Found{' '}
      <span role="img" aria-label="sheep">
        😮
      </span>
    </h1>
  );
  
  export default PageNotFoundViews;