import { browser, element, by } from 'protractor';

/* tslint:disable */
export class MainPage {
  navigateTo(route: string) {
    return browser.get(route);
  }
}
