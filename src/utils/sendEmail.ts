const RESEND_API_KEY = import.meta.env.PUBLIC_RESEND_API_KEY;

interface emailSend {
  subject: string;
  body: string;
}

export const sendEmail = async (data: emailSend) => {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Acme <onboarding@resend.dev>",
      to: ["guillermoveraghanain@gmail.com"],
      subject: data.subject,
      html: data.body,
    }),
  });

  if (res.ok) {
    const data = await res.json();

    return {
      statusCode: 200,
      body: data,
    };
  }
};
