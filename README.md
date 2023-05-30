# childhood_memories_front
memórias de infância


Step 01 - instale as dependência com o comando: npm run dev

Step 02- Antes de executar, acesse o  arquivo api.ts que está na pasta lib e configure a porta de seu device.

Esse é o arquivo:

import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.0.207:3333',
}) 


Step 3 Execute o comando no terminal: npm run dev


