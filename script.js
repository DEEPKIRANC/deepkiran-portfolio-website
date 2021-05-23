window.onload=(event)=>{
    const localObj=JSON.parse(window.localStorage.getItem("localObj"));
    if(localObj!==null)
    {
        var r=document.querySelector(':root');
        let elem=document.getElementById("themeChanger");
        const {background__color:bg__color,text__color}=localObj;
        r.style.setProperty('--lightModeColor',bg__color);
        r.style.setProperty('--lightModeTextColor',text__color);

        if(bg__color==="#192734")
        {
            
            elem.classList.remove('fa-moon');
            elem.classList.add('fa-sun');
        }
        

    }
};


document.getElementById("themeChanger").addEventListener("click",()=>{
    var r=document.querySelector(':root');
    var current__background__color=getComputedStyle(r).getPropertyValue('--lightModeColor');
    
    if(current__background__color=="#F3F4F6")
    {
        var r=document.querySelector(':root');
        let elem=document.getElementById("themeChanger");
        setTimeout(()=>{
            r.style.setProperty('--lightModeColor','#192734');
            r.style.setProperty('--lightModeTextColor','#F3F4F6');
            const localObj={
                background__color:'#192734',
                text__color:'#F3F4F6'
            }
            window.localStorage.setItem('localObj',JSON.stringify(localObj));
            elem.classList.remove('fa-moon');
            elem.classList.add('fa-sun');
        },100)
    }
    else
    {
        var r=document.querySelector(':root');
        let elem=document.getElementById("themeChanger");
        setTimeout(()=>{
            r.style.setProperty('--lightModeColor','#F3F4F6');
            r.style.setProperty('--lightModeTextColor','#192734');
            const localObj={
                background__color:'#F3F4F6',
                text__color:'#192734'
            }
            window.localStorage.setItem('localObj',JSON.stringify(localObj));
            elem.classList.remove('fa-sun');
            elem.classList.add('fa-moon');
        },100)
        
    }

})