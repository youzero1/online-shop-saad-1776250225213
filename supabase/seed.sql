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

insert into products (name, price, original_price, description, category, image, rating, reviews, badge) values
  ('Wireless Noise-Cancelling Headphones', 89.99, 129.99, 'Premium sound quality with active noise cancellation. Up to 30 hours battery life.', 'Electronics', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop', 4.8, 2341, 'Sale'),
  ('Smart Fitness Watch', 149.99, 199.99, 'Track your health metrics, GPS, heart rate monitor and 7-day battery.', 'Electronics', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop', 4.6, 1872, 'Sale'),
  ('Leather Crossbody Bag', 79.99, null, 'Genuine leather with multiple compartments. Perfect for everyday use.', 'Fashion', 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop', 4.7, 943, null),
  ('Classic Running Sneakers', 64.99, 89.99, 'Lightweight and breathable. Perfect for running and everyday wear.', 'Fashion', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', 4.5, 3210, 'Popular'),
  ('Stainless Steel Water Bottle', 24.99, null, 'Keeps drinks cold for 24 hours, hot for 12 hours. BPA-free.', 'Home & Kitchen', 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop', 4.9, 5621, 'Best Seller'),
  ('Portable Bluetooth Speaker', 49.99, 69.99, '360° sound, waterproof design, 20-hour playtime.', 'Electronics', 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop', 4.4, 1298, 'Sale'),
  ('Organic Skincare Set', 44.99, null, 'Natural ingredients, cruelty-free. Includes cleanser, toner and moisturizer.', 'Beauty', 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop', 4.6, 782, null),
  ('Ergonomic Office Chair', 299.99, 399.99, 'Lumbar support, adjustable height and armrests. Perfect for long work sessions.', 'Home & Kitchen', 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=400&fit=crop', 4.7, 634, 'Sale'),
  ('Ceramic Coffee Mug Set', 34.99, null, 'Set of 4 handcrafted ceramic mugs. Microwave and dishwasher safe.', 'Home & Kitchen', 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop', 4.8, 421, null),
  ('Yoga Mat Premium', 39.99, 54.99, 'Non-slip surface, 6mm thick, eco-friendly materials. Includes carry strap.', 'Sports', 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop', 4.6, 1103, 'Sale'),
  ('Sunglasses UV400', 29.99, null, 'Polarized lenses with UV400 protection. Lightweight frame.', 'Fashion', 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop', 4.3, 867, null),
  ('Resistance Band Set', 19.99, null, 'Set of 5 resistance bands. Ideal for home workouts and physical therapy.', 'Sports', 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop', 4.5, 2045, 'Popular');
