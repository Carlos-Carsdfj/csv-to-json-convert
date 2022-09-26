# CVS JSON CONVERT


a res api service with which you can convert csv files to json
With this link you can access the deployed project, keep in mind that it only has the post service to convert your csv files
[https://csv-to-json-convert-7stt.vercel.app/api/convert/csvjson](https://csv-to-json-convert-7stt.vercel.app/api/convert/csvjson)


[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=Carlos-Carsdfj_csv-to-json-convert&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=Carlos-Carsdfj_csv-to-json-convert)
[![CodeFactor](https://www.codefactor.io/repository/github/carlos-carsdfj/csv-to-json-convert/badge)](https://www.codefactor.io/repository/github/carlos-carsdfj/csv-to-json-convert)

## Install

```shell
  # clone this repository
    git clone https://github.com/Carlos-Carsdfj/

```

necessary to have installed **Nodejs** y **NPM** for the next steps

```shell
  # installed necesary dependency
  npm install
```

```shell
  # run the server
  npm run dev

```

visit the port [http://localhost:3001](http://localhost:3001) (client side)

## API REST

|         description         | method |          route           |    Content-Type     | name of file |
| :-------------------------: | :----: | :----------------------: | :-----------------: | :----------: |
| cvs to json convert service |  POST  | root/api/convert/cvsjson | multipart/form-data |     file     |

## TEST WITH INSOMNIA

### ALL OK

![alt](./assets/testInsomnia1.png)

### INVALIDED FILE NAME OR FORMAT

![alt](./assets/testinsomnia2.png)


##  TECHNOLOGIES

The most relevant library that was used was [convert-csv-to-json](https://www.npmjs.com/package/convert-csv-to-json), which is a library that allows converting csv files in various formats to json

##  CONTACT
  * email:carsdfj@gmail.com
  * [twitter/ferreira_jardin](https://twitter.com/ferreira_jardin)
  * [linkedin/carlos-jardin](https://www.linkedin.com/in/carlos-ferreira-jardin-799bb0145/)
