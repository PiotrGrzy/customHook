import { SAVE_COMMENT, REMOVE_COMMENT, SORT_COMMENTS } from 'actions/types';

export const saveComment = (comment) => {
  return { type: SAVE_COMMENT, payload: comment };
};

export const removeComment = (comment) => {
  return { type: REMOVE_COMMENT, payload: comment };
};

export const sortComments = () => {
  return { type: SORT_COMMENTS };
};
