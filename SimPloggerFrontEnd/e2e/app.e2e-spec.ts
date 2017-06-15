import { SimPloggerFrontEndPage } from './app.po';

describe('sim-plogger-front-end App', () => {
  let page: SimPloggerFrontEndPage;

  beforeEach(() => {
    page = new SimPloggerFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
