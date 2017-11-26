FROM debian:jessie-slim

RUN BUILD_PACKAGES="apt-transport-https curl" \
    && apt-get update \
    && apt-get install --no-install-recommends -y \
       ${BUILD_PACKAGES} \
       gnupg \
       ca-certificates \
    && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list  \
    && curl -sL https://deb.nodesource.com/setup_8.x | bash - \
    && apt-get -y install yarn \
    && apt-get -y remove --purge ${BUILD_PACKAGES} \
    && apt-get -y autoremove \
    && rm -rf /var/lib/apt/lists/*

ADD .  /srv/apps

WORKDIR /srv/apps

RUN yarn install

# TODO ajouter la commande pour lancer l'application
# RUN
