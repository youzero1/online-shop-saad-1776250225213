-- Create products table
create table if not exists products (
  id bigint primary key generated always as identity,
  name text not null,
  price numeric(10, 2) not null,
  original_price numeric(10, 2),
  description text not null,
  category text not null,
  image text not null,
  rating numeric(3, 1) not null,
  reviews integer not null,
  badge text
);

-- Seed 3 products
insert into products (name, price, original_price, description, category, image, rating, reviews, badge) values
  (
    'Wireless Noise-Cancelling Headphones',
    89.99,
    129.99,
    'Premium sound quality with active noise cancellation. Up to 30 hours battery life.',
    'Electronics',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    4.8,
    2341,
    'Sale'
  ),
  (
    'Smart Fitness Watch',
    149.99,
    199.99,
    'Track your health metrics, GPS, heart rate monitor and 7-day battery.',
    'Electronics',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    4.6,
    1872,
    'Sale'
  ),
  (
    'Leather Crossbody Bag',
    79.99,
    null,
    'Genuine leather with multiple compartments. Perfect for everyday use.',
    'Fashion',
    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop',
    4.7,
    943,
    null
  );
