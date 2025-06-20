'use client';

import React from 'react';
import { Avatar, Grid, Container, Typography, Box } from '@mui/material';
import Link from 'next/link';

const cats = [
  { title: 'Vitamins & Supplements',    img: '/logos/vitamins.png', href: '/categories/vitamins' },
  { title: 'Food & Beverages',           img: '/logos/food.png',     href: '/categories/food' },
  { title: 'Beauty & Personal Care',     img: '/logos/beauty.png',   href: '/categories/beauty' },
  { title: 'Active Lifestyle & Fitness', img: '/logos/fitness.png',  href: '/categories/active' },
  { title: 'Pet Supplies',               img: '/logos/pet.png',      href: '/categories/pet' },
  { title: 'Shop All',                   img: '/logos/shopall.png',  href: '/products' },
];

export default function Categories() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} justifyContent="center">
        {cats.map((c) => (
          <Grid item key={c.title} xs={6} sm={4} md={2} sx={{ textAlign: 'center' }}>
            <Link href={c.href} passHref style={{ textDecoration: 'none' }}>
              <Box
                component="a"
                sx={{
                  display: 'block',
                  '&:hover img': { transform: 'scale(1.05)' },
                }}
              >
                <Avatar
                  src={c.img}
                  alt={c.title}
                  sx={{
                    width: 120,
                    height: 120,
                    mx: 'auto',
                    mb: 1,
                    border: '4px solid',
                    borderColor: 'primary.main',
                  }}
                />
                <Typography variant="body2" color="text.primary">
                  {c.title}
                </Typography>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
