import { NextPage } from "next";
import Head from "next/head"
import {
  Text,
  Container,
  Heading,
  Link,
  UnorderedList,
  ListItem
} from "@chakra-ui/react"

const Links: NextPage = () => {

  return (
    <>
      <Head>
        <title>yashKarthik / interwebs</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Where to find Yash on the internet." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="robots" content="all" />

        <meta name="og:title" content="yashkarthik / interwebs" />
        <meta name="og:description" content="Where to find Yash on the internet." />
        <meta name="og:type" content="blog" />
        <meta name="og:image" content="https://yashkarthik.xyz/thelatenightbuilders.png" />
        <meta name="og:url" content="https://yashkarthik.xyz" />

        <meta name="twitter:site" content="@_yashKarthik" />
      </Head>

      <Container alignItems="start" mb="100px">
        <Heading m="50px 0 50px 20px" >
          Links
        </Heading>

        <Text py="3" fontSize="lg">
          Find me on the interwebs:
        </Text>

        <UnorderedList>
          <ListItem>
            Twitter:{" "}
            <Link href="https://twitter.com/_yashKarthik" isExternal>
              _yashKarthik
            </Link>
          </ListItem>

          <ListItem>
            Farcaster: yashKarthik
          </ListItem>

          <ListItem>
            GitHub:{' '}
            <Link href="https://github.com/yashkarthik" isExternal>
              Yash Karthik
            </Link>
          </ListItem>

          <ListItem>
            Discord: seaweed#3846
          </ListItem>

          <ListItem>
            YouTube:{' '}
            <Link href="https://www.youtube.com/channel/UCokxkaw1HSQKNJPDtJHhDkg" isExternal>
              Yash Karthik
            </Link>
          </ListItem>

          <ListItem>
            Buy me a Coffee:{' '}
            <Link href="https://buymeacoffee.com/yashkarthik" isExternal>
              Yash Karthik
            </Link>
          </ListItem>

          <ListItem>
            ENS: yashkarthik.eth
          </ListItem>

          <ListItem>
            Ethereum: 0x33cc45d8B0336bFA830FB512b54b02a049277403
          </ListItem>

          <ListItem onClick={() => {navigator.clipboard.writeText("yashkarthik1019@protonmail.com")}}>
            Email: click to copy.
          </ListItem>

          <ListItem>
            LinkedIn:{' '}
            <Link href="https://www.linkedin.com/in/yashkarthik" isExternal>
              Yash Karthik
            </Link>
          </ListItem>

        </UnorderedList>


      </Container>
    </>
  );
}
export default Links;
