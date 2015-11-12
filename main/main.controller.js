(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    function MainController() {
        $('#myTabs a').click(function (e) {
            e.preventDefault()
            $(this).tab('show')
        });
            $('#excelCheck').on('click', function () {
                switch  ($('#excel').val()) {
                    case '0':
                        alert('Entered value cannot be 0');
                        break;
                    default:
                        if ($('#excel').val() <= 156) {
                            var letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
                            var number = 0;
                            var number2 = 0;
                            var result = '';
                            if ($('#excel').val() > 26 && $('#excel').val() <= 52) {
                                result = 1;
                            } else if ($('#excel').val() > 52 && $('#excel').val() <= 78) {
                                result = 2;
                            } else if ($('#excel').val() > 78 && $('#excel').val() <= 104) {
                                result = 3;
                            } else if ($('#excel').val() > 104 && $('#excel').val() <= 130) {
                                result = 4;
                            } else if ($('#excel').val() > 130 && $('#excel').val() <= 156) {
                                result = 5;
                            } else {
                                result = $('#excel').val();
                            }
                            if ($('#excel').val() > 26) {
                                number2 = ($('#excel').val()) - 26;
                                if (number2 > 26 && number2 <= 52) {
                                    number2 = number2 - 26;
                                } else if (number2 > 52 && number2 <= 78) {
                                    number2 = number2 - 52;
                                } else if (number2 > 78 && number2 <= 104) {
                                    number2 = number2 - 78;
                                } else if (number2 > 104) {
                                    number2 = number2 - 104;
                                } else {
                                    number2 = $('#excel').val() - 26;
                                }
                                $('#excelResult').val(letters[result] + '' + letters[number2]);
                            } else {
                                $('#excelResult').val(letters[$('#excel').val()]);
                            }
                        } else {
                            alert('Eneter value cannot exceed 156');
                            return false;
                        }
                }
            });
        $('#convertNumber').on('click',function () {
            var textToConvert = $('#textNumber').val().split(',');
            var textNumber='', buff= [];
            for (var i=0; i < textToConvert.length; i++) {
                switch (textToConvert[i]) {
                    case '0':
                        textNumber = 'zero';
                        break;
                    case '1':
                        textNumber = 'one';
                        break;
                    case '2':
                        textNumber = 'two';
                        break;
                    case '3':
                        textNumber = 'three';
                        break;
                    case '4':
                        textNumber = 'four';
                        break;
                    case '5':
                        textNumber = 'five';
                        break;
                    case '6':
                        textNumber = 'six';
                        break;
                    case '7':
                        textNumber = 'seven';
                        break;
                    case '8':
                        textNumber = 'eight';
                        break;
                    case '9':
                        textNumber = 'nine';
                        break;
                    case '10':
                        textNumber = 'ten';
                        break;
                    case '11':
                        textNumber = 'eleven';
                        break;
                    case '12':
                        textNumber = 'twelve';
                        break;
                    case '13':
                        textNumber = 'thirteen';
                        break;
                    case '14':
                        textNumber = 'fourteen';
                        break;
                    case '15':
                        textNumber = 'fifteen';
                        break;
                    case '16':
                        textNumber = 'sixteen';
                        break;
                    case '17':
                        textNumber = 'seventeen';
                        break;
                    case '18':
                        textNumber = 'eighteen';
                        break;
                    case '19':
                        textNumber = 'nineteen';
                        break;
                    case '20':
                        textNumber = 'twenty';
                        break;
                    case '21':
                        textNumber = 'twenty-one';
                        break;
                    case '22':
                        textNumber = 'twenty-two';
                        break;
                    case '23':
                        textNumber = 'twenty-thee';
                        break;
                    case '24':
                        textNumber = 'twenty-four';
                        break;
                    case '25':
                        textNumber = 'twenty-five';
                        break;
                    case '26':
                        textNumber = 'twenty-six';
                        break;
                    case '27':
                        textNumber = 'twenty-seven';
                        break;
                    case '28':
                        textNumber = 'twenty-eight';
                        break;
                    case '29':
                        textNumber = 'twenty-nine';
                        break;
                    case '30':
                        textNumber = 'thirty';
                        break;
                    default:
                        alert('Entered value cannot exceed 30');
                        return false;
                }
                buff.push(textNumber);
            }
            $('#textResult').val(buff.join(','));
        });
    }
})();
