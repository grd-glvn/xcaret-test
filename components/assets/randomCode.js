export function randomCode(lenght) {
    const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXY0123456789";
    let res="";
    for(let i=0; i<lenght; i++) {
        res += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return res;
} 
