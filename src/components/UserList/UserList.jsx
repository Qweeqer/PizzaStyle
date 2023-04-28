import { useState, useEffect } from 'react';
import css from './UserList.module.css';
import { UserItems } from '../UserItems/UserItems';

const apiUrl = process.env.REACT_APP_MOCKAPI_URL;

export const UserList = ({ filter }) => {
  const [users, setUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreUsers, setHasMoreUsers] = useState(true);
  const tweetsPerPage = 8;

  useEffect(() => {
    let isMounted = true; // Стан для перевірки, чи досі компонент встановлений

    const loadInitialUsers = async () => {
      try {
        const response = await fetch(
          `${apiUrl}?page=${currentPage}&limit=${tweetsPerPage}`
        );
        const loadedUsers = await response.json();
        if (isMounted) {
          // Перевірка, чи компонент все ще встановлений
          setUsers(prevUsers => [...prevUsers, ...loadedUsers]);
          setCurrentPage(prevPage => prevPage + 1);
        }
      } catch (error) {
        console.error('Помилка при отриманні даних:', error);
      }
    };

    loadInitialUsers();

    return () => {
      isMounted = false; // Очистка стану при демонтажі компонента
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const filteredUsers = users.filter(user => {
      switch (filter) {
        case 'follow':
          return !JSON.parse(localStorage.getItem(`${user.id}-isFollowing`));
        case 'following':
          return JSON.parse(localStorage.getItem(`${user.id}-isFollowing`));
        default:
          return true;
      }
    });
    setSortedUsers(filteredUsers);
  }, [filter, users]);

  const loadMore = async () => {
    try {
      const response = await fetch(
        `${apiUrl}?page=${currentPage}&limit=${tweetsPerPage}`
      );
      const loadedUsers = await response.json();
      setUsers(prevUsers => [...prevUsers, ...loadedUsers]);

      if (loadedUsers.length < tweetsPerPage) {
        setHasMoreUsers(false);
      } else {
        if (hasMoreUsers) {
          setCurrentPage(prevPage => prevPage + 1);
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onFollowToggle = (userId, isFollowing) => {
    const newUsers = users.map(user =>
      user.id === userId ? { ...user, isFollowing } : user
    );
    setUsers(newUsers);
  };
  const shouldRenderLoadMoreButton =
    (filter === 'follow' &&
      sortedUsers.filter(
        user => !JSON.parse(localStorage.getItem(`${user.id}-isFollowing`))
      ).length < 9) ||
    (filter === 'following' &&
      sortedUsers.filter(user =>
        JSON.parse(localStorage.getItem(`${user.id}-isFollowing`))
      ).length < 9);

  return (
    <div className={css.UserList}>
      <div className={css.cardsContainer}>
        {sortedUsers.map((user, index) => {
          return (
            <UserItems
              key={`${user.id}-${index}`}
              user={user}
              onFollowToggle={onFollowToggle} // передаемо onFollowToggle через пропс
            />
          );
        })}
      </div>
      {hasMoreUsers && !shouldRenderLoadMoreButton && (
        <button onClick={loadMore} className={css.loadMoreButton}>
          Load More
        </button>
      )}
    </div>
  );
};
