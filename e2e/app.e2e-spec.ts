import { HollymollyPage } from './app.po';

describe('hollymolly App', () => {
  let page: HollymollyPage;

  beforeEach(() => {
    page = new HollymollyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
