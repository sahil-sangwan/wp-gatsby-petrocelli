import * as React from "react"
import {
  Linkedin,
  Facebook,
} from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Box,
  Space,
  NavLink,
  Text,
  IconLink,
  VisuallyHidden,
} from "./ui"
import BrandLogo from "./brand-logo"

const socialMedia = {
  LINKEDIN: {
    url: "https://linkedin.com",
    name: "LinkedIn",
    icon: <Linkedin />,
  },
  FACEBOOK: {
    url: "https://facebook.com",
    name: "Facebook",
    icon: <Facebook />,
  },
}

const getSocialURL = ({ service, username }) => {
  const domain = socialMedia[service]?.url
  if (!domain) return false
  return `${domain}/${username}`
}

const getSocialIcon = ({ service }) => {
  return socialMedia[service]?.icon
}

const getSocialName = ({ service }) => {
  return socialMedia[service]?.name
}

const data = {
  links: [
    {
      id: 0,
      href: "/services",
      text: "Services",
    },
    {
      id: 1,
      href: "/about",
      text: "About",
    },
    {
      id: 2,
      href: "/staff",
      text: "Staff",
    },
    {
      id: 3,
      href: "/contact",
      text: "Contact",
    },
  ],
  socialLinks: [
    {
      service: "LINKEDIN",
      username: "gatsbyjs",
    },
    {
      service: "FACEBOOK",
      username: "gatsbyjs",
    },
  ],
}

export default function Footer(props) {
  const { links, socialLinks } = data

  return (
    <Box as="footer" paddingY={4}>
      <Container>
        <Flex variant="start" responsive>
          <NavLink to="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <BrandLogo />
          </NavLink>
          <Space />
          <FlexList>
            {socialLinks &&
              socialLinks.map((link) => {
                const url = getSocialURL(link)
                return (
                  url && (
                    <li key={link.id}>
                      <IconLink to={url}>
                        <VisuallyHidden>{getSocialName(link)}</VisuallyHidden>
                        {getSocialIcon(link)}
                      </IconLink>
                    </li>
                  )
                )
              })}
          </FlexList>
        </Flex>
        <Space size={5} />
        <Flex variant="start" responsive>
          <FlexList variant="start" responsive>
            {links &&
              links.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.href}>{link.text}</NavLink>
                </li>
              ))}
          </FlexList>
          <Space />
          <FlexList>
            {meta &&
              meta.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.href}>
                    <Text variant="small">{link.text}</Text>
                  </NavLink>
                </li>
              ))}
          </FlexList>
        </Flex>
      </Container>
      <Space size={3} />
    </Box>
  )
}
