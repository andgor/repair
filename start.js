
window.onload = function () {
    
    var model1 = document.getElementById('model');
    var model2 = document.getElementById('model2');
    model1.addEventListener('keyup', function () {
        model2.innerHTML = model1.value;
    });

    var orderNumber1 = document.getElementById('order-number');
    var orderNumber2 = document.getElementById('order-number2');
    orderNumber1.addEventListener('keyup', function () {
        orderNumber2.innerHTML = orderNumber1.value;
    });

    var imei1 = document.getElementById('imei');
    var imei2 = document.getElementById('imei2');
    imei1.addEventListener('keyup', function () {
        imei2.innerHTML = imei1.value;
    });

    var displayStatus1 = document.getElementById('display-status');
    var displayStatus2 = document.getElementById('display-status2');
    displayStatus1.addEventListener('click', function () {
        displayStatus2.innerHTML = displayStatus1.value;
    });

    var bodyStatus1 = document.getElementById('body-status');
    var bodyStatus2 = document.getElementById('body-status2');
    bodyStatus1.addEventListener('click', function () {
        bodyStatus2.innerHTML = bodyStatus1.value;
    });

    var adress1 = document.getElementById('adress');
    var adress2 = document.getElementById('adress2');
    adress1.addEventListener('click', function () {
        adress2.innerHTML = adress1.value;
    });

    var deviceDefect1 = document.getElementById('device_defect');
    var deviceDefect2 = document.getElementById('device_defect2');
    deviceDefect1.addEventListener('keyup', function () {
        deviceDefect2.innerHTML = deviceDefect1.value;
    });

    var clientName1 = document.getElementById('client-name');
    var clientName2 = document.getElementById('client-name2');
    clientName1.addEventListener('keyup', function () {
        clientName2.innerHTML = clientName1.value;
    });

    var clientPhone1 = document.getElementById('client-phone');
    var clientPhone2 = document.getElementById('client-phone2');
    clientPhone1.addEventListener('keyup', function () {
        clientPhone2.innerHTML = clientPhone1.value;
    });

    var repairsPrice1 = document.getElementById('repairs-price');
    var repairsPrice2 = document.getElementById('repairs-price2');
    repairsPrice1.addEventListener('keyup', function () {
        repairsPrice2.innerHTML = repairsPrice1.value;
    });

    var repairsPrepay1 = document.getElementById('repairs-prepay');
    var repairsPrepay2 = document.getElementById('repairs-prepay2');
    repairsPrepay1.addEventListener('keyup', function () {
        repairsPrepay2.innerHTML = repairsPrepay1.value;
    });
};