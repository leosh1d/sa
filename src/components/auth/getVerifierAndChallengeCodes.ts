'use server'
import crypto from 'crypto'

const CODE_VERIFIER_LENGTH = 48



declare global {
    // eslint-disable-next-line no-var
    var codeChallenge: string | undefined, codeVerifier: string | undefined;
}

// Инициализация глобальной переменной, если её нет
if (global.codeChallenge === undefined || global.codeVerifier === undefined) {
    global.codeVerifier = crypto
        .randomBytes(CODE_VERIFIER_LENGTH)
        .toString('hex');
    const sha256 = crypto.createHash('sha256');
    global.codeChallenge = sha256.update(global.codeVerifier).digest('base64url');
}

export const getVerifierAndChallengeCodes = async ()=> {
    return {codeVerifier: global.codeVerifier, codeChallenge: global.codeChallenge}
}