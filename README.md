# Steve Coleman-Williams
This is my submission for the technical test.

## Backend
To run the backend please see the executable `jar` file in the `/dist/backend` folder.

Due to my inexperience with Java and Spring Boot I wasn't sure what was accepted as the "correct" way to package the `Java` code.

The backend will start on port `8080`.

Please Note: As mentioned in the Skype interview, this is the first time I have done Java in about 6+ years, so the fact I got it working, for me is a win :D

## Frontend
Within the `/dist/frontend` folder you will also find the `JS`, `CSS` and `HTML` files needed to run the project.

Please note, that if you run the project this way, you will be responsible for making sure `CORs` aren't an issue.

**Alternatively**, from within `/frontend` you can start the server using the following command `npm run review`.

Running this way will proxy all backend requests to `http://localhost:8080` if you changed the default port of the backend you will need to change it on line#5 of `package.json`

## Tests
Unfortunately I haven't written any tests, this was due to the amount of time I spent teaching myself Spring Boot (see point about/refer to interview about never having used it again)

## ToDo
If I were to have an unlimited amount of time, I would like improve the solution to

1. Add tests(!)
2. Improve UX
3. Allow multiple robots so as to support multiple clients (currently singleton)
4. Improve UI
5. Learn what is normal way of packaging `Java` technical tests.