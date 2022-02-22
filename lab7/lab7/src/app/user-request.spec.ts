import { UserRequest } from './user-request';

describe('UserRequest', () => {
  const userData = new UserRequest();

  it('should create an instance', () => {
    expect(new UserRequest()).toBeTruthy();
  });

  it('name is accessible', () => {
    expect(userData.name).toEqual('');
    userData.name = 'Nikita';
    expect(userData.name).toEqual('Nikita');
  });

  it('login is accessible', () => {
    expect(userData.login).toEqual('');
    userData.login = 'Nikita';
    expect(userData.login).toEqual('Nikita');
  });

  it('pass is accessible', () => {
    expect(userData.sex).toEqual('');
    userData.sex = 'Nikita';
    expect(userData.sex).toEqual('Nikita');
  });

  it('age is accessible', () => {
    expect(userData.age).toEqual('');
    userData.age = '123';
    expect(userData.age).toEqual('123');
  });

  it('email is accessible', () => {
    expect(userData.email).toEqual('');
    userData.email = 'Nikita';
    expect(userData.email).toEqual('Nikita');
  });

  it('phone is accessible', () => {
    expect(userData.phone).toEqual('');
    userData.phone = 'Nikita';
    expect(userData.phone).toEqual('Nikita');
  });

  it('msgText is accessible', () => {
    expect(userData.msgText).toEqual('');
    userData.msgText = 'Nikita';
    expect(userData.msgText).toEqual('Nikita');
  });
});
