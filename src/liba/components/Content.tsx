import {
  Image,
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  Wrap,
  useColorModeValue,
  GridItem,
  Grid,
  AspectRatio,
  VStack,
  chakra
} from '@chakra-ui/react'
import {useContactModal} from '../services/contact'
import {Field} from '@atsnek/jaen'
import {GoogleMaps} from './GoogleMaps'
import WebampPlayer from './Webamp/WebampPlayer'
import Gallery from './Gallery'
import NewsSlider from './NewsSlider/NewsSlider'
import {
  Testimonial,
  TestimonialAvatar,
  TestimonialContent,
  TestimonialHeading,
  TestimonialText
} from './Testimonials'
import University_Vienna from '../../gatsby-plugin-jaen/components/University_Vienna'
import Ballons_Ballons, {
  HBalloon
} from '../../gatsby-plugin-jaen/components/Ballons_Ballons'
import Kanbon from '../../gatsby-plugin-jaen/components/Kanbon'
import {StylizedImage} from './StylizedImage'
import servicesSvg from '../../common/assets/services.svg'
import ContactButton from './ContactButton'
import {ImportantArrow} from '../../gatsby-plugin-jaen/components/ImportantArrow'
import {AGTIcon} from '../../gatsby-plugin-jaen/components/agtguntrade'
import {LibaIcon} from '../../gatsby-plugin-jaen/components/liba'
import {FHKITIcon} from '../../gatsby-plugin-jaen/components/fhkit'
import {MyP5Icon} from '../../gatsby-plugin-jaen/components/p5'
import {WGIcon} from '../../gatsby-plugin-jaen/components/wgstros'

import {FadeIn} from './FadeIn'
import ClientsMarquee from './ClientsMarquee'

interface Props {
  children: React.ReactNode
}

function ProjectsLinkGrid() {
  // Sample list of your links and icons, assuming you will replace these with your actual data
  const links = [
    {href: 'https://facebook.com', icon: HBalloon},
    {href: 'https://facebook.com', icon: AGTIcon},
    {href: 'https://facebook.com', icon: LibaIcon},
    {href: 'https://facebook.com', icon: FHKITIcon},
    {href: 'https://facebook.com', icon: MyP5Icon},
    {href: 'https://facebook.com', icon: WGIcon}
  ]

  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={10}
      pb={{base: '16', lg: '0'}}
      w={{base: 'full', lg: '50%'}}
      maxW={{base: '500px', lg: 'full'}}
      alignItems={'center'}>
      <GridItem
        mb={4}
        pos="relative"
        display="flex"
        colSpan={3}
        justifyContent={'center'}
        alignItems={'center'}>
        {/* <ImportantArrow pos="absolute" top="-150%" right="-10%" h="300%" /> */}
        <ContactButton
          pos="relative"
          _before={{
            zIndex: '-1',
            pointerEvents: 'none',
            top: '-150px',
            left: '-45px',
            pos: 'absolute',
            content: `""`,
            h: '500px',
            maxW: '325px',
            w: '100vw',
            bgImage: '/images/importantarrow.svg',
            bgSize: '100%,contain',
            bgRepeat: 'no-repeat'
          }}
          size={'lg'}
          mt={10}
          inverted
        />
      </GridItem>
      {links.map((link, index) => (
        <LinkBox
          key={index}
          w="auto"
          h="auto"
          color="white"
          transition="color 0.2s"
          _hover={{color: 'brand.500'}}>
          <LinkOverlay href={link.href} isExternal>
            <AspectRatio ratio={4 / 3}>
              {/* Assuming you have a way to dynamically select your icon component */}
              <link.icon w="full" h="full" />
            </AspectRatio>
          </LinkOverlay>
        </LinkBox>
      ))}
      {/* Den Wrapper um den Link mit GridItem oder einer ähnlichen Komponente und setze colSpan auf 3 */}
      <GridItem colSpan={3}>
        <Link
          href="/projects"
          variant="hover-theme"
          //textDecor={"underline"}
          opacity={0.7}
          w="100%"
          textAlign="end">
          <Field.Text
            name="FooterLinkAllProjects"
            defaultValue="Lassen Sie sich inspirieren"
            fontSize="xl"
            //fontWeight="500"
          />
        </Link>
      </GridItem>
    </Grid>
  )
}

