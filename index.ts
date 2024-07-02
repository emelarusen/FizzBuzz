function fizzbuzz(): void {

    let mesaj3: string = "Fizz";
    let mesaj5: string = "Buzz";
    let mesaj7: string = "Bang";
    let mesaj11: string = "Bong";
    let mesaj13: string = "Fezz";

    for (let i = 1; i<=300; i++){

        let mesaj: string = "";
        if(i%3===0) mesaj=mesaj+mesaj3;
        if(i%5===0) mesaj=mesaj+mesaj5;
        if(i%7===0) mesaj=mesaj+mesaj7;
        if(i%11===0) mesaj=mesaj11;
        if(i%13===0) {
            let inserat : boolean = false;
            let mesajnou : string ="";
            for(let j=0; j<mesaj.length; j++){
                if(!inserat && mesaj[j]==='B'){
                    mesajnou += mesaj13;
                    mesajnou += mesaj[j];
                    inserat = true;
                }
                else{
                    mesajnou += mesaj[j];
                }
            }
            mesaj = mesajnou;
        }
        if(i%17===0){
            let mesajnou : string ="";
            for(let j:number=0; j<mesaj.length; j+=4){
                mesajnou = mesaj[j]+mesaj[j+1]+mesaj[j+2]+mesaj[j+3]+mesajnou;
            }
            mesaj=mesajnou;
        }


        if(mesaj!="") console.log(mesaj);
        else console.log(i);

    }

}
fizzbuzz();