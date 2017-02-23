import { Angular2Learnings6Page } from './app.po';

describe('angular2-learnings-6 App', function() {
  let page: Angular2Learnings6Page;

  beforeEach(() => {
    page = new Angular2Learnings6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
