import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Semua field wajib diisi." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: ["ansengarie@gmail.com"],
    replyTo: email,
    subject: `[Portfolio] Pesan dari ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #e8e8f0; padding: 32px; border-radius: 12px; border: 1px solid #1a1a2e;">
        <h2 style="color: #00d4ff; margin: 0 0 24px;">Pesan baru dari portfolio</h2>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #888; width: 80px; vertical-align: top;">Nama</td>
            <td style="padding: 10px 0; color: #fff; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #888; vertical-align: top;">Email</td>
            <td style="padding: 10px 0; color: #00d4ff;">
              <a href="mailto:${email}" style="color: #00d4ff; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #888; vertical-align: top;">Pesan</td>
            <td style="padding: 10px 0; color: #ccc; line-height: 1.6; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>

        <hr style="border: none; border-top: 1px solid #1a1a2e; margin: 24px 0;" />
        <p style="color: #555; font-size: 12px; margin: 0;">
          Dikirim dari form kontak di portfolio aajins.vercel.app
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Gagal mengirim pesan. Coba lagi." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
