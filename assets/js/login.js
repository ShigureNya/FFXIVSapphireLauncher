/**
 * Created by guhaoran on 2018/4/27.
 */
$(document).ready(function () {
    $('#login-tab-user').click(function () {
        console.log("用户登录");
        $('#login-tab-user').css('color','#1868C2');
        $('#login-tab-qrcode').css('color','#fff');
    });

    $('#login-tab-qrcode').click(function () {
        console.log("QR码登录");
        // $('#login-tab-qrcode').css('color','#1868C2');
        // $('#login-tab-user').css('color','#fff');
    });
});

function showUserLogin() {
    
}

function showQRCodeLogin() {
    
}