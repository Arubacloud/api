# nginx state for serving content
FROM nexusrepo.aruba.it:5009/library/nginx:alpine3.17
ENV BASE_URL=/docs/
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY dist .
COPY docker-entrypoint.sh ./docker-entrypoint.sh
RUN mv /usr/share/nginx/html/docker-entrypoint.sh /docker-entrypoint.d/1-docker-entrypoint.sh
RUN chmod 777 /docker-entrypoint.d/1-docker-entrypoint.sh

#RUN mv docker-entrypoint.sh build/docker-entrypoint.sh
# Containers run nginx with global directives and daemon off
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]




# ENTRYPOINT [ "executable" ]
# Copy what we've installed/built from production
# COPY --chown=node:node --from=base /home/node/app/dist /usr/share/nginx/html/
# COPY --from=base /home/node/app/dist /usr/share/nginx/html/docusaurus
