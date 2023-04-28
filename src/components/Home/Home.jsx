import React from 'react';
import { Link } from 'react-router-dom';
import ParticlesLines from '../ParticlesLines/ParticlesLines';
import css from './Home.module.css';
import screenTweet from '../../images/screenTweet.png';
import goit_logo from '../../images/goit_logo.png';

export const Home = () => {
  return (
    <div className={css.wrapperHomePage}>
      <ParticlesLines />
      <div className={css.mainContainer}>
        <img src={goit_logo} alt="logo" className={css.logo} width="96" />
        <h1 className={css.homeTitle}>Домашня сторінка</h1>
        <Link className={css.link} to="/GOITtestTask/tweets">
          Tweets
        </Link>
        <h2 className={css.subTitle}>
          Мета: створити картки твітів та додати інтерактивності при клікові на
          кнопку.
        </h2>
        <img
          className={css.screenTweet}
          src={screenTweet}
          alt="Картинка з твітом"
        />
      </div>
    </div>
  );
};
