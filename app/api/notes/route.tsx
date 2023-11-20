import { sql } from '@vercel/postgres'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest, res: any){

    const body : FormData = await req.formData()
    const note = body.get('note')?.toString()
    console.log(note);
    
    
    try {
     
        const notes = await 
            sql`
                  INSERT INTO notes (note) VALUES ('${note}');
              `

        return new Response(JSON.stringify({ error: false, message: 'okay insert', note: note }));

    } catch (error) {
      return new Response(JSON.stringify({ error: true, message: error }));
    }
    }