import makeWASocket = from './RennXiterrss/sock.js');
import { useMultiFileAuthState } = from '@whiskeysockets/baileys';
import logger = from './OPWN/logger.js';
import bindMessageHandler = from './Ren — это разработчик👨‍💻/msg.js';

console.clear();
console.log(
  chalk.blue(`
XYLAYS BAILEYS SUCCES CONNECTED THANKS FOR USE
XYLAYS BAILEYS SUCCES CONNECTED THANKS FOR USE
XYLAYS BAILEYS SUCCES CONNECTED THANKS FOR USE
XYLAYS BAILEYS SUCCES CONNECTED THANKS FOR USE
XYLAYS BAILEYS SUCCES CONNECTED THANKS FOR USE
XYLAYS BAILEYS SUCCES CONNECTED THANKS FOR USE
XYLAYS BAILEYS SUCCES CONNECTED THANKS FOR USE
XYLAYS BAILEYS SUCCES CONNECTED THANKS FOR USE
  `)
);
console.log(chalk.green('[ SYSTEM ]'), 'Starting Your bot...\n');

const startSock = async () => {
  const { state, saveCreds } = await useMultiFileAuthState('./сеансов 🎰');
  const sock = await makeWASocket({ state, saveCreds, logger });

  bindMessageHandler(sock);
  sock.ev.on('creds.update', saveCreds);
};

startSock();