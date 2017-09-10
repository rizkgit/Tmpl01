import { Tmpl01Page } from './app.po';

describe('tmpl01 App', () => {
  let page: Tmpl01Page;

  beforeEach(() => {
    page = new Tmpl01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
