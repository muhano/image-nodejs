1. To update the image, in terminal use "docker build -t image-nodejs ."
2. after build the image it is very very important tag the image before push ot to dockerhub, use "docker tag image-nodejs gerimuhano/image-nodejs"
2. Push the image to dockerhub so kubernetes can pull it:
  a. tag the image first using "docker tag image-nodejs gerimuhano/image-nodejs"
  b. push the image to repository using "docker push gerimuhano/image-nodejs"
3. create .yaml file to deploy it in kubernetes/miniube, for example this is .yaml for create pod:
```
apiVersion: v1
kind: Pod
metadata:
  name: nodejs
spec:
  containers:
    - name: image-nodejs
      image: gerimuhano/image-nodejs
      ports:
        - containerPort: 3000
```
4. deploy it in kubernetes by running the command "kubectl create -f pod-nodejs.yaml"