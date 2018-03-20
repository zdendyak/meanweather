import { AngweatherPage } from './app.po';

describe('angweather App', () => {
  let page: AngweatherPage;

  beforeEach(() => {
    page = new AngweatherPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
