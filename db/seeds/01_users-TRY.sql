-- Users table seeds here (Example)
INSERT INTO users ( name, email, password, phone_number, created_at, updated_at) VALUES ('Berker Erol', 'berkererol@gmail.com','BootcampX','778-349-3299', now(), now());
INSERT INTO users ( name, email, password, phone_number, created_at, updated_at) VALUES ('Edgar Rojas', 'edgar.rojas@thebest.ca','qui','778-125-2216', now(), now());
INSERT INTO users ( name, email, password, phone_number, created_at, updated_at) VALUES ('Francis Bourgouin', 'petitpoulet@gmail.com','reprehenderit','604-094-6464', now(), now());
INSERT INTO users ( name, email, password, phone_number, created_at, updated_at) VALUES ('Chantale Streeting', 'brigix@yahoo.com','necessitatibus','860-831-0563', now(), now());
INSERT INTO users ( name, email, password, phone_number, created_at, updated_at) VALUES ('Erna Cassin', 'miguel.barrows@yahoo.com','reprehenderit','604-094-6464', now(), now());
INSERT INTO users ( name, email, password, phone_number, created_at, updated_at) VALUES ('Edison Brown', 'alysha.daniel@boyer.tv','dolor','070-187-6147', now(), now());
INSERT INTO users ( name, email, password, phone_number, created_at, updated_at) VALUES ('Lionel Morar', 'bradtke.mallie@yahoo.com','soluta','064-902-7188', now(), now());
INSERT INTO users ( name, email, password, phone_number, created_at, updated_at) VALUES ('Donnie Lueilwitz', 'kattie_dibbert@winnifred.name','sint','604-539-8552', now(), now());
INSERT INTO users ( name, email, password, phone_number, created_at, updated_at) VALUES ('Obie Howell', 'elisha_wisoky@gmail.com','nesciunt','434-299-9511', now(), now());
INSERT INTO users ( name, email, password, phone_number, created_at, updated_at) VALUES ('Hiram Veum', 'kristopher.shanahan@gmail.com','officia','778-534-4891', now(), now());


INSERT INTO food_categories (name ) VALUES ('Vegan');
INSERT INTO food_categories (name ) VALUES ('Vegetarian');
INSERT INTO food_categories (name ) VALUES ('Soup');
INSERT INTO food_categories (name ) VALUES ('Beverages');


INSERT INTO restaurants (user_id, name, description, country, state, city, street, postal_code, phone_number, photo_url, active) VALUES ( 1, 'La Panthère Verte','Eco-minded hub serving plant-based sandwiches and salads that use local ingredients whenever possible.','Canada','Quebec','Montreal','160 Rue Saint Viateur E','H2T1A8','352-268-5458','https://i.ibb.co/Btt8kD4/01-traditional-falafel.jpg', true);

INSERT INTO restaurants (user_id, name, description, country, state, city, street, postal_code, phone_number, photo_url, active) VALUES ( 2, 'Del Taco','Fast food Tex Mex restaurant','USA','California','Capton','11 River Drive','93333','254-123-5689','https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', false );
INSERT INTO restaurants (user_id, name, description, country, state, city, street, postal_code, phone_number, photo_url, active) VALUES ( 3, 'MaiThai','Asian fusion restaurant.','USA','New York','Bronx','3 Square road','23765','654-098-345','https://images.unsplash.com/photo-1556745750-68295fefafc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', false);
INSERT INTO restaurants (user_id, name, description, country, state, city, street, postal_code, phone_number, photo_url, active) VALUES ( 4, 'Wendys','Best burgers in town.','USA','Texas','Yuma','45 Rock Road','94653','215-554-0987','https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', true );


INSERT INTO placed_orders (user_id, restaurant_id, comment, price_before_tax, tax, final_price, created_at, food_ready, sms_sent) VALUES ( 1, 1, 'No onions on the salad',23,10,33, now(), true,true );
INSERT INTO placed_orders (user_id, restaurant_id, comment, price_before_tax, tax, final_price, created_at, food_ready, sms_sent) VALUES ( 2, 1, 'Lots of mayo!!',13,10,23, now(), true,true );
INSERT INTO placed_orders (user_id, restaurant_id, comment, price_before_tax, tax, final_price, created_at, food_ready, sms_sent) VALUES ( 3, 1, 'No bread at all',11,10,21, now(), true,true );
INSERT INTO placed_orders (user_id, restaurant_id, comment, price_before_tax, tax, final_price, created_at, food_ready, sms_sent) VALUES ( 4, 1, 'Just onions no meat',33,10,43, now(), true,true );


