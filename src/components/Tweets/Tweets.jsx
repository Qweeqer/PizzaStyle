import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserList } from '../UserList/UserList';
import css from './Tweets.module.css';

export const Tweets = () => {
  const [filter, setFilter] = useState('all'); // стан фільтрації
  const [users, setUsers] = useState([]); // стан користувачів
  const handleFilterChange = event => {
    setFilter(event.target.value); // оновлення стану фільтрації при виборі нової опції
  };
  const handleFollowToggle = (userId, isFollowing) => {
    // Створюємо новий масив користувачів на підставі поточного стану,
    // заміна данних користувача з заданим id
    const newUsers = users.map(user =>
      user.id === userId ? { ...user, isFollowing } : user
    );

    // Встановлюємо новий масив користувачів
    setUsers(newUsers);
  };

  return (
    <div className={css.container}>
      <div className={css.header}>
        <div className={css.mainContent}>
        <Link className={css.link} to="/GOITtestTask/">
          Back
        </Link>
          <h1 className={css.title}>Сторінка з твітами</h1>
          {/* Компонент Dropdown з опціями для фільтрації */}
          <div className={css.dropdown}>
            <label htmlFor="filter">Sort by:</label>
            <select
              className={css.filter}
              id="filter"
              value={filter}
              onChange={handleFilterChange}
            >
              <option value="all">Show all</option>
              <option value="follow">Show Follow</option>
              <option value="following">Show Following</option>
            </select>
          </div>
        </div>
      </div>

      {/* Компонент UserList з фільтрацією */}
      <div className={css.content}>
        <UserList
          filter={filter}
          users={users}
          onFollowToggle={handleFollowToggle}
        />
      </div>
    </div>
  );
};
