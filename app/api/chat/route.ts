import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const groqRes = await 
    fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3-70b-8192',
        messages: [
          { role: 'system', 
            content: 'You are a helpful assistant.' },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
      }),
    });

    const data = await groqRes.json();

    if (!groqRes.ok) {
      console.error('Groq error:', data);
      return NextResponse.json({ reply: 'AI error occurred.' }, 
        { status: 500 });
    }

    return NextResponse.json({ 
      reply: data.choices[0].message.content });
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ 
      reply: 'Server error.' }, { status: 500 });
  }
}
