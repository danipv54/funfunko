export const getTitle= (title:string)=>{
    let titleshirked = '';

    if(title.length > 17){

        titleshirked =  title.slice(0,20 );
        return `${titleshirked}...`
    }

   return title  
}

