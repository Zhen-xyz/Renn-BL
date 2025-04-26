import { useMultiFileAuthState } = from 'baileys';

const getAuthState = async () => {
  const { state, saveCreds } = await useMultiFileAuthState('./сеансов 🎰');
  return { state, saveCreds };
};

export default getAuthState;