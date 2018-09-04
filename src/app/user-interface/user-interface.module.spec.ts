import { UserInterfaceModule } from './user-interface.module';

describe('UserInterfaceModule', () => {
  let userInterfaceModule: UserInterfaceModule;

  beforeEach(() => {
    userInterfaceModule = new UserInterfaceModule();
  });

  it('should create an instance', () => {
    expect(userInterfaceModule).toBeTruthy();
  });
});
