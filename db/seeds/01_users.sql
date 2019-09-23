-- Users table seeds here (Example)
INSERT INTO users ( name, email, password, phone_number, created_at, updated_at) VALUES ('Armand Hilll', 'lera_hahn@dickens.org','BootcampX','778-349-3299', now(), now());
INSERT INTO users ( name, email, password, phone_number, created_at, updated_at) VALUES ('Stephanie Wolff', 'darius.homenick@tod.ca','qui','778-125-2216', now(), now());
INSERT INTO users ( name, email, password, phone_number, created_at, updated_at) VALUES ('Elliot Dickinson', 'derrick_pollich@gmail.com','reprehenderit','604-094-6464', now(), now());
INSERT INTO users ( name, email, password, phone_number, created_at, updated_at) VALUES ('Lloyd Boehm', 'ebba.deckow@yahoo.com','necessitatibus','860-831-0563', now(), now());
INSERT INTO users ( name, email, password, phone_number, created_at, updated_at) VALUES ('Erna Cassin', 'miguel.barrows@yahoo.com','reprehenderit','604-094-6464', now(), now());
INSERT INTO users ( name, email, password, phone_number, created_at, updated_at) VALUES ('Edison Brown', 'alysha.daniel@boyer.tv','dolor','070-187-6147', now(), now());
INSERT INTO users ( name, email, password, phone_number, created_at, updated_at) VALUES ('Lionel Morar', 'bradtke.mallie@yahoo.com','soluta','064-902-7188', now(), now());
INSERT INTO users ( name, email, password, phone_number, created_at, updated_at) VALUES ('Donnie Lueilwitz', 'kattie_dibbert@winnifred.name','sint','604-539-8552', now(), now());
INSERT INTO users ( name, email, password, phone_number, created_at, updated_at) VALUES ('Obie Howell', 'elisha_wisoky@gmail.com','nesciunt','434-299-9511', now(), now());
INSERT INTO users ( name, email, password, phone_number, created_at, updated_at) VALUES ('Hiram Veum', 'kristopher.shanahan@gmail.com','officia','778-534-4891', now(), now());
 

INSERT INTO food_categories (name ) VALUES ('Dessert');
INSERT INTO food_categories (name ) VALUES ('Breakfast');
INSERT INTO food_categories (name ) VALUES ('Lunch');
INSERT INTO food_categories (name ) VALUES ('Dinner');


INSERT INTO restaurants (user_id, name, description, country, state, city, street, postal_code, phone_number, photo_url, active) VALUES ( 1, 'Grab','Restaurant with a divercity of food to order online.','USA','California','Beverly Hills','23 Rodeo Drive','90210','352-268-5458','https://images.unsplash.com/photo-1556745750-68295fefafc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', true);
INSERT INTO restaurants (user_id, name, description, country, state, city, street, postal_code, phone_number, photo_url, active) VALUES ( 2, 'Del Taco','Fast food Tex Mex restaurant','USA','California','Capton','11 River Drive','93333','254-123-5689','https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', false );
INSERT INTO restaurants (user_id, name, description, country, state, city, street, postal_code, phone_number, photo_url, active) VALUES ( 3, 'MaiThai','Asian fusion restaurant.','USA','New York','Bronx','3 Square road','23765','654-098-345','https://images.unsplash.com/photo-1556745750-68295fefafc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', false);
INSERT INTO restaurants (user_id, name, description, country, state, city, street, postal_code, phone_number, photo_url, active) VALUES ( 4, 'Wendys','Best burgers in town.','USA','Texas','Yuma','45 Rock Road','94653','215-554-0987','https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', true );


INSERT INTO placed_orders (user_id, restaurant_id, comments, price_before_tax, tax, final_price, created_at, food_ready, sms_sent) VALUES ( 1, 1, 'No onions on the salad',23,10,33, now(), true,true );
INSERT INTO placed_orders (user_id, restaurant_id, comments, price_before_tax, tax, final_price, created_at, food_ready, sms_sent) VALUES ( 2, 2, 'Lots of mayo!!',13,10,23, now(), true,true );
INSERT INTO placed_orders (user_id, restaurant_id, comments, price_before_tax, tax, final_price, created_at, food_ready, sms_sent) VALUES ( 3, 3, 'No bread at all',11,10,21, now(), true,true );
INSERT INTO placed_orders (user_id, restaurant_id, comments, price_before_tax, tax, final_price, created_at, food_ready, sms_sent) VALUES ( 4, 4, 'Just onions no meat',33,10,43, now(), true,true );

 
INSERT INTO menu_items (restaurant_id,food_category_id,name, description, ingredients,preparation_time,price,active,photo_url, created_at, updated_at) VALUES ( 1, 1, 'Veggie Burger','Vegeterian Burger','bread, lettuce, tomatoes, mayo', 5, 12, true,  'https://images.unsplash.com/photo-1546441471-c81f0586d0a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', now(), now());
INSERT INTO menu_items (restaurant_id,food_category_id,name, description, ingredients,preparation_time,price,active,photo_url, created_at, updated_at) VALUES ( 2, 2, 'Garden Salad','Pure greens for you.','lettuce, tomatoes, onions', 3, 9, true,  'https://images.unsplash.com/photo-1546441471-c81f0586d0a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', now(), now());
INSERT INTO menu_items (restaurant_id,food_category_id,name, description, ingredients,preparation_time,price,active,photo_url, created_at, updated_at) VALUES ( 3, 3, 'Pad-Thai','Thai food with nuts.','chicken, tomatoes', 5, 12, true,  'https://images.unsplash.com/photo-1546441471-c81f0586d0a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', now(), now());
INSERT INTO menu_items (restaurant_id,food_category_id,name, description, ingredients,preparation_time,price,active,photo_url, created_at, updated_at) VALUES ( 4, 4, 'Garden Salad','Pure greens for you.','lettuce, tomatoes, onions', 8, 10, true,  'https://images.unsplash.com/photo-1546441471-c81f0586d0a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', now(), now());


INSERT INTO carts (user_id, menu_item_id, quantity, comment ) VALUES (1, 1, 5, 'this is just a comment 001');
INSERT INTO carts (user_id, menu_item_id, quantity, comment ) VALUES (2, 2, 2, 'this is just a comment 003');
INSERT INTO carts (user_id, menu_item_id, quantity, comment ) VALUES (3, 3, 3, 'this is just a comment 004');
INSERT INTO carts (user_id, menu_item_id, quantity, comment ) VALUES (4, 4, 6, 'this is just a comment 008'); 