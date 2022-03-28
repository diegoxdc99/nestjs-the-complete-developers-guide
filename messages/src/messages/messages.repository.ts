import { readFile } from 'fs/promises';
import { Messages } from './messages.interface';

export class MessagesRepository implements Messages {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages[id];
  }
  create(message: string) {
    console.log('not implemented', message);
  }

  findAll() {
    console.log('not implemented');
  }
}
