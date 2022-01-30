import { DUMMY_TYPE } from './types/legacy';

const shipWeight = (shift?: DUMMY_TYPE): number => {
  const element = document.querySelector('weight');

  if (!element) {
    return 0;
  }

  // very-very complex logic

  return parseInt(element.innerHTML) / shift;
};

export { shipWeight };
