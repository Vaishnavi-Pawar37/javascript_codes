 
/*function count_vowel(str){
    let count = 0;
    for(const char of str)
    if(char == 'a'|| char =='e' || char == 'i'|| char == 'o'|| char =='u'){
        count++;
    }
    console.log(count);
}*/

const count_vowels = (str)=>{
    let count = 0;
    for(const char of str){
        if(char == 'a'|| char =='e' || char == 'i'|| char == 'o'|| char =='u'){
         count++;
        }
    }
return count;
}