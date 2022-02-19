# BASE EXPRESS API

This api is a empty api for learning/teaching pourpose.

## Run Localy

### Node
1. install dependencies

```
npm i
```

2. run app
```
npm start
```

### Docker

1. build the image
```
docker build -t health-v0.0.1 .
```

2. run the container
```
docker run --name=health-container-v1 -e PORT=80 -e STAGE=hml health-v0.0.1
```

3. stop the container
```
docker stop health-container-v1
```

3. restart the container
```
docker start health-container-v1
```