[ ! -d "environments" ] && mkdir environments
cd environments

[ ! -f ".env.mongo" ] && touch .env.mongo
[ ! -f ".env.node" ] && touch .env.node
[ ! -f ".env.api" ] && touch .env.api

cd ..