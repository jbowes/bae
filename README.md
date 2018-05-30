```




___  ___   ____
  / _ )/ _ | / __/
 / _  / __ |/ _/
/____/_/ |_/___/
next.js edition
```

# Best App Ever

This is the best app ever - next.js edition.

## Getting started

make sure you have `node` and `yarn` installed. Install the dependencies:

```
yarn
```

## Running bae

```
yarn dev
```

## Running PRODUCTION GRADE bae

```
yarn build
yarn start
```

# Building a docker image for use with kubernetes

Assumes minikube

```
$(eval minikube docker-env)
docker build -t bae .
```

# Running bae in kubernetes

Assumes minikube

```
kubectl apply -f k8s
minikube service -n bae bae
```