INSERT INTO menu_items (restaurant_id,food_category_id,name, description, ingredients,preparation_time,price,active,photo_url, created_at, updated_at) VALUES ( 1, 1, 'Traditional Falafel','crispy falafels','5 falafel balls, cabbage, carrots, pickles, sauerkraut, sprouts, tahini', 15, 13, true,  'https://i.ibb.co/Btt8kD4/01-traditional-falafel.jpg', now(), now());

INSERT INTO menu_items (restaurant_id,food_category_id,name, description, ingredients,preparation_time,price,active,photo_url, created_at, updated_at) VALUES ( 1, 1, 'Tempehtation','delicious tempeh wrap','Marinated tempeh, tomatoes, lettuce, sauerkraut, sprouts, hippie sauce', 15, 9, true,  'https://i.ibb.co/1Ggnf4N/02-tempehtation.jpg', now(), now());

INSERT INTO menu_items (restaurant_id,food_category_id,name, description, ingredients,preparation_time,price,active,photo_url, created_at, updated_at) VALUES ( 1, 1, 'Veggie Panther','amazing veggie wrap','Veggie-pâté, tomatoes, carrots, pickles, lettuce, sprouts, mayo', 20, 9, true,  'https://i.ibb.co/QNTThLP/03-veggie-panther.jpg', now(), now());

INSERT INTO menu_items (restaurant_id,food_category_id,name, description, ingredients,preparation_time,price,active,photo_url, created_at, updated_at) VALUES ( 1, 2, 'Pita Burger','tasty fit burger','Veggie Burger, lettuce, tomatoes, pickles, sumac onions, ketchup, mayo', 15, 10, true,  'https://i.ibb.co/jhZtXr1/04-pita-burger.jpg', now(), now());

INSERT INTO menu_items (restaurant_id,food_category_id,name, description, ingredients,preparation_time,price,active,photo_url, created_at, updated_at) VALUES ( 1, 1, 'Falafusion','falafel dream','5 falafel balls, lettuce, sumac onion, carrots, sprouts, yogi sauce.', 15, 12, true,  'https://i.ibb.co/DVtLn3t/05-falafusion.jpg', now(), now());

INSERT INTO menu_items (restaurant_id,food_category_id,name, description, ingredients,preparation_time,price,active,photo_url, created_at, updated_at) VALUES ( 1, 3, 'Soup Bowl','daily made soup','butternut squash soup with pita', 10, 9, true,  'https://i.ibb.co/qD69LfC/06-soup-bowl.jpg', now(), now());

INSERT INTO menu_items (restaurant_id,food_category_id,name, description, ingredients,preparation_time,price,active,photo_url, created_at, updated_at) VALUES ( 1, 2, 'Falafel Bowl','crispy falafels in a salad','Falafels, Green sauce', 15, 12, true,  'https://i.ibb.co/7QpCKN4/07-falafel-bowl.jpg', now(), now());

INSERT INTO menu_items (restaurant_id,food_category_id,name, description, ingredients,preparation_time,price,active,photo_url, created_at, updated_at) VALUES ( 1, 4, 'Vickymonade','signature vegan lemonade','freshly squeezed lime and lemons', 5, 7, true,  'https://i.ibb.co/sCkg5Lr/08-vickymonade.jpg', now(), now());

INSERT INTO menu_items (restaurant_id,food_category_id,name, description, ingredients,preparation_time,price,active,photo_url, created_at, updated_at) VALUES ( 1, 4, 'Hibiscus Tamarind','perfect refresher for summer days','hibiscus, tamarind', 5, 7, true,  'https://i.ibb.co/0J6gpyW/09-hibiscus.jpg', now(), now());

INSERT INTO menu_items (restaurant_id,food_category_id,name, description, ingredients,preparation_time,price,active,photo_url, created_at, updated_at) VALUES ( 1, 4, 'Smoothies','healthy and tasty','kale, apple, banana and chia seeds', 5, 7, true,  'https://i.ibb.co/dbv3LSJ/10-smoothies.jpg', now(), now());


-- INSERT INTO order_items (user_id, restaurant_id, menu_item_id, placed_order_id, quantity) VALUES (1, 1, 1, 1, 2);
-- INSERT INTO order_items (user_id, restaurant_id, menu_item_id, placed_order_id, quantity) VALUES (1, 1, 8, 1, 1);
-- INSERT INTO order_items (user_id, restaurant_id, menu_item_id, placed_order_id, quantity) VALUES (2, 1, 3, 1, 1);
-- INSERT INTO order_items (user_id, restaurant_id, menu_item_id, placed_order_id, quantity) VALUES (3, 1, 4, 1, 1);




GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO labber;
