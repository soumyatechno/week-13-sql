import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://bwxilptl:MKx9OpS95ytMZjXbluGeEJ2cobqlOJIY@satao.db.elephantsql.com/bwxilptl");
    await client.connect();
    return client;
}