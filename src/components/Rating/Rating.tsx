'use client'

import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import { useState, useEffect } from 'react';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
          <StarIcon
              key={i}
              className={cn(styles.star, {
                [styles.filled]: i < currentRating
              })}
          />
      )
    })
    setRatingArray(updatedArray)
  };

  return (
      <div {...props}>
        {ratingArray.map((r) => (r))}
      </div>
  )
}
