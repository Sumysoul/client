# Client for [Menu Browsing And Management System](https://github.com/Sumysoul/server)

## Prerequisites

- [Nodejs](https://nodejs.org/en/download)

## Setup

- Create `.env` file with required environment variables:

```dotenv
NEXT_PUBLIC_BE_URL='<back-end base url for menu list>'
NEXT_PUBLIC_DRINKS_PATH='</drinks.json path>'
NEXT_PUBLIC_FOOD_PATH='</food.json path>'
NEXT_PUBLIC_GOOGLE_ANALYTICS='<Google Analytics id>'
```

- Install dependencies:

```shell
npm install
```

- Build project:

```shell
npm run buiild
```

- Run project:

```shell
npm run dev
```

- Go to `http://localhost:3000`

## Integration with [back-end](https://github.com/Sumysoul/server)

- [Refer to build static website section](https://github.com/Sumysoul/server/blob/master/README.md#run-scrips)
