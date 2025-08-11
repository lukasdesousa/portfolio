'use server';

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail() {
    const html = `
<!doctype html>
<html lang="pt-BR">
  <body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, sans-serif;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#f4f6f8; padding:20px 0;">
      <tr>
        <td align="center">
          <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden;">
            
        <tr>
              <td style="background:linear-gradient(90deg,#0ea5a4,#3b82f6); padding:20px; color:#ffffff; font-size:20px; font-weight:bold; text-align:center;">
                Nova visita pelo Currículo 💼
              </td>
            </tr>

            <tr>
              <td style="padding:30px; color:#0f172a; font-size:16px; line-height:1.5;">
                <p style="margin:0 0 20px 0;">
                  Você acabou de receber uma nova visita pelo seu currículo.
                </p>
                <p style="margin:0 0 20px 0; font-size:14px; color:#475569;">
                  Parece quem algum recrutador te visitou 😉
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

    await resend.emails.send({
        from: "Portfolio Lukas <noreply@loveverse.space>",
        to: "s.lukas.dev@gmail.com",
        subject: "Visita especial recebida!",
        html: html,
    })
}