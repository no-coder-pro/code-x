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