function AssociatesLinkGrid() {
  // Sample list of your links and icons, assuming you will replace these with your actual data
  const associates = [
    {
      href: 'https://cronit.io/',
      name: 'cronit',
      logo: '/images/associates/cronit.svg'
    },
    {
      href: 'https://kanbon.at/',
      name: 'Kanbon',
      logo: '/images/clients/kanbon.svg'
    },
    {
      href: 'https://fhkit.at/',
      name: 'Florian Herbert Kleber IT',
      logo: '/images/associates/fhkit.svg'
    },
    {
      href: 'https://neurons.at/',
      name: 'Neurons',
      logo: '/images/associates/neurons.svg'
    },
    {
      href: 'https://github.com/XenoVerve',
      name: 'XenoVerve',
      logo: '/images/associates/xenoverve.png'
    },
    {
      href: 'https://firmen.wko.at/christian-aichner/k%C3%A4rnten/?firmaid=c904523d-dce4-4b26-90bf-aff015ce4f73',
      name: 'Werbeagentur Christian Aichner',
      logo: '/images/associates/aichner.svg'
    }
  ]

  return (
    <Grid
      templateColumns="repeat(6, 1fr)"
      gap={10}
      p="16"
      w="full"
      maxW="full"
      color="white"
      alignItems={'center'}>
      <GridItem
        mb={4}
        pos="relative"
        display="flex"
        colSpan={6}
        flexDir={'column'}
        justifyContent={'center'}
        alignItems={'center'}>
        {/* <ImportantArrow pos="absolute" top="-150%" right="-10%" h="300%" /> */}
        <LinkBox
          w="25%"
          h="auto"
          bg="white"
          p={2}
          borderRadius="2xl"
          overflow="hidden"
          transition="bg 0.2s"
          _hover={{bg: 'brand.500'}}>
          <LinkOverlay
            href={'https://www.wko.at/oe/aussenwirtschaft'}
            isExternal>
            <AspectRatio ratio={4 / 3}>
              {/* Assuming you have a way to dynamically select your icon component */}
              <Image
                src={'/images/austria-a-aussenwirtschaft-austria.png'}
                alt={'Austria'}
                w="full"
                h="full"
                objectFit="contain !important"
              />
            </AspectRatio>
          </LinkOverlay>
        </LinkBox>
        <Heading as="h2" size="xl" mt={4} textAlign="center" fontWeight="500">
          {/* Software in Österreich */}
          {/* Softwareentwicklung in Österreich */}
          {/* Österreichische Qualitätssoftware */}
          {/* Softwareentwicklung in Österreich */}
          Wir entwickeln für Sie in Österreich
          <chakra.span color="brand.500">.</chakra.span>
        </Heading>
      </GridItem>
      {associates.map((associate, index) => (
        <LinkBox
          key={index}
          w="auto"
          h="auto"
          bg="white"
          p={2}
          borderRadius="2xl"
          overflow="hidden"
          transition="bg 0.2s"
          _hover={{bg: 'brand.500'}}>
          <LinkOverlay href={associate.href} isExternal>
            <AspectRatio ratio={4 / 3}>
              {/* Assuming you have a way to dynamically select your icon component */}
              <Image
                src={associate.logo}
                alt={associate.name}
                w="full"
                h="full"
                objectFit="contain !important"
              />
            </AspectRatio>
          </LinkOverlay>
        </LinkBox>
      ))}
      {/* Den Wrapper um den Link mit GridItem oder einer ähnlichen Komponente und setze colSpan auf 3 */}
      <GridItem colSpan={6}>
        <Link
          href="/projects"
          variant="hover-theme"
          //textDecor={"underline"}
          opacity={0.7}
          w="100%"
          textAlign="center">
          {/* <Field.Text
            name="FooterLinkAllCustomers"
            defaultValue="Sie sind in guter Gesellschaft"
            fontSize="xl"
            //fontWeight="500"
          /> */}
          <Field.Text
            name="FooterLinkAllCustomers"
            // defaultValue="Werden Sie Teil unseres Netzwerks"
            // I need something that makes clear that these are not customers but partners
            // And that they are Austrian
            defaultValue="Experten aus unserem Netzwerk"
            fontSize="xl"
            //fontWeight="500"
          />
        </Link>
      </GridItem>
    </Grid>
  )
}

