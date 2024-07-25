import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function SportsEquipmentAuction() {
  const auctionItems = [
    {
      id: 1,
      image: '/placeholder.svg',
      title: 'Football Cleats',
      description: 'High-performance football cleats for the field',
      currentBid: 45.99,
      category: 'Footwear',
    },
    {
      id: 2,
      image: '/placeholder.svg',
      title: 'Basketball Hoop',
      description: 'Adjustable basketball hoop for indoor/outdoor use',
      currentBid: 299.99,
      category: 'Equipment',
    },
    {
      id: 3,
      image: '/placeholder.svg',
      title: 'Yoga Mat',
      description: 'Premium non-slip yoga mat for your practice',
      currentBid: 29.99,
      category: 'Accessories',
    },
    {
      id: 4,
      image: '/placeholder.svg',
      title: 'Resistance Bands',
      description: 'Set of 5 resistance bands for strength training',
      currentBid: 39.99,
      category: 'Accessories',
    },
    {
      id: 5,
      image: '/placeholder.svg',
      title: 'Running Shoes',
      description: 'Lightweight and breathable running shoes',
      currentBid: 59.99,
      category: 'Footwear',
    },
    {
      id: 6,
      image: '/placeholder.svg',
      title: 'Kettlebell',
      description: '20 lb kettlebell for full-body workouts',
      currentBid: 79.99,
      category: 'Equipment',
    },
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);

  const filteredItems = useMemo(() => {
    return auctionItems.filter(
      (item) =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(item.category)
    );
  }, [selectedCategories]);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <Flex direction="column">
      <Box w="full" py={{ base: 12, md: 24, lg: 32 }} bg="gray.100">
        <Box
          className="container"
          textAlign="center"
          mx="auto"
          px={{ base: 4, md: 6 }}
        >
          <VStack spacing={3}>
            <Heading as="h1" size="2xl" fontWeight="bold">
              Sports Equipment Auction
            </Heading>
            <Text
              maxW="700px"
              color="gray.600"
              fontSize={{ base: 'lg', md: 'xl' }}
            >
              Browse and bid on a wide selection of top-quality sports equipment
              and gear. Don't miss your chance to score the perfect item for
              your next game or workout.
            </Text>
          </VStack>
          <Image
            src="/placeholder.svg"
            width="1270px"
            height="300px"
            alt="Hero"
            mx="auto"
            objectFit="cover"
            mt={4}
            borderRadius="xl"
          />
        </Box>
      </Box>
      <Box
        className="container"
        mx="auto"
        py={12}
        px={{ base: 4, md: 6 }}
        display="grid"
        gridTemplateColumns={{ md: '240px 1fr' }}
        gap={8}
      >
        <Box>
          <Heading as="h2" size="lg" fontWeight="bold" mb={4}>
            Categories
          </Heading>
          <VStack spacing={2} align="start">
            <Checkbox
              isChecked={selectedCategories.includes('Footwear')}
              onChange={() => handleCategoryChange('Footwear')}
            >
              Footwear
            </Checkbox>
            <Checkbox
              isChecked={selectedCategories.includes('Equipment')}
              onChange={() => handleCategoryChange('Equipment')}
            >
              Equipment
            </Checkbox>
            <Checkbox
              isChecked={selectedCategories.includes('Accessories')}
              onChange={() => handleCategoryChange('Accessories')}
            >
              Accessories
            </Checkbox>
          </VStack>
        </Box>
        <Grid
          templateColumns={{
            base: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={6}
        >
          {filteredItems.map((item) => (
            <Box
              key={item.id}
              bg="white"
              shadow="md"
              borderRadius="md"
              overflow="hidden"
            >
              <Link to="#">
                <Image
                  src={item.image}
                  alt={item.title}
                  width="400px"
                  height="300px"
                  objectFit="cover"
                  _hover={{ opacity: 0.8 }}
                  transition="opacity 0.2s"
                />
              </Link>
              <Box p={4}>
                <Heading as="h3" size="md" fontWeight="semibold">
                  {item.title}
                </Heading>
                <Text color="gray.500" fontSize="sm">
                  {item.description}
                </Text>
                <Flex justify="space-between" align="center" mt={2}>
                  <Text fontWeight="semibold">
                    ${item.currentBid.toFixed(2)}
                  </Text>
                  <Button size="sm" colorScheme="blue">
                    Bid
                  </Button>
                </Flex>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
}
