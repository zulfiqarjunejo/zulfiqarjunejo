# Strapi application

A quick description of your strapi application

###### All the commands that I ran

heroku create zulfiqarjunejo-strapi-backend
heroku addons:create heroku-postgresql:hobby-dev
heroku config
heroku config:set NODE_ENV=production
heroku config:set MY_HEROKU_URL=$(heroku info -s | grep web_url | cut -d= -f2)
