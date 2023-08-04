import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Image from 'src/components/image';
import { MotionViewport, varFade } from 'src/components/animate';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from '@mui/material/Container';

// Importamos el componente CarouselArrows
import CarouselArrows from 'src/components/carousel/carousel-arrows';

// Aquí definimos la lista de tallas que queremos mostrar
const sizes = ["S", "M", "L", "XL"];

export default function AboutTeam() {
  const products = getProductsData(); // Reemplaza esta función por la que obtiene los datos de tus productos
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const settings = {
    infinite: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // Definimos las funciones handleNext y handlePrev
  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  // Usamos useRef para obtener una referencia al componente Slider
  const sliderRef = React.useRef(null);

  return (
    <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 10, md: 15 } }}>
      <m.div variants={varFade().inDown}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Zilex Perú
        </Typography>
      </m.div>
    
      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ my: 3 }}>
          Lo mas vendido en Zilex
        </Typography>
      </m.div>
      <Box component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 10, md: 15 } }}>
        {/* Resto del código ... */}

        <Box sx={{ position: 'relative' }}>
          {/* Usamos el componente CarouselArrows aquí */}
          <CarouselArrows
            filled
            shape="rounded"
            onNext={handleNext}
            onPrev={handlePrev}
            leftButtonProps={{
              sx: {
                left: 24,
                ...(products.length < 5 && { display: 'none' }),
              },
            }}
            rightButtonProps={{
              sx: {
                right: 24,
                ...(products.length < 5 && { display: 'none' }),
              },
            }}
          >
            {/* Usamos useRef para obtener una referencia al componente Slider */}
            <Slider ref={sliderRef} {...settings}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  sizes={sizes}
                  theme={theme}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              ))}
            </Slider>
          </CarouselArrows>
        </Box>
      </Box>
    </Container>
  );
}

function ProductCard({ product, sizes, theme, onMouseEnter, onMouseLeave }) {
  const { name, price, imageUrl } = product;
  const [hoveredSize, setHoveredSize] = useState(null);

  const handleMouseEnterSize = (size) => {
    setHoveredSize(size);
  };

  const handleMouseLeaveSize = () => {
    setHoveredSize(null);
  };

  return (
    
    <Card key={name}>
      <Typography variant="subtitle1" sx={{ mt: 2.5, mb: 0.5 }}>
        {name}
      </Typography>

      <Typography variant="body2" sx={{ mb: 2.5, color: 'text.secondary' }}>
        {price}
      </Typography>

      <Box sx={{ px: 1 }}>
        <Image alt={name} src={imageUrl} ratio="1/1" sx={{ borderRadius: 2 }} />
      </Box>

      <Stack direction="row" alignItems="center" justifyContent="center" sx={{ p: 2 }}>
        {sizes.map((size) => (
          <IconButton
            key={size}
            sx={{
              color: hoveredSize === size ? theme.palette.primary.main : theme.palette.text.primary,
              fontSize: '1.5rem',
              borderRadius: '50%',
              '&:hover': {
                bgcolor: theme.palette.action.hover,
                color: theme.palette.getContrastText(theme.palette.action.hover),
              },
            }}
            onMouseEnter={() => handleMouseEnterSize(size)}
            onMouseLeave={() => handleMouseLeaveSize()}
          >
            {size}
          </IconButton>
        ))}
      </Stack>
    </Card>
    
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
  sizes: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
};

// Replace this function with the function to get your product data
function getProductsData() {
  return [
    {
      id: 1,
      name: 'Product 1',
      price: 'S/. 100',
      imageUrl: '/path/to/product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 'S/. 120',
      imageUrl: '/path/to/product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 'S/. 80',
      imageUrl: '/path/to/product3.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 'S/. 80',
      imageUrl: '/path/to/product3.jpg',
    },
    {
      id: 5,
      name: 'Product 5',
      price: 'S/. 80',
      imageUrl: '/path/to/product3.jpg',
    },
    {
      id: 6,
      name: 'Product 6',
      price: 'S/. 80',
      imageUrl: '/path/to/product3.jpg',
    },
    // Add more product data here
  ];
}
