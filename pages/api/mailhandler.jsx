import mail from '@sendgrid/mail';

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function Mailer (req, res) {
    const body = JSON.parse(req.body)
    
    const message = `
        Name (Vor- & Nachname): ${body.first_name} ${body.last_name}\r\n
        Mail: ${body.email}\r\n
        Telefon: ${body.phone}\r\n
        Nachricht: ${body.textarea}\r\n
    `;

    const name = `${body.first_name} ${body.last_name}\r\n`;

    const data = {
        to: 'kraftquelle.felsenkeller@gmail.com',
        from: 'kraftquelle.felsenkeller@gmail.com',
        subject: 'Neue Kontaktformular Nachricht von ' + name,
        text: message,
        html: message.replace(/\r\n/g, '<br>')
    }
    await mail.send(awaitdata)
    res.status(200).json({status:'Ok'})
}