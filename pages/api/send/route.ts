import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '../../../components/email-template';

const API_KEY = 're_dHruUZe2_LJepZmfCBnFWMCp8RViBuZ4i'; // Reemplaza con tu API Key

const resend = new Resend(API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, phoneNumber, message } = req.body;

      // Generar un Message-ID único para cada correo
      const messageId = `${Date.now()}.${email}@tuventanal.com`;

      const data = await resend.emails.send({
        from: 'cotizacion <onboarding@resend.dev>',
        to: ['tuventanal.cl@gmail.com'],
        subject: 'Nuevo mensaje de contacto',
        react: EmailTemplate({ firstName: name, phoneNumber, email, message }),
        text: '',
        headers: {
          'Message-ID': `<${messageId}>`, // Agregar el Message-ID
        },
      });

      return NextResponse.json(data);
    } catch (error) {
      return NextResponse.json({ error });
    }
  }
}
