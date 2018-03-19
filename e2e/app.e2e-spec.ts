import { AngularTourOfUseresPage } from './app.po';

describe('angular-tour-of-Useres App', () => {
  let page: AngularTourOfUseresPage;

  beforeEach(() => {
    page = new AngularTourOfUseresPage();
  });

  it('should display message saying Tour of Useres', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Tour of Useres');
  });
});
