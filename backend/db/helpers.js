//current schema for postgres database

/*CREATE TABLE users (
 user_id serial PRIMARY KEY, 
  first_name text NOT NULL,
  last_name text NOT NULL,
   email text NOT NULL
 );



    
 CREATE TABLE tvshows (
  id_user_show serial PRIMARY KEY,
  user_id text REFERENCES users (user_id),
  show_name text NOT NULL,
  series_watched integer NOT NULL,
  total_series integer NOT NULL,
  rating integer NOT NULL,
  last_watched date NOT NULL
  ); */
