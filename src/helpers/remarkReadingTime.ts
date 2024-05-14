import { toString } from 'mdast-util-to-string';
import getReadingTime from 'reading-time';

export const remarkReadingTime = () => {
  return (tree, { data }) => {
    const textOnPage  = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    const minutes     = Math.ceil(readingTime.minutes);

    data.astro.frontmatter.minutesRead = `${minutes} minute${(minutes > 1 ? `s` : ``)}`;
  };
};
