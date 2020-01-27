    togglePic = true;

    let addClass = function(id){
        id.classList.add(togglePicture());

    };

    let removeClass = function(id){
        id.classList.remove(togglePicture())
    };

    let createTable = function(){

        let table = document.createElement("TABLE");
        let row1 = document.createElement("TR");
        let row2 = document.createElement("TR");
        let row3 = document.createElement("TR");

        let image = document.createElement("IMG");
        let image2 = document.createElement("IMG");

        let data1 = document.createElement("TD");
        let data2 = document.createElement("TD");
        let data3 = document.createElement("TD");
        let data4 = document.createElement("TD");
        let data5 = document.createElement("TD");
        let data6 = document.createElement("TD");
        let data7 = document.createElement("TD");
        let data8 = document.createElement("TD");
        let data9 = document.createElement("TD");
        data1.style.backgroundColor = "lightblue";
        data1.style.alignItems = "center";
        data1.onmouseout = function(){Bruh(this)};
        data2.style.backgroundColor = "lightblue";
        data3.style.backgroundColor = "lightblue";
        data4.style.backgroundColor = "lightblue";
        data5.style.backgroundColor = "lightblue";
        data6.style.backgroundColor = "lightblue";
        data7.style.backgroundColor = "lightblue";
        data8.style.backgroundColor = "lightblue";
        data9.style.backgroundColor = "lightblue";

        //CREATE THE TABLE WITH APPENDAGES
        row1.appendChild(data1);
        row1.appendChild(data2);
        row1.appendChild(data3);

        row2.appendChild(data4);
        row2.appendChild(data5);
        row2.appendChild(data6);

        row3.appendChild(data7);
        row3.appendChild(data8);
        row3.appendChild(data9);

        table.appendChild(row1);
        table.appendChild(row2);
        table.appendChild(row3);

        data1.appendChild(image);
        data2.appendChild(image);
        data3.appendChild(image);
        data4.appendChild(image);
        data5.appendChild(image);
        data6.appendChild(image);
        data7.appendChild(image);
        data8.appendChild(image);
        data9.appendChild(image);

        data1.appendChild(image2);
        data2.appendChild(image2);
        data3.appendChild(image2);
        data4.appendChild(image2);
        data5.appendChild(image2);
        data6.appendChild(image2);
        data7.appendChild(image2);
        data8.appendChild(image2);
        data9.appendChild(image2);
        let content = document.getElementById("content");
        content.appendChild(table);
    };
    let Bruh = function(){
        togglePic = "O.jpg";
        data1 = togglePic;
    };



