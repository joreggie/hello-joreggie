const sayHello = (name, lang)=>{

    let greeting = '';

    if(lang === 'es'){
        greeting += 'Hola'
    }else{
        greeting += 'Hello'
    }
    console.log('***************');
    console.log(`${greeting}!!`, name);
    console.log('***************');
}

sayHello('Joanna','en');
module.exports = { sayHello };