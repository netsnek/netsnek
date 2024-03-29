import React, {FC, ReactNode, useEffect, useMemo, useState} from 'react'
import {Box, Flex, useDisclosure} from '@chakra-ui/react'
import Footer from './components/Footer'
import BlogLayout from './BlogLayout'
import {useLocation} from '@reach/router'

import {MenuContext} from '../shared/contexts/menu'
import {useAuthenticationContext, useCMSManagementContext} from '@atsnek/jaen'
import {createPageTree} from '../shared/utils/navigation'
// import CommunityLayout from './CommunityLayout'
import {SearchContext} from '../shared/contexts/search'
import {TSearchResultSection, TSearchResults} from '../shared/types/search'
import {
  getDefaultSearchDocs,
  getDefaultSearchUsers,
  searchDocs,
  searchSocialPosts,
  searchUser
} from '../shared/utils/search'
import TbBook from '../shared/components/icons/tabler/TbBook'
import TbBooks from '../shared/components/icons/tabler/TbBooks'
import TbUser from '../shared/components/icons/tabler/TbUser'
import {useSearch} from '../search/use-search'
import Navigation from './components/Navigation/Navigation'
import { GridPattern } from './components/GridPattern'

interface AppLayoutProps {
  children?: React.ReactNode
  isBlog?: boolean
  isCommunity?: boolean
  path?: string
  footer?: FC
  customTopNavDisclosure?: ReturnType<typeof useDisclosure>
}

/**
 * The global layout component.
 * This should not be directly used in pages, but used in gatsby.
 */
const AppLayout: FC<AppLayoutProps> = ({
  children,
  isBlog,
  isCommunity,
  path,
  footer,
  customTopNavDisclosure
}) => {
  const cmsManager = useCMSManagementContext()
  const location = useLocation()
  const topNavDisclosure = useDisclosure() // for the top nav mobile drawer
  const {isAuthenticated} = useAuthenticationContext()
  const currentUserId = useAuthenticationContext().user?.id

  const search = useSearch()
  const [searchData, setSearchData] = useState<TSearchResults>({})

  useEffect(() => {
    if (!isAuthenticated) fetchDefaultSearchResults()
  }, [])

  // This generates the menu structure from the page tree that is used over the whole app by accessing the context.
  const menuStructure = useMemo(
    () => createPageTree(cmsManager, location.pathname),
    [cmsManager, path]
  )

  const FooterComp = footer ?? Footer

  let childrenElmnt: ReactNode = null

  if (isBlog) {
    childrenElmnt = (
      <BlogLayout path={path} isCommunity={isCommunity}>
        {children}
      </BlogLayout>
    )
  // } else if (isCommunity) {
  //   childrenElmnt = <CommunityLayout>{children}</CommunityLayout>
  } else {
    childrenElmnt = children
  }

  const fetchDefaultSearchResults = async () => {
    const userResults: TSearchResultSection[] = currentUserId
      ? await getDefaultSearchUsers(currentUserId)
      : [
          // {
          //   title: 'users',
          //   results: [
          //     {title: 'Create an account', href: '/signup', description: ''}
          //   ]
          // }
        ]
    const docsResults = await getDefaultSearchDocs(search.searchIndex, '/blog/')
    const socialPostResults = await searchSocialPosts()

    setSearchData({
      docs: {title: 'Documentation', sections: docsResults, icon: <TbBooks />},
      community: {
        title: 'Community Posts',
        sections: socialPostResults,
        icon: <TbBook />
      },
      user: {title: 'Users', sections: userResults, icon: <TbUser />}
    })
  }

  return (
    <SearchContext.Provider value={{data: searchData, setSearchData}}>
      <MenuContext.Provider value={{menuStructure}}>
        <Box
          as="main"
          minW="210px"
          h="max(100%, 100vh)"
          minH="100vh"
          pb={5}>
            <GridPattern
              position="absolute"
              insetX="0"
              top="-14" // In Chakra UI the values are in base 4 pixels, '-14' here might not directly translate. Adjust accordingly.
              zIndex={-10}
              h="1000px" // It's preferable to use responsive units or percentages depending on your design.
              w="full"
              bgColor="white"
              fill="rgba(149, 156, 177, 0.1)"
              // Stroke and mask-image are not directly supported through Chakra props. Consider inline styles or additional CSS.
              sx={{
                // This demonstrates how to apply more complex styles not directly available as Chakra props:
                stroke: "rgba(149, 156, 177, 0.1)", // example variable, adjust as necessary
                maskImage:
                  "linear-gradient(to bottom left, white 40%, transparent 50%)",
              }}
              yOffset={-96}
              interactive
            />
          {!isAuthenticated && <Navigation path="/" />}
          {childrenElmnt}
        </Box>
      </MenuContext.Provider>
      <FooterComp />
    </SearchContext.Provider>
  )
}

export default AppLayout
