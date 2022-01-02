import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  { name: 'Bruno', email: 'bruno@email.com' }
];

export default {
  async findAll(req: Request, res: Response) {
    return res.json(users);
  },
  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { name: 'Bruno Arcanjo', email: 'bruno@email.com' },
      message: { subject: 'Bem-vindo ao sistema', body: 'Seja bem-vindo'}
    });

    return res.send();
  }
}