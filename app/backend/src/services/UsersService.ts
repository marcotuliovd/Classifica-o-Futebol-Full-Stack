import jwt from 'jsonwebtoken';
import UsersModel from '../database/models/UsersModel';

const bcrypt = require('bcryptjs');

const keySecret = 'paralamas do Sucesso';

async function login(email: string, password: string): Promise<string> {
  try {
    const existUser = await UsersModel.findOne({where: { email } })
    if(!existUser) {
      return 'EMAIL_INVALID';
    }
    const passwordCorrect = await bcrypt.compare(password, existUser.dataValeus.password);
    if(!password) {
      return 'PASSWORD_INVALID';
    }
    const token = jwt.sign(
      { payload: { email } }, keySecret, { algorithm: 'HS256', expiresIn: '1d' },
    );
    return token;
  } catch (error) {
    console.log(error);
    return 'error';
  }
}

export {
  login
};