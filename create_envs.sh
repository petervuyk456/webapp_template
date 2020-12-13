[ ! -d "environments" ] && mkdir environments
cd environments

if [ ! -f ".env.mongo" ]; then
    touch .env.mongo
fi

if [ ! -f ".env.api" ]; then
    touch .env.api
fi

if [ ! -f ".env.node" ]; then
    touch .env.node
fi

cd ..