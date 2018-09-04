import { PagesTemplatesModule } from './pages-templates.module';

describe('PagesTemplatesModule', () => {
  let pagesTemplatesModule: PagesTemplatesModule;

  beforeEach(() => {
    pagesTemplatesModule = new PagesTemplatesModule();
  });

  it('should create an instance', () => {
    expect(pagesTemplatesModule).toBeTruthy();
  });
});
