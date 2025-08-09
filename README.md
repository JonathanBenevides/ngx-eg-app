## Create TGZ

1 - npm run build:lib
2 - cd dist/ngx-eg-app
3 - npm pack
4 - voltar para pasta do projeto
5 - npm install ./dist/ngx-eg-app/ngx-eg-app-X.X.X.tgz

# Paths to publish the lib

1 ngx-eg-app => g build ngx-eg-app --configuration production
2 ngx-eg-app => cd dist/eg-app
3 dist/eg-app => npm publish