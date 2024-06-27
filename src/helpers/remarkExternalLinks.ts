import { visit } from 'unist-util-visit';
import { site } from '../config/index.ts';

export const remarkExternalLinks = () => {
  return (tree: any) => {
    visit(tree, 'link', (node) => {
      if (/^(https?):\/\/[^\s/$.?#].[^\s]*$/i.test(node.url) && !node.url.includes(site.url)) {
        node.data                    ??= {};
        node.data.hProperties        ??= {};
        node.data.hProperties.rel      = 'external  nofollow  noopener  noreferrer';
        node.data.hProperties.target   = '_blank';
      }
    });
  };
};
