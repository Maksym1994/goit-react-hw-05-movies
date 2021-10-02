import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import s from './Searchbar.module.css'

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!query.trim()) {
      return toast.error('Enter the initial value in the field!', {autoClose: 2000,});
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <div className={s.wrapp}>
      <form onSubmit={handleSubmit} className={s.searchForm}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          name="query"
          value={query}
          onChange={handleChange}
        />

        <button type="submit" className={s.button}>
          <span className={s.buttonLabel}>Search</span>
        </button>
      </form>
      <Toaster position="top-right"/>
    </div>
  );
}

export default Searchbar;