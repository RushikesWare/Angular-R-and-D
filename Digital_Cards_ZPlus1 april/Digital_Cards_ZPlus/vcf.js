var email = /[-a-zA-Z0-9_\.]+@[-a-zA-Z0-9]+\.[-a-zA-Z0-9\.]+/;
$(document).ready(function () {
    $(function () {
        $("input[name='numonly']").on('input', function (e) {
            $(this).val($(this).val().replace(/[^0-9]/g, ''));
        });
    });
    $("#GenerateOTP").click(function (e) {
        getOTP();
    });
    $("#SendVCF").click(function (e) {
        SendVCF();
    });
	$('#btnUpload').unbind().click(function () {
        var file = $('#dataFile').get(0);
        upload(file);
		return false;
    });
});

function getOTP() {
    isError = false;

    var Email = $('#EmailID').val();
    if (Email == null || Email == "") {
        $('#Error').html("Enter Email").show();
        isError = true;
    }
    if (Email.match(email) != Email) {
        $('#Error').html("Enter valid email").show();
        isError = true;
    }

    if (isError == false) {
        $.ajax({
            url: "/INonRender/VCF/GenerateOTP",
            data: { Email: Email },
            type: "post",
            datatype: "json",
            ContentType: "application/json",
            success: function (data) {
                if (data.MsgType == "S") {
                    $("#EmailID").attr('readonly', true);
                    $('#divOTP').show();
                    $('#divGenerateOTP').hide();
                    $('#Error').html(data.Message).show();

                }
                else {
                    $('#divOTP').hide();
                    $('#Error').html(data.Message).show();

                }
            },
            error: function () {
            }
        })
    }
}

function SendVCF() {
    isError = false;

    var Email = $('#EmailID').val();
    if (Email == null || Email == "") {
        $('#Error').html("Enter Email").show();
        isError = true;
    }

    var OTP = $('#OTP').val();
    if (OTP == null || OTP == "") {
        $('#Error').html("Enter OTP").show();
        isError = true;
    }
    if (OTP.length > 6) {
        $('#Error').html("OTP Length should be 6").show();
        isError = true;
    }
    else if (OTP.length > 0 && OTP.length < 6) {
        $('#Error').html("OTP Length should be 6").show();
        isError = true;
    }

    if (isError == false) {
        $('#Error').html("").hide();
        $.ajax({
            url: "/INonRender/VCF/SendVCF",
            data: {
                Email: Email,
                OTP: OTP
            },
            type: "post",
            datatype: "json",
            ContentType: "application/json",
            success: function (data) {
                debugger;
                if (data.MsgType == "S") {
                    $('#Error').html(data.Message).show();
                    $('#EmailID').val("");
                    $('#OTP').val("");
                    $('#divOTP').hide();
                    $('#divGenerateOTP').show();
                    $("#EmailID").attr('readonly', false);
                }
                else {
                    $('#Error').html(data.Message).show();

                }
            },
            error: function () {
            }
        });
    }
}
function SendSMS(url, random, name) {
    isError = false;

    var WANumber = $('#txtWhatsappNumber').val();
    if (WANumber == null || WANumber == "") {
        //$('#Error').html("Enter OTP").show();
        $('#WANumber').focus();
        isError = true;
    }
    if (WANumber.length != 10) {
        //$('#Error').html("OTP Length should be 6").show();
        $('#WANumber').focus();
        isError = true;
    }

    if (isError == false) {
        $.ajax({
            url: "/INonRender/VCF/SendSMSWA",
            data: {
                wa: WANumber,
                url: url,
                random: random,
                name: name,
            },
            type: "post",
            ContentType: "application/json",
            success: function (data) {
                if (data == "1") {
                    $("#spnSuccess").html("Message sent successfully").show();
                    setTimeout(function () {
                        $("#spnSuccess").html('').hide();
                    },1000);
                }
                else {

                }
            },
            error: function () {
            }
        });
    }
}
function upload(file) {
    var filename = "";
    if (window.FormData !== undefined) {
        var files = file.files;
        if (files[0].size > 5242880) {
            error.html('Please Select file less than 5 MB').show();
            return false;
        }
        var fileData = new FormData();
        for (var i = 0; i < files.length; i++) {
            fileData.append(files[i].name, files[i]);
        }
        $.ajax({
            url: "INonRender/VCF/Upload",
            type: "POST",
            contentType: false,
            processData: false,
            data: fileData,
            async: false,
            success: function (result) {
                if (result.Success) {
                    alert("Success");
                } else {
                    alert("Something went wrong");
                }
            }
        });
    }
}