import { Request, Response } from 'express';
import UserService from '../services/UsersService';

const keySecret = 'paralamas do Sucesso';

export default async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const message: string = await UserService.login(email, password);
    if(message === 'EMAIL_INVALID' || message === 'PASSWORD_INVALID') {
      res.status(401).json({'Incorrect email or password'});
    }
    res.status(200).json({token: message});
  } catch (erro:unknown) {
    console.log(erro);
  }
}