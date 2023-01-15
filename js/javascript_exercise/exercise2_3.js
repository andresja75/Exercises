
export default function controlClock(initBtn, stopBtn) {

    const d = document;
    let timer = undefined;

    d.addEventListener("click", (event) => {
        
        if(event.target.matches(initBtn)){
            timer = setInterval(()=> {
                console.log("ha pasado 1 segundo");
            }, 1000);        
        }

        if(event.target.matches(stopBtn) && timer != false){

            clearInterval(timer);
        }
    });
}