const testamonialsDefaults = [
  // {
  //   heading: 'Lorem ipsum dolor sit amet',
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
  //   avatar: {
  //     src: 'https://osg.snek.at/storage/BQACAgQAAxkDAAIsW2VFGtrO0UmpkYZV0BgslLcByh8qAAJRDwACCtMwUiMJbD4kmhDjLwQ',
  //     name: 'Christoph Clementschitsch',
  //     title: 'Christoph Clementschitsch IT',
  //     to: 'https://www.neurons.at/'
  //   }
  // },
  // {
  //   heading: 'Lorem ipsum dolor sit amet',
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
  //   avatar: {
  //     src: 'https://i1.rgstatic.net/ii/profile.image/11431281181196403-1691945466424_Q128/Felix-Zilk.jpg',
  //     name: 'Felix Zilk',
  //     title: '',
  //     to: 'https://www.researchgate.net/profile/Felix-Zilk'
  //   }
  // },
  {
    heading: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
    avatar: {
      src: 'https://osg.snek.at/storage/BQACAgQAAxkDAAIs9GWQkatLRzGIxNON1c3Cw3opvLR9AALsGAACpzGAUCTJZjhqLIryLwQ',
      name: 'Simon Prast',
      title: 'Kanbon',
      to: 'https://kanbon.at/'
    }
  },
  {
    heading: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
    avatar: {
      src: 'https://osg.snek.at/storage/BQACAgQAAxkDAAIsX2VG2JlO_XvDt3JcexGfxSLesn_oAAJZEAACLqAxUnY2C2EatToLLwQ',
      name: 'Florian Kleber',
      title: 'Florian Herbert Kleber IT',
      to: 'https://fhkit.at/'
    }
  }
]

