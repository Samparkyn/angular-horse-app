import { HorseAppPage } from './app.po';

describe('horse-app App', () => {
  let page: HorseAppPage;

  beforeEach(() => {
    page = new HorseAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
