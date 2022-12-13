function garland(onlyFill){




    // Достаем элементы с HTML
        let changeFill = document.getElementById('path1');
        //let //  = document.getElementById('fon1');
        let changeFill2 = document.getElementById('path2');
        //let // 2 = document.getElementById('fon2');
        let changeFill3 = document.getElementById('path3');
        //et // 3 = document.getElementById('fon3');
        let changeFill4 = document.getElementById('path4');
        //let // 4 = document.getElementById('fon4');
        let changeFill5 = document.getElementById('path5');
        //let // 5 = document.getElementById('fon5');
    
    
    // Достаем объект со стилями 
        let allStylesPath1 = window.getComputedStyle(changeFill);
    
    // Записываем в переменную значение стиля fill (пока что это объект)
        let onlyFillretro = allStylesPath1.fill;
    
    // приводим переменную к строке (она равна "rgb(255, 0, 0)")
        let makeString = JSON.stringify(onlyFillretro);
       // console.log(makeString);
    
       
        if (makeString === '"rgb(255, 0, 0)"'){ //красный на желтый 
            
            changeFill.style.fill  = "yellow";
            // .style.filter = "drop-shadow(1px 1px 10px yellow)";
            changeFill2.style.fill  = "purple";
            // 2.style.filter = "drop-shadow(1px 1px 10px purple)";
            changeFill3.style.fill  = "blue";
            // 3.style.filter = "drop-shadow(1px 1px 10px blue)";
            changeFill4.style.fill  = "rgb(0, 255, 0)";
            // 4.style.filter = "drop-shadow(1px 1px 10px rgb(0, 255, 0))";
            changeFill5.style.fill  = "red";
            // 5.style.filter = "drop-shadow(1px 1px 10px red)";

        }  
        if  (makeString ==='"rgb(255, 255, 0)"') // желтый на фиолетовый 
        {
            changeFill5.style.fill  = "yellow";
            // 5.style.filter = "drop-shadow(1px 1px 10px yellow)";
            changeFill.style.fill  = "purple";
            // .style.filter = "drop-shadow(1px 1px 10px purple)";
            changeFill2.style.fill  = "blue";
            // 2.style.filter = "drop-shadow(1px 1px 10px blue)";
            changeFill3.style.fill  = "rgb(0, 255, 0)";
            // 3.style.filter = "drop-shadow(1px 1px 10px rgb(0, 255, 0))";
            changeFill4.style.fill  = "red";
            // 4.style.filter = "drop-shadow(1px 1px 10px red)";
        } 
        if (makeString === '"rgb(128, 0, 128)"') // фиолетовый в синий 
        {
            changeFill4.style.fill  = "yellow";
            // 4.style.filter = "drop-shadow(1px 1px 10px yellow)";

            changeFill5.style.fill  = "purple";
            // 5.style.filter = "drop-shadow(1px 1px 10px purple)";

            changeFill.style.fill  = "blue";
            // .style.filter = "drop-shadow(1px 1px 10px blue)";

            changeFill2.style.fill  = "rgb(0, 255, 0)";
            // 2.style.filter = "drop-shadow(1px 1px 10px rgb(0, 255, 0))";

            changeFill3.style.fill  = "red";
            // 3.style.filter = "drop-shadow(1px 1px 10px red)";
        }
        if (makeString === '"rgb(0, 0, 255)"') // синий в зеленый 
        {
            changeFill3.style.fill  = "yellow";
            // 3.style.filter = "drop-shadow(1px 1px 10px yellow)";

            changeFill4.style.fill  = "purple";
            // 4.style.filter = "drop-shadow(1px 1px 10px purple)";

            changeFill5.style.fill  = "blue";
            // 5.style.filter = "drop-shadow(1px 1px 10px blue)";

            changeFill.style.fill  = "rgb(0, 255, 0)";
            // .style.filter = "drop-shadow(1px 1px 10px rgb(0, 255, 0))";

            changeFill2.style.fill  = "red";
            // 2.style.filter = "drop-shadow(1px 1px 10px red)";
        }
        if (makeString === '"rgb(0, 255, 0)"')
        {
            changeFill2.style.fill  = "yellow";
            // 2.style.filter = "drop-shadow(1px 1px 10px yellow)";

            changeFill3.style.fill  = "purple";
            // 3.style.filter = "drop-shadow(1px 1px 10px purple)";

            changeFill4.style.fill  = "blue";
            // 4.style.filter = "drop-shadow(1px 1px 10px blue)";

            changeFill5.style.fill  = "rgb(0, 255, 0)";
            // 5.style.filter = "drop-shadow(1px 1px 10px rgb(0, 255, 0))";

            changeFill.style.fill  = "red";
            // .style.filter = "drop-shadow(1px 1px 10px red)";
            }
    }
    setInterval(function(onlyFill) {
        garland(onlyFill)
    }, 1000);

