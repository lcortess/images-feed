# Images Feed

The project is created using angular as framework.

Images feed created using [Lorem Picsum](https://picsum.photos/) as image provider.

The logic for the infinite scroll is in the home component: `src/app/modules/home/home.component.ts:26`

The logic to lazyload the images is in the directive: `src/app/modules/home/directives/lazy-image.directive.ts`

## Running the project

First of all you must install the dependencies using `npm install` then run `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
