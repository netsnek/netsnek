import {
  Box,
  Button,
  Container,
  Grid,
  GridProps,
  Heading,
  Stack,
  Text,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'
import {Field, useContentManagement} from '@atsnek/jaen'
import {Link} from 'gatsby'
import {FC} from 'react'
import Slider from 'react-slick'
import {JaenPageIndexType} from '../../../shared/types/news'
import JaenImage from '../../../shared/components/JaenImage'
import {ProductCard} from '../ProductCard'

interface IPortfolioSliderProps extends GridProps {
  index: JaenPageIndexType
}

const PortfolioSlider: FC<IPortfolioSliderProps> = ({index, ...props}) => {
  const slidesToShow = 1

  var settings = {
    dots: true,
    infinite: index.childPages.length > slidesToShow,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false
  }

  const {isEditing} = useContentManagement()

  return (
    <Box {...props}>
      <Slider {...settings} className="news_slider">
        {index.childPages.map((page, i) => {
          return index.withJaenPage(
            page.id,
            <Box key={i} p="5">
              <ProductCard
                product={{
                  handle: page.slug || 'none',
                  title: page.jaenPageMetadata?.title,
                  description: page.jaenPageMetadata?.description,
                  price: '29.99',
                  compareAtPrice: '39.99',
                  discount: '',
                  tags: ['New', 'T-Shirt', 'Summer'],
                  taxable: false,
                  createdAt: page.jaenPageMetadata?.blogPost?.date, // Example date
                  featuredMedia: {
                    image: {
                      name: page.slug || 'none',
                      defaultValue: page.jaenPageMetadata?.image || '',
                      altText: page.jaenPageMetadata?.description || ''
                    }
                  },
                  media: []
                  //   {
                  //     image: {
                  //       altText: 'Cool T-Shirt - Front',
                  //       // gatsbyImageData: {
                  //       //   // ... your Gatsby image data
                  //       // }
                  //       name: 'fuck'
                  //     }
                  //   },
                  //   {
                  //     image: {
                  //       altText: 'Cool T-Shirt - Front',
                  //       // gatsbyImageData: {
                  //       //   // ... your Gatsby image data
                  //       // }
                  //       name: 'fuck'
                  //     }
                  //   },
                  //   {
                  //     image: {
                  //       altText: 'Cool T-Shirt - Front',
                  //       // gatsbyImageData: {
                  //       //   // ... your Gatsby image data
                  //       // }
                  //       name: 'fuck'
                  //     }
                  //   }
                  // ]
                }}
              />
            </Box>
          )
        })}
      </Slider>
    </Box>
  )
}
export default PortfolioSlider
