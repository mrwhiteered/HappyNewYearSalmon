
function garland(onlyFill){




    // Достаем элементы с HTML
        let changeFill = document.getElementById('path1');
        let changeFilter = document.getElementById('fon1');
        let changeFill2 = document.getElementById('path2');
        let changeFilter2 = document.getElementById('fon2');
        let changeFill3 = document.getElementById('path3');
        let changeFilter3 = document.getElementById('fon3');
        let changeFill4 = document.getElementById('path4');
        let changeFilter4 = document.getElementById('fon4');
        let changeFill5 = document.getElementById('path5');
        let changeFilter5 = document.getElementById('fon5');
    
    
    // Достаем объект со стилями 
        let allStylesPath1 = window.getComputedStyle(changeFill);
    
    // Записываем в переменную значение стиля fill (пока что это объект)
        let onlyFillretro = allStylesPath1.fill;
    
    // приводим переменную к строке (она равна "rgb(255, 0, 0)")
        let makeString = JSON.stringify(onlyFillretro);
       // console.log(makeString);
    
       
        if (makeString === '"rgb(220, 20, 60)"'){ //красный на желтый 
            
            changeFill.style.fill  = "DarkOrange";
           changeFilter.style.filter = "drop-shadow(1px 1px 10px DarkOrange)";
            changeFill2.style.fill  = "Violet";
           changeFilter2.style.filter = "drop-shadow(1px 1px 10px Violet)";
            changeFill3.style.fill  = "RoyalBlue";
           changeFilter3.style.filter = "drop-shadow(1px 1px 10px RoyalBlue)";
            changeFill4.style.fill  = "MediumSpringGreen";
           changeFilter4.style.filter = "drop-shadow(1px 1px 10px MediumSpringGreen)";
            changeFill5.style.fill  = "Crimson";
           changeFilter5.style.filter = "drop-shadow(1px 1px 10px Crimson)";

        }  
        if  (makeString ==='"rgb(255, 140, 0)"') // желтый на фиолетовый 
        {
            changeFill5.style.fill  = "DarkOrange";
           changeFilter5.style.filter = "drop-shadow(1px 1px 10px DarkOrange)";
            changeFill.style.fill  = "Violet";
           changeFilter.style.filter = "drop-shadow(1px 1px 10px Violet)";
            changeFill2.style.fill  = "RoyalBlue";
           changeFilter2.style.filter = "drop-shadow(1px 1px 10px RoyalBlue)";
            changeFill3.style.fill  = "MediumSpringGreen";
           changeFilter3.style.filter = "drop-shadow(1px 1px 10px MediumSpringGreen)";
            changeFill4.style.fill  = "Crimson";
           changeFilter4.style.filter = "drop-shadow(1px 1px 10px Crimson)";
        } 
        if (makeString === '"rgb(238, 130, 238)"') // фиолетовый в синий 
        {
            changeFill4.style.fill  = "DarkOrange";
           changeFilter4.style.filter = "drop-shadow(1px 1px 10px DarkOrange)";

            changeFill5.style.fill  = "Violet";
           changeFilter5.style.filter = "drop-shadow(1px 1px 10px Violet)";

            changeFill.style.fill  = "RoyalBlue";
           changeFilter.style.filter = "drop-shadow(1px 1px 10px RoyalBlue)";

            changeFill2.style.fill  = "MediumSpringGreen";
           changeFilter2.style.filter = "drop-shadow(1px 1px 10px MediumSpringGreen)";

            changeFill3.style.fill  = "Crimson";
           changeFilter3.style.filter = "drop-shadow(1px 1px 10px Crimson)";
        }
        if (makeString === '"rgb(65, 105, 225)"') // синий в зеленый 
        {
            changeFill3.style.fill  = "DarkOrange";
           changeFilter3.style.filter = "drop-shadow(1px 1px 10px DarkOrange)";

            changeFill4.style.fill  = "Violet";
           changeFilter4.style.filter = "drop-shadow(1px 1px 10px Violet)";

            changeFill5.style.fill  = "RoyalBlue";
           changeFilter5.style.filter = "drop-shadow(1px 1px 10px RoyalBlue)";

            changeFill.style.fill  = "MediumSpringGreen";
           changeFilter.style.filter = "drop-shadow(1px 1px 10px MediumSpringGreen)";

            changeFill2.style.fill  = "Crimson";
           changeFilter2.style.filter = "drop-shadow(1px 1px 10px Crimson)";
        }
        if (makeString === '"rgb(0, 250, 154)"') 
        {
            changeFill2.style.fill  = "DarkOrange";
           changeFilter2.style.filter = "drop-shadow(1px 1px 10px DarkOrange)";

            changeFill3.style.fill  = "Violet";
           changeFilter3.style.filter = "drop-shadow(1px 1px 10px Violet)";

            changeFill4.style.fill  = "RoyalBlue";
           changeFilter4.style.filter = "drop-shadow(1px 1px 10px RoyalBlue)";

            changeFill5.style.fill  = "MediumSpringGreen";
           changeFilter5.style.filter = "drop-shadow(1px 1px 10px MediumSpringGreen)";

            changeFill.style.fill  = "Crimson";
           changeFilter.style.filter = "drop-shadow(1px 1px 10px Crimson)";
            }
    }
    setInterval(function(onlyFill) {
        garland(onlyFill)
    }, 1000);

