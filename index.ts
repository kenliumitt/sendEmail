import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = 're_Z3wAVHyM_4dAFKXGtJg3d6q9MymgGYttj';

const handler = async (_request: Request): Promise<Response> => {
    const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${RESEND_API_KEY}`
        },
        body: JSON.stringify({
            from: 'ken <kensindytomjerry@gmail.com>',
            to: ['tomliuairbnb@gmail.com'],
            subject: 'hello world',
            html: '<strong>it works!</strong>',
        })
    });

    if (res.ok) {
        const data = await res.json();

        return new Response(data, {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
};

serve(handler);
