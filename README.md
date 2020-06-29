# React final form submit issue

This is a repo that shows an issue with react final form under tests using jest and @testing-library/react. The issue is that if I provide a validation method, then the submit method appears to fail to be called.

This is illustrated by two different components:

- src/UserFormWithoutValidation
- src/UserFormWithValidation

They both have tests, the `src/UserFormWithoutValidation/UserFormWithoutValidation.test.tsx` passes by calling the submit method. Whereas `src/UserFormWithValidation/UserFormWithValidation.test.tsx` failed as it does not call the submit mock.

## Running the tests

To run the repo and the tests run the following from the root of the project:

```
npm install
npm run test
```