/*
 * @Author: Jinqi Li
 * @Date: 2020-09-13 20:53:51
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-02-06 15:20:41
 * @FilePath: /gatsby-portfolio/src/pages/index.js
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Jinqi Li'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Jinqi Li'} />
      </Helmet>
      <App />
    </>
  );
};
