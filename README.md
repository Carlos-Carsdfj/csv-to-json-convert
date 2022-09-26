# CVS JSON CONVERT

A shortlinks api rest
is a simple URL shortener app. It will convert your boring long URL into nice and simple link with very great
[cvs-to-json.vercel.app]()

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

![alt](./assets/testInsomnia2.png)
