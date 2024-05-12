import { Box, Button, Container, Flex, Grid, Heading, IconButton, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaGoogle, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Hero Section */}
      <Box bg="gray.100" p={10} textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to Trinity Pixels
        </Heading>
        <Text fontSize="xl" mb={6}>
          Explore the Art of Creativity
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
          <Image src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0fGVufDB8fHx8MTcxNTQ4MjcwM3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Digital Art" />
          <Image src="https://images.unsplash.com/photo-1592496431122-2349e0fbc666?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXJ8ZW58MHx8fHwxNzE1NDgyNzAzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Book Cover" />
          <Image src="https://images.unsplash.com/photo-1621379282411-62964e75a502?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYXRlc3QlMjBhcnR3b3JrfGVufDB8fHx8MTcxNTQ4MjcwM3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Latest Artwork" />
        </SimpleGrid>
      </Box>

      {/* Social Media Links */}
      <Flex justify="center" mt={5} gap={2}>
        <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
        <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
        <IconButton aria-label="YouTube" icon={<FaYoutube />} size="lg" />
        <IconButton aria-label="TikTok" icon={<FaTiktok />} size="lg" />
        <IconButton aria-label="Google Business" icon={<FaGoogle />} size="lg" />
      </Flex>

      {/* Art Gallery */}
      <Box p={10}>
        <Heading as="h2" size="xl" mb={4}>
          Art Gallery
        </Heading>
        <Grid templateColumns="repeat(auto-fill, minmax(240px, 1fr))" gap={6}>
          <Image src="https://images.unsplash.com/photo-1580136579312-94651dfd596d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcnR3b3JrJTIwMXxlbnwwfHx8fDE3MTU0ODI3MDR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Artwork 1" />
          <Image src="https://images.unsplash.com/photo-1579762689878-ce41dd75ad98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcnR3b3JrJTIwMnxlbnwwfHx8fDE3MTU0ODI3MDR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Artwork 2" />
          <Image src="https://images.unsplash.com/photo-1579762689743-215ceacaa296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcnR3b3JrJTIwM3xlbnwwfHx8fDE3MTU0ODI3MDV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Artwork 3" />
        </Grid>
      </Box>

      {/* Book Showcase */}
      <VStack spacing={4} p={10}>
        <Heading as="h2" size="xl">
          Book Showcase
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
          <Link href="https://amazon.com/book1" isExternal>
            <Image src="https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGJvb2slMjAxfGVufDB8fHx8MTcxNTQ4MjcwNXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Children Book 1" />
          </Link>
          <Link href="https://amazon.com/book2" isExternal>
            <Image src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGJvb2slMjAyfGVufDB8fHx8MTcxNTQ4MjcwNXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Children Book 2" />
          </Link>
          <Link href="https://amazon.com/book3" isExternal>
            <Image src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGJvb2slMjAzfGVufDB8fHx8MTcxNTQ4MjcwNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Children Book 3" />
          </Link>
        </SimpleGrid>
      </VStack>

      {/* About Section */}
      <Box p={10}>
        <Heading as="h2" size="xl" mb={4}>
          About Us
        </Heading>
        <Text fontSize="lg">Trinity Pixels has been a pioneer in digital creativity aimed at child development and education since its inception.</Text>
      </Box>

      {/* Contact Page */}
      <VStack spacing={4} p={10}>
        <Heading as="h2" size="xl">
          Contact Us
        </Heading>
        <Button colorScheme="blue">Send a Message</Button>
      </VStack>
    </Container>
  );
};

export default Index;
