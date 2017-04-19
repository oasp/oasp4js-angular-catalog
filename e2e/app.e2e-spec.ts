import { OaspNgPage } from './app.po';

describe('oasp-ng App', () => {
  let page: OaspNgPage;

  beforeEach(() => {
    page = new OaspNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
