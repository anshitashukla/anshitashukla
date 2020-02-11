import { AnshitashuklaPage } from './app.po';

describe('anshitashukla App', function() {
  let page: AnshitashuklaPage;

  beforeEach(() => {
    page = new AnshitashuklaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
