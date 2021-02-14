import { Request, Response } from 'express';
import EmailService from '../services/EmailService'

const users = [{ name: 'Max', email: 'max@teste.com' }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService()

    emailService.sendMail({
      to: { name: "Max", email: "max@teste.com" },
      message: { subject: "Bem vindo ao sistema", body: "Seja bem vindo!" }
    });
    return res.send();
  }
};
