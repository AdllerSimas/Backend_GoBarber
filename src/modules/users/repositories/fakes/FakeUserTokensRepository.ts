import User from '../../infra/typeorm/entities/User';

import IUsersTokensRepository from '@modules/users/repositories/IUserTokensRepository';

import { uuid } from 'uuidv4';

import UserToken from '../../infra/typeorm/entities/UserToken';


class FakeUserTokensRepository  implements IUsersTokensRepository {

  private userTokens: UserToken[] = [];


  public async generate(user_id: string): Promise<UserToken> {

    const userToken = new UserToken();

    Object.assign(userToken, {
      id: uuid(),
      token: uuid(),
      user_id: user_id,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.userTokens.push(userToken);

    return userToken;
  }

  public async findByToken(token: string): Promise<UserToken | undefined> {

    const userToken = this.userTokens.find(findToken => findToken.token === token);

    return userToken;

  }


}

export default FakeUserTokensRepository;
