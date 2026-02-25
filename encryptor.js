(async function() {
    const _p = "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";
    const _authorized = "*";
    const _encK = "fGFqZ24=";
    
    // Domain Lock
    const currentHost = typeof window !== 'undefined' ? window.location.hostname : "";
    if (_authorized !== "*" && _authorized !== "") {
        const allowed = _authorized.split(",").map(d => d.trim());
        if (!allowed.some(d => currentHost.includes(d))) {
            console.error("DOMAIN NOT AUTHORIZED");
            return;
        }
    }

    try {
        const _raw = atob(_encK).split('').map(c => String.fromCharCode(c.charCodeAt(0) ^ 0x0F)).join('');
        const HardenedDec = (function(){
            const IT = 100000;
            const S_SZ = 16;
            const I_SZ = 12;
            return {
                async run(base64, pw) {
                    const data = new Uint8Array(atob(base64).split("").map(c => c.charCodeAt(0)));
                    const salt = data.slice(0, S_SZ);
                    const iv = data.slice(S_SZ, S_SZ+I_SZ);
                    const encData = data.slice(S_SZ+I_SZ);
                    const enc = new TextEncoder();
                    const bKey = await crypto.subtle.importKey("raw", enc.encode(pw), "PBKDF2", false, ["deriveKey"]);
                    const key = await crypto.subtle.deriveKey({name:"PBKDF2",salt:salt,iterations:IT,hash:"SHA-512"},bKey,{name:"AES-GCM",length:256},false,["decrypt"]);
                    const dec = await crypto.subtle.decrypt({name:"AES-GCM",iv:iv},key,encData);
                    let s = Array.from(enc.encode(pw)).reduce((a, b) => a + b, 0);
                    const unshuffled = new Uint8Array(dec);
                    for(let i=0; i<unshuffled.length; i++) {
                        s = (s * 16807) % 2147483647;
                        unshuffled[i] = unshuffled[i] ^ (s & 0xFF);
                    }
                    return new TextDecoder().decode(unshuffled);
                }
            };
        })();

        const result = await HardenedDec.run(_p, _raw);
        eval(result);
    } catch(e) {
        console.error("ENVIRONMENT CHECK FAILED");
    }
})();
