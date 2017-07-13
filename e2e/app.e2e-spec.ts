import { CameraStorePage } from './app.po';

describe('camera-store App', () => {
  let page: CameraStorePage;

  beforeEach(() => {
    page = new CameraStorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
