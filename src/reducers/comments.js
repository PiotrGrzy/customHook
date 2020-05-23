import { SAVE_COMMENT, REMOVE_COMMENT, SORT_COMMENTS } from 'actions/types';

export default function (
  state = ['comment 1', 'comment 2', 'comment 3'],
  action
) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case REMOVE_COMMENT:
      return state.filter((comment) => comment !== action.payload);
    case SORT_COMMENTS:
      const newComments = [...state].sort();
      return newComments;
    default:
      return state;
  }
}
