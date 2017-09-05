import { CbSampleAngularUiPage } from './app.po';

describe('cb-sample-angular-ui App', () => {
  let page: CbSampleAngularUiPage;

  beforeEach(() => {
    page = new CbSampleAngularUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
