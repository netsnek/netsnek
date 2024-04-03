import { PageConfig } from '@atsnek/jaen';
import { PageProps, graphql } from 'gatsby';
import * as React from 'react';
import { ProductContent } from '../liba/contents/ProductContent';

const ProductPage: React.FC<PageProps> = props => {
  return <ProductContent />;
};

export default ProductPage;

export { Head } from '@atsnek/jaen';

export const pageConfig: PageConfig = {
  label: 'ProductPage',
  childTemplates: ['ProductPage']
};

export const query = graphql`
  query ($jaenPageId: String!) {
    jaenPage(id: { eq: $jaenPageId }) {
      ...JaenPageData
    }
    allJaenPage(filter: { id: { eq: "JaenPage /product/" } }) {
      nodes {
        id
        childPages {
          ...JaenPageChildrenData
        }
      }
    }
  }
`;