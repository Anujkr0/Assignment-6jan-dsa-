const removeduplicate = str =>{
    let lastchar = str[0];
    let finalit = str[0];
    for(const char of str.slice(1)){
        if(lastchar !== char) finalit += char;
        lastchar = char;
    }
    return finalit;
};
console.log(removeduplicate('aaaacccuuiiddpp'));