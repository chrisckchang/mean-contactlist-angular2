import { MeanContactlistAngular2Page } from './app.po';

describe('mean-contactlist-angular2 App', () => {
  let page: MeanContactlistAngular2Page;

  beforeEach(() => {
    page = new MeanContactlistAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
