#!/bin/sh
# Move to working dir
cd /usr/share/nginx/html/

# Replace all path on openapi generate from microservice
# Da sistemare con variabili dinamiche
# sed -i 's/\/v2\//\/v2\/dms\//g' static/openapi/dms-openapi-v2.json
# sed -i 's/http:\/\/localhost:10081\/dms/https:\/\/acme.certifiedcloud-service-saas.dev.arubapec.it\/api\/be/g' openapi/dms-openapi-v2.json
# sed -i 's/http:\/\/localhost:10081\/dms/https:\/\/acme.certifiedcloud-service-saas.dev.arubapec.it\/api\/be/g' assets/files/dms-openapi-v2-*.json
#find . -name '*.js' -exec sed -i -e "s|BACKEND_URL|$URL|g" {} \;
# Install dependencies
# npm install

# Build static mdx pages for open api
# npm run clean-api-docs all
# npm run gen-api-docs all

# Build docusaurus
# npm run build

# move artifact to destination
# mv build/** /usr/share/nginx/html

#Remove unused source 
# cd ..
# rm -f docusaurus 

exit 0