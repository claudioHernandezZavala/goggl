import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const links = [
  { url: '/goggl/search', text: '🔎 All' },
  { url: '/goggl/images', text: '📷 Images' },
  { url: '/goggl/videos', text: '🎞️ Videos' },
  { url: '/goggl/news', text: '📰 News' },
];

const Links = () => {
  const location = useLocation();

  return (
    <div className="flex sm:jusitfy-around justify-between items-center mt-4">
      {links.map(({ url, text }) => (
        <NavLink
          to={url}
          className={`${
            location.pathname === url ? 'bg-gray-500 dark:bg-gray-500' : ''
          }text-blue-700 border-b-2 dark:text-black-300 pb-2 mr-10 p-2 pr-2`}
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
