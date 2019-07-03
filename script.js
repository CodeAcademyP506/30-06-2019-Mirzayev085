

var formArr = []

function yoxla() {
    if (localStorage.formArray) {
        formArr = JSON.parse(localStorage.formArray);

        for (var i = 0; i < formArr.length; i++) {
            var ad = formArr[i].ad;
            var soyad = formArr[i].soyad;
            var email = formArr[i].email;
            var sheher = formArr[i].sheher;
            var redakte = formArr[i].redakte;

            addMyCell(ad, soyad, email, sheher, redakte);
        }
    }
}



$("#tesdiq").click(function () {


    yoxla();


    var ad = $("#ad").val();
    var soyad = $("#soyad").val();
    var email = $("#email").val();
    var sheher = $("#sheher").val();
    var redakte = ("<input type='checkbox' name='sil'></input>");

    formObj = { ad: ad, soyad: soyad, email: email, sheher: sheher, redakte: redakte };
    formArr.push(formObj);

    localStorage.formArray = JSON.stringify(formArr);

    addMyCell(ad, soyad, email, sheher, redakte);


})

function addMyCell(ad, soyad, email, sheher, redakte) {

    $(".regForm").hide();
    $(".myTable").show();
    var table = document.getElementById("tableMy");
    var row = table.insertRow();
    var adCell = row.insertCell(0);
    var soyadCell = row.insertCell(1);
    var emailCell = row.insertCell(2);
    var sheherCell = row.insertCell(3);
    var redakteCell = row.insertCell(4);

    adCell.innerHTML = ad;
    soyadCell.innerHTML = soyad;
    emailCell.innerHTML = email;
    sheherCell.innerHTML = sheher;
    redakteCell.innerHTML = redakte;
}



$("#sil").click(function () {
    $(".myTable table tbody").find('input[name=sil]').each(function () {
        if ($(this).is(":checked")) {
            $(this).parents("tr").remove()
            
        }
    })
})


$("#bazasil").click(function(){
    localStorage.clear();
})






