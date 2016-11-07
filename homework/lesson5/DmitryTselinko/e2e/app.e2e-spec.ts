import { DmitryTselinkoPage } from './app.po';

describe('dmitry-tselinko App', function() {
  let page: DmitryTselinkoPage;

  beforeEach(() => {
    page = new DmitryTselinkoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
