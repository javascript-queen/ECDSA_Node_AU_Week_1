const secp = require("ethereum-cryptography/secp256k1");
const hashMsg = require("./hashMsg");

async function recoverKey(message, signature, recoveryBit) {
    //  Be sure to hash the message when passing
    const hashedMessage = hashMsg(message)
    // return the recovered key with recoverPublicKey(hash, signature, recovery)
    /*
        msgHash: Uint8Array | string - message hash which would be signed
        signature: Uint8Array | string | { r: bigint, s: bigint } - object returned by the sign function
        recovery: number - recovery bit returned by sign with recovered option
     */
    return secp.recoverPublicKey(hashedMessage, signature, recoveryBit)
}

module.exports = recoverKey;