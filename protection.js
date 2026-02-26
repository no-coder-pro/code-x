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
