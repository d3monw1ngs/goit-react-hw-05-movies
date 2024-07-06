import React from 'react';
import css from './CastList.module.css';

const CastList = ({ cast }) => {
    const baseURL = 'https://image.tmdb.org/t/p/';
    const imageSize = 'w185';

    const getCastImageURL = (profilePath) => {
        if (!profilePath) {
            return 'https://via.placeholder.com/185';
        }

        const imageURL = `${baseURL}${imageSize}${profilePath}`;
        const img = new Image();
        img.src = imageURL;

        img.onerror = () => {
            img.src = 'https://via.placeholder.com/185';
        };

        return imageURL;
    };

  return (
    <div className={css.castList}>
        {cast.map(({ id, name, character, profile_path }) => (
            <div key={id} className={css.castMember}>
                <img
                    src={getCastImageURL(profile_path)}
                    alt={name}
                />
                <p>{name}</p>
                <p>{character}</p>
            </div>
        ))}
    </div>
  );
};

export default CastList;