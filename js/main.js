/*api_key = "RgatEdgWCIVAQ3Tj3GPWXI4qu0efJVV5VlDXVIAb";
url = "https://api.nal.usda.gov/fdc/v1/foods/";
*/
let selectedFile;
document.getElementById("keyword").addEventListener("change",function(e){
    selectedFile = e.target.files[0];
});
document.getElementById("submit-button").addEventListener("click",function(){
    if (selectedFile){
        console.log("hi");
        let fileReader = new FileReader();
        fileReader.onload = function(event){
            let data = event.target.result;
            let workbook = XLSX.read(data,{
                type: "binary"
            });
            workbook.SheetNames.forEach(sheet => {
                let rowObject = XLSX.utils.sheet_to_row_object_array(
                    workbook.Sheets[sheet]
                );
                let jsonObject = JSON.stringify(rowObject);
                document.getElementById("jsonData").innerHTML = jsonObject;
                console.log(jsonObject);
            });
            
        };
        fileReader.readAsBinaryString(selectedFile);
    };
});

document.querySelector("#submit-button").addEventListener("click",function(e){
    let food = document.querySelector("#keyword").value;
    let data = raw_data.filter(e=>e.name == food);
    document.querySelector("#foods").innerHTML += `<tr class="table-food">
           
        <td class="reuse">
        ${data.name}
        </td>
        <td>
            ${data.portion}
        </td>
        <td>
            ${data.calorie}
        </td>

    </tr>`;

});


