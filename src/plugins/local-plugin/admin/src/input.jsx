import React from 'react';
import { IconButton } from '@strapi/design-system';
import { PuzzlePiece } from '@strapi/icons';

const Input = () => {
  return (
    <>
      <IconButton label="Plugin">
        <PuzzlePiece />
      </IconButton>
    </>
  );
};

export default Input;
