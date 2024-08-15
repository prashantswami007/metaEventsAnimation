function isMobile() {
    return navigator.maxTouchPoints>0 && /Android|iPhone|Macintosh|Windows|iPad/i.test(navigator.userAgent);
}
console.log(isMobile());
if (!isMobile()) {
    var box1=document.querySelector("#box1")
    var boxes = document.querySelectorAll(".box");
    boxes.forEach((element,index) => {
        var text =document.querySelectorAll(".text")
        var piche =document.querySelectorAll(".piche")
        var knowMore = document.querySelectorAll(".textPart3")
        element.addEventListener("mouseover",()=> {
            setTimeout(() => {
                boxes.forEach((ele,index) =>{
                    box1.style.width="25%";
                    text[index].style.display = "none";
                    piche[index].style.display = "block";
                    gsap.to(knowMore[index], {
                        opacity:0,
                        duration: 1.8,
                            ease : "power4"
                    })
                    if(ele.style.width==="50%"){
                        ele.style.width="25%";
                        text[index].style.display = "none";
                        piche[index].style.display = "block";
                        gsap.to(knowMore[index], {
                            opacity:0,
                            duration: 1.8,
                            ease : "power4"
                        })
                        console.log(index);
                    }
                })
                element.style.width="50%";
                text[index].style.display = "block";
                piche[index].style.display = "none";
                gsap.to(knowMore[index], {
                    opacity:1,
                    duration: 1.8,
                    ease : "power4"
                })
            }, 200);
        })
    });
}