function Services() {
  return (
    <Box mt={{base: '24', sm: '32', lg: '40'}}>
      <Box>
        {/* <Text fontSize="sm" fontWeight="medium">
          Services
        </Text> */}
        <Heading as="h2" size="xl" mt="4">
          Wir unterstützen<br/><chakra.span color="brand.500">Ihr Unternehmen</chakra.span><br/>im digitalen Zeitalter<chakra.span color="brand.500">.</chakra.span>
        </Heading>
        {/* <Text mt="4">
          Bei Netsnek bieten wir eine breite Palette von Dienstleistungen an,
          die auf die individuellen Bedürfnisse unserer Kunden zugeschnitten
          sind.
        </Text> */}
      </Box>
      <Container maxW="container.xl" mt="16">
        <Flex
          direction={{base: 'column', lg: 'row'}}
          align="center"
          justify="end">
          <Box flex="1" textAlign="center" pr={{lg: '12'}}>
            {/* Please replace `servicesSvg` with the source of your image or adjust as needed */}
            <StylizedImage
              sx={{
                filter:
                  'hue-rotate(180deg) saturate(1.3) brightness(1.1) contrast(0.9)'
              }}
              src={servicesSvg}
              boxSize={{base: '31rem', lg: '41rem'}}
              m="auto"
            />
          </Box>
          <Box
            mt={{base: '16', lg: '0'}}
            flex="1"
            minW={{lg: '33rem'}}
            pl={{lg: '4'}}>
            {/* For each ListItem you can create a custom component or structure here */}
            <Box mb="6">
              <Heading as="h4" size="md">
                UX-Konzeption
              </Heading>
              <Text mt="2">
                Durch den Einsatz moderner UX-Methoden gestalten wir
                benutzerfreundliche und intuitive Oberflächen.
              </Text>
            </Box>
            <Box mb="6">
              <Heading as="h4" size="md">
                Web development
              </Heading>
              <Text mt="2">
                Wir kreieren moderne Websites und Webanwendungen, die exakt auf
                Ihre individuellen Bedürfnisse zugeschnitten sind.
              </Text>
            </Box>
            <Box mb="6">
              <Heading as="h4" size="md">
                Backend development
              </Heading>
              <Text mt="2">
                Unsere maßgeschneiderten Backend-Lösungen werden speziell auf
                Ihre Anforderungen abgestimmt und basieren auf dem Framework{' '}
                <Link href="/jaen" textDecoration="underline">
                  Pylon
                </Link>
                .
              </Text>
            </Box>
            <Box mb="6">
              <Heading as="h4" size="md">
                Content management
              </Heading>
              <Text mt="2">
                Mit{' '}
                <Link href="/jaen" textDecoration="underline">
                  Jaen
                </Link>{' '}
                als Content-Management-System ermöglichen wir es Ihnen, Ihre
                Website eigenständig zu verwalten.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

const ContentSection = () => {
  const clients = [
    {
      href: 'https://www.agt-guntrade.at/',
      name: 'AGT Gun Trade',
      logo: '/images/clients/agt.svg'
    },
    {
      href: 'https://www.univie.ac.at/',
      name: 'Universität Wien',
      logo: '/images/clients/univie.svg'
    },
    {
      href: 'https://www.ballons-ballons.at/',
      name: 'Ballons & Ballons',
      logo: '/images/clients/ballons.svg'
    },
    // {
    //   href: 'https://kanbon.at/',
    //   name: 'Kanbon',
    //   logo: '/images/clients/kanbon.svg'
    // },
    {
      href: 'https://www.pharmaziegasse.at/',
      name: 'Pharmaziegasse',
      logo: '/images/clients/pharmaziegasse.svg'
    },
    {
      href: 'https://www.andenkenschenken.at/',
      name: 'Andenken Schenken',
      logo: '/images/clients/andenken-schenken.png'
    },
    {
      href: 'https://www.citypension.at/',
      name: 'City Pension',
      logo: '/images/clients/citypension.png'
    }
  ]

  const contactModal = useContactModal()
  const onContactClick = () => {
    contactModal.onOpen({
      meta: {}
    })
  }

  return (
    <Box>
      <ClientsMarquee clients={clients} w="full" />
      <Container
        maxW="6xl"
        borderRadius="2xl"
        //borderTop="1px solid"
        //borderColor={useColorModeValue('brand.500', 'brand.200')}
        mb={{base: '0', lg: '16'}}
        position="relative"
        //mt="-25px"
        overflow={{base: 'hidden', lg: 'visible'}}
        px={{base: 5, lg: 0}}
        //bgColor="#0A0A0A"
        zIndex={0}>
        <Field.Text
          mt={{base: '20 !important', md: '0'}}
          mb="8"
          as={Heading}
          fontSize={{base: '4xl', lg: '5xl'}}
          lineHeight={1}
          fontWeight="bold"
          textAlign="left"
          name="ContentSectionHeadingServices"
          defaultValue="Wir verwirklichen in Tagen,<br/>
          <span style='color:var(--chakra-colors-brand-500)'>nicht Monaten.</span>"
        />
        <Grid templateColumns={{base: '1fr', lg: '1fr 1fr'}} gap={10}>
        {/* <GridItem colSpan={2} >
            <Field.Text
              fontSize="1.2rem"
              color="gray.500"
              name="ContentSectionTextServices"
              defaultValue="Mit diesen Services unterstützen wir dein Unternehmen im digitalen Zeitalter."
            />
          </GridItem> */}
          {/* Card with image, tags and text for "Beratung" and "Entwicklung" */}
          <GridItem colSpan={1}>
            <Box
              bg="white"
              borderRadius="xl"
              p={6}
              h="full"
              w="full">
              <Image
                src="https://kanbon.at/wp-content/uploads/2024/02/beratung.jpg"
                alt="Beratung"
                h="200px"
                w="full"
                objectFit="cover"
                borderRadius="md"
              />
              <Text mt={4} fontSize="xl" fontWeight="bold">
                Beratung
              </Text>
              <Text mt={2} fontSize="md" color="gray.500">
                Wir beraten Sie in allen Fragen rund um die Digitalisierung.
              </Text>
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Box
              bg="white"
              borderRadius="2xl"
              p={6}
              h="full"
              w="full">
              <Image
                src="https://kanbon.at/wp-content/uploads/2021/12/Mockup_Arneitz-scaled.jpg"
                alt="Entwicklung"
                h="200px"
                w="full"
                objectFit="cover"
                borderRadius="md"
              />
              <Text mt={4} fontSize="xl" fontWeight="bold">
                Entwicklung
              </Text>
              <Text mt={2} fontSize="md" color="gray.500">
                Wir entwickeln individuelle Softwarelösungen für Ihr Unternehmen.
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Container>
      <Container
        maxW="6xl"
        borderRadius="2xl"
        borderTop="1px solid"
        borderColor={useColorModeValue('brand.500', 'brand.200')}
        mb={{base: '0', lg: '16'}}
        position="relative"
        //mt="-25px"
        overflow={{base: 'hidden', lg: 'visible'}}
        px={{base: 5, lg: 0}}
        bgColor="#0A0A0A"
        zIndex={0}>
        <AssociatesLinkGrid />
      </Container>
      <Container
        maxW="6xl"
        borderRadius="2xl"
        //borderLeft="1px solid"
        //borderRight="1px solid"
        //background='linear-gradient(rgba(248,253,255,.85), rgba(248,253,255,.85)), url("https://www.transparenttextures.com/patterns/dark-denim.png")'
        //backgroundColor={"alphaWhite.900"}
        //backgroundBlendMode="screen"
        pb={24}
        mb="128"
        // borderWidth="1px"
        // borderStyle="dashed"
        // borderColor={useColorModeValue('brand.500', 'brand.200')}
      >
        {/* <Container
          //minH={"calc(100vh - 60px)"}
          maxW="4xl"
          px={{base: 6, md: 3}}>
          <Field.Text
            mt={{base: '20 !important', md: '0'}}
            mb="8"
            as={Heading}
            fontSize={{base: '4xl', lg: '5xl'}}
            lineHeight={1}
            fontWeight="bold"
            textAlign="left"
            name="ContentSectionHeadingTeam"
            defaultValue="Rezepte zum Anhören"
          />
          <WebampPlayer />
        </Container> */}
        {/* <HStack h="100px" w="100%" spacing={12}>
          <University_Vienna />
          <Ballons_Ballons />
          <Kanbon />
        </HStack> */}
        <Container maxW={'4xl'} pt={0} as={Stack} spacing={12}>
          <Stack spacing={0}>
            <Field.Text
              fontSize="1.2rem"
              color="gray.500"
              name="ContentSectionTextServices"
              defaultValue="Mit diesen Services unterstützen wir dein Unternehmen im digitalen Zeitalter."
            />
          </Stack>
          {/* <Stack spacing={0}>
            <Field.Text
              mt={{base: '20 !important', md: '0'}}
              mb="8"
              as={Heading}
              fontSize={{base: '4xl', lg: '5xl'}}
              lineHeight={1}
              fontWeight="bold"
              textAlign="left"
              name="ContentSectionHeadingGallery"
              defaultValue="Beratung vor Ort"
            />
            <Field.Text
              fontSize="1.2rem"
              color="gray.500"
              name="ContentSectionTextGallery"
              defaultValue="Ich biete branchenübergreifende Kundenberatung und -betreuung mit Unterstützung von Experten aus meinem umfassenden Netzwerk an. In Zusammenarbeit mit meinen Partnern gewährleisten wir ein breites Angebot an Dienstleistungen. Mein Ziel ist es, gemeinsam mit Ihnen alle Ihre technologischen Herausforderungen zu meistern."
            />
          </Stack>
          <Gallery /> */}
          <Container maxW={'4xl'} pb={16} as={Stack} spacing={12}>
            <Stack spacing={0}>
              <Field.Text
                mt={{base: '20 !important', md: '0'}}
                mb="8"
                as={Heading}
                fontSize={{base: '4xl', lg: '5xl'}}
                lineHeight={1}
                fontWeight="bold"
                textAlign="left"
                name="ContentSectionHeadingNews"
                defaultValue="Mein Blog"
              />
              <Field.Text
                fontSize="1.2rem"
                color="gray.500"
                name="ContentSectionTextNews"
                defaultValue="Ich biete branchenübergreifende Kundenberatung und -betreuung mit Unterstützung von Experten aus meinem umfassenden Netzwerk an. In Zusammenarbeit mit meinen Partnern gewährleisten wir ein breites Angebot an Dienstleistungen. Mein Ziel ist es, gemeinsam mit Ihnen alle Ihre technologischen Herausforderungen zu meistern."
              />
            </Stack>
          </Container>
          <NewsSlider showNewsTitle={true} />
          {/* <Stack spacing={0}>
            <Field.Text
              mt={{base: '20 !important', md: '0'}}
              mb="8"
              as={Heading}
              fontSize={{base: '4xl', lg: '5xl'}}
              lineHeight={1}
              fontWeight="bold"
              textAlign="left"
              name="ContentSectionHeadingTeam"
              defaultValue="Nicht nur essbar"
            />
            <Field.Text
              fontSize="1.2rem"
              color="gray.500"
              name="ContentSectionTextTeam"
              defaultValue="Ich biete branchenübergreifende Kundenberatung und -betreuung mit Unterstützung von Experten aus meinem umfassenden Netzwerk an. In Zusammenarbeit mit meinen Partnern gewährleisten wir ein breites Angebot an Dienstleistungen. Mein Ziel ist es, gemeinsam mit Ihnen alle Ihre technologischen Herausforderungen zu meistern."
            />
          </Stack> */}
          {/* <Wrap justify="center" mt={10} spacing={10} shouldWrapChildren>
            {testamonialsDefaults.map((testimonial, index) => (
              <Testimonial>
                <TestimonialContent>
                  <TestimonialHeading>
                    <Field.Text
                      name={`TestimonialHeading${index}`}
                      defaultValue={testimonial.heading}
                      color="pq.sections.aboutUs.testimonial.heading.color"
                    />
                  </TestimonialHeading>
                  <TestimonialText>
                    <Field.Text
                      name={`TestimonialText${index}`}
                      defaultValue={testimonial.text}
                    />
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar
                  src={testimonial.avatar.src}
                  name={testimonial.avatar.name}
                  title={testimonial.avatar.title}
                  to={testimonial.avatar.to}
                />
              </Testimonial>
            ))}
          </Wrap> */}
        </Container>
        <Services />
      </Container>
      <Container
        maxW="5xl"
        borderRadius="2xl"
        borderTop="1px solid"
        borderColor={useColorModeValue('brand.500', 'brand.200')}
        mb={{base: '0', lg: '16'}}
        position="relative"
        //mt="-25px"
        overflow={{base: 'hidden', lg: 'visible'}}
        px={{base: 5, lg: 0}}
        bgColor="#0A0A0A"
        zIndex={0}>
        {/* <Box
          position="absolute"
          top="-122px"
          left="10%"
          zIndex={0}
          bgColor="pq.500"
          boxSize="290px"
          filter="blur(140px)"
        />
        <Box
          position="absolute"
          top="-122px"
          right="10%"
          zIndex={0}
          bgColor="#b57edc"
          boxSize="290px"
          filter="blur(140px)"
        /> */}
        {/* <Box
          position="relative"
          // top={{ base: '-1.5rem', lg: 0 }}
          left={{ base: '-1.6rem', lg: 0 }}
          w={{ base: 'calc(100% + 3.2rem)', lg: 'full' }}
          h="50px"
          bgColor="pq.shared.section.bgColor"
          borderBottomRadius="3xl"
          // zIndex={1}
        /> */}
        <Flex
          px={{base: '4', lg: '16'}}
          color={'white'}
          wrap={{base: 'wrap', lg: 'nowrap'}}
          alignItems={'center'}
          justifyContent={{base: 'center', lg: 'space-between'}}>
          <VStack
            alignItems={{base: 'center', lg: 'start'}}
            py={16}
            //textAlign={{base: 'center', lg: 'initial'}}
            w={{base: 'full', lg: '50%'}}>
            <Field.Text
              name="FooterTitleLine1"
              defaultValue="Erzählen Sie uns<br>
                von Ihrer Idee<span style='color:var(--chakra-colors-brand-500)'>.</span>"
              fontSize={{base: '3xl', lg: '4xl'}}
              fontWeight="500"
              w={{base: 'full', lg: 'fit-content'}}
              display={{base: 'block', lg: 'initial'}}
              //mr={{base: 0, md: 3}}
            />
            <Field.Text
              name="FooterTextNew"
              defaultValue='<b>E-Mail</b><br>
              <a href="mailto:office@netsnek.com">office@netsnek.com</a><br>
              <br>
              <b>Telefon</b><br>
              <a href="tel:+43 650 834 88 11">+43 650 834 88 11</a><br>
              <br>
              <span style="font-weight: 700;">Oder besuchen Sie uns?</span><br>
              Löwengasse 28 / Lokal 2A<br>
              1030, Wien<br>
              Österreich'
              mt={10}
              w="full"
              maxW={{base: 'full', lg: '50%'}}
              fontSize="1.1rem"
              // textAlign={{base: 'center', lg: 'initial'}}
            />
          </VStack>
          <ProjectsLinkGrid />
          {/* <Box
              w={{base: 'full', lg: 'fit-content'}}
              textAlign={{base: 'center', lg: 'initial'}}
              pl={"16"}
              >
              <Field.Text
                name="FooterTitleLine2"
                defaultValue="Oder lassen Sie sich vun unseren Kunden inspirieren<span style='color:var(--chakra-colors-brand-500)'>.</span>"
                fontSize="2xl"
                fontWeight="500"
                w={{base: 'full', lg: 'fit-content'}}
                display={{base: 'block', lg: 'initial'}}
                
                mr={{base: 0, md: 3}}
              />
            </Box> */}
        </Flex>
      </Container>
      <GoogleMaps
        objectFit="cover"
        h="full"
        w="100%"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d995.97587950944!2d16.392940417133016!3d48.20781426146578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDjCsDEyJzI3LjUiTiAxNsKwMjMnMzUuOCJF!5e0!3m2!1sen!2sat!4v1711776420986!5m2!1sen!2sat"
      />
    </Box>
  )
}

export default ContentSection
