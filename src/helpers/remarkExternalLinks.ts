import { visit } from 'unist-util-visit'

const site = 'https://christopherrobinson.uk'

export const remarkExternalLinks = () => {
  return (tree) => {
    visit(tree, 'link', (node) => {
      if (/^(https?):\/\/[^\s/$.?#].[^\s]*$/i.test(node.url) && !node.url.includes(site)) {
        node.data                    ??= {}
        node.data.hProperties        ??= {}
        node.data.hProperties.rel      = 'external  nofollow  noopener  noreferrer'
        node.data.hProperties.target   = '_blank'
      }
    })
  }
}
