
function generatePermutations(list) {
    let size = list.length;
    if (size > list.length) return [];
    else if (size == 1) return list.map(d => [d]);
    return list.flatMap(d => generatePermutations(list.filter(a => a !== d), size - 1).map(item => [d, ...item]));
}
function removeElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    console.log(elements);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}
function checkBoxes(checkBoxA, checkBoxB, checkBoxC, checkBoxD) {
    var checkboxList = [];
    var permutationList = [];
    if (checkBoxA.checked == true) {
        checkboxList.push("A");
    }

    if (checkBoxB.checked == true) {
        checkboxList.push("B");
    }

    if (checkBoxC.checked == true) {
        checkboxList.push("C");
    }

    if (checkBoxD.checked == true) {
        checkboxList.push("D");
    }

    if (checkboxList.length == 1) {
        permutationList.push(checkboxList[0]);
    }


    if (checkboxList.length >= 2) {

        for (i = 0; i <= checkboxList.length; i++) {

            for (j = (checkboxList.length - 1); j > i; j--) {
                var pomArray = [];
                pomArray.push(checkboxList[i]);
                pomArray.push(checkboxList[j]);

                var pomArray1 = [];

                pomArray1 = generatePermutations(pomArray);

                for (k = 0; k < pomArray1.length; k++) {
                    permutationList.push(pomArray1[k]);
                }


            }
        }

        if (checkboxList.length == 3) {
            var pomArray1 = [];
            pomArray1 = generatePermutations(checkboxList);

            for (k = 0; k < pomArray1.length; k++) {
                permutationList.push(pomArray1[k]);
            }
        }

        if (checkboxList.length == 4) {
            var permutationABCD = [['A', 'B', 'C'], ['A', 'B', 'D'], ['A', 'C', 'D'], ['B', 'C', 'D']]
            for (i = 0; i < permutationABCD.length; i++) {

                var pomArray = [];
                var pomArray1 = [];
                pomArray = permutationABCD[i];
                pomArray1 = generatePermutations(pomArray);

                for (k = 0; k < pomArray1.length; k++) {
                    permutationList.push(pomArray1[k]);
                }
            }


            var pomArray1 = [];
            pomArray1 = generatePermutations(checkboxList);

            for (k = 0; k < pomArray1.length; k++) {
                permutationList.push(pomArray1[k]);
            }
        }



    }
    else {
        generatePermutations(checkboxList)
    }


    removeElementsByClass("d_check");

    for (var i = 0; i < permutationList.length; i++) {
        var hold = document.getElementById("checkboxes");
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.className = "form-check-input";
        checkbox.name = "name" + i;
        checkbox.value = "";
        checkbox.id = "id" + i;

        var label = document.createElement('label');
        label.className = "d_check";
        label.htmlFor = "id";

        //label.appendChild(document.createTextNode(permutationList[i]));

        hold.appendChild(label);
        label.appendChild(checkbox)
        label.appendChild(document.createTextNode(" "+permutationList[i]));

    }

}

function exact(inputArray) {
    // přesná shoda []
    exactOutput = "[";
    for (var i = 0; i < inputArray.length; i++) {
        if (i == 0) {
            exactOutput = exactOutput + inputArray[i];
        }
        else {
            exactOutput = exactOutput + " " + inputArray[i];
        }
    }

    exactOutput = exactOutput + "]";

    return exactOutput;

}

function phrase(inputArray) {
    // frázová shoda ""
    exactOutput = "\"";
    for (var i = 0; i < inputArray.length; i++) {
        if (i == 0) {
            exactOutput = exactOutput + inputArray[i];
        }
        else {
            exactOutput = exactOutput + " " + inputArray[i];
        }
    }

    exactOutput = exactOutput + "\"";

    return exactOutput;

}

function broad(inputArray) {
    // volná shoda 
    exactOutput = "";
    for (var i = 0; i < inputArray.length; i++) {
        if (i == 0) {
            exactOutput = exactOutput + inputArray[i];
        }
        else {
            exactOutput = exactOutput + " " + inputArray[i];
        }
    }

    return exactOutput;

}

function diacriticsTest(inputArray) {
    var test = false;
    var diacritics = "ěščřžýáíéúů";
    for (var i = 0; i < inputArray.length; i++) {

        for (var j = 0; j < diacritics.length; j++) {
            if (inputArray[i].indexOf(diacritics[j]) != -1) {
                test = true;
            }
        }
    }

    return test;
}

function changeDiacritics(inputArray1) {

    var outputArray1 = [];
    var word;

    for (var i = 0; i < inputArray1.length; i++) {

        word = inputArray1[i];
        word = word.replace(/ě/g, "e");
        word = word.replace(/š/g, "s");
        word = word.replace(/č/g, "c");
        word = word.replace(/ř/g, "r");
        word = word.replace(/ž/g, "z");
        word = word.replace(/ý/g, "y");
        word = word.replace(/á/g, "a");
        word = word.replace(/í/g, "i");
        word = word.replace(/é/g, "e");
        word = word.replace(/ů/g, "u");
        word = word.replace(/ú/g, "u");

        outputArray1.push(word);

    }

    return outputArray1;
}

function checkboxReadOnly(checkBox,checkId,areaID,buttonId,ddID) {

    let checkBoxId = document.getElementById(checkId);
    let area = document.getElementById(areaID);
    let button = document.getElementById(buttonId);
    let dropButton = document.getElementById(ddID);

    if(checkBox.checked == true) {
       

        checkBoxId.classList.remove("inactive");
        area.readOnly = false;
        button.className = "showClass";
        button.style.visibility = 'visible';
        dropButton.style.width = "177px"; 
   
    }

    else {

        checkBoxId.classList.add("inactive");
        area.readOnly = true;
        button.style.visibility = 'hidden';


    }

}

function selectOutput() {
    document.getElementById("checkBox4").checked = true;
    document.getElementById("checkBox5").checked = true;
    document.getElementById("checkBox6").checked = true;
}

function deselectOutput() {
    document.getElementById("checkBox4").checked = false;
    document.getElementById("checkBox5").checked = false;
    document.getElementById("checkBox6").checked = false;
}

function selectPermutation() {
    var elements = document.getElementsByClassName("d_check");

    for(var i =0;i<elements.length;i++) {
        elements[i].childNodes[0].checked = true;
    }
}

function uniq(arr) {
    var seen = {};
    var ret_arr = [];
    for (var i = 0; i < arr.length; i++) {
        if (!(arr[i] in seen)) {
            ret_arr.push(arr[i]);
            seen[arr[i]] = true;
        }
    }
    return ret_arr;

}

function deselectPermutation() {
    var elements = document.getElementsByClassName("d_check");

    for(var i =0;i<elements.length;i++) {
        elements[i].childNodes[0].checked = false;
    }
}

function clearSpecial(textID) {
    var data = document.getElementById(textID).value.split('\n');

    var specials = new RegExp("[.*+?^$#@|()\\[\\]{}\\\\]", "g");
        

    for(var i = 0;i<data.length;i++) {
        data[i] = data[i].replace(/[&\/\\#, +()$~%.'":*?<>{}]/g,"",);
    }


    var output = "";

    for (var i = 0; i < data.length; i++) {
        if (i == 0) {
            output = output + data[i];
        }
        else {
            output = output + "\n" + data[i];
        }
    }

    document.getElementById(textID).value = output;    
}

function clearDuplicity(textID) {

    var data = document.getElementById(textID).value.split('\n');

    var result = uniq(data);
    var output = "";

    for (var i = 0; i < result.length; i++) {
        if (i == 0) {
            output = output + result[i];
        }
        else {
            output = output + "\n" + result[i];
        }
    }

    document.getElementById(textID).value = output;
}


function concatenate() {

    var textA = document.getElementById("textArea0");
    var textB = document.getElementById("textArea1");
    var textC = document.getElementById("textArea2");
    var textD = document.getElementById("textArea3");


    var checkExact = document.getElementById("checkBox6");
    var checkPhrase = document.getElementById("checkBox5");
    var chcekBroad = document.getElementById("checkBox4");

    var checkPerm = document.getElementsByClassName("d_check")
    var permArray = [];

    for (var i = 0; i < checkPerm.length; i++) {
        if (checkPerm[i].childNodes[0].checked == true) {
            var pom = checkPerm[i].innerText;
            var pom = pom.replace(",", "");
            var pom = pom.trim();


            pomArray = [];

            for (var j = 0; j < pom.length; j++) {
                pomArray.push(pom[j]);
            }

            permArray.push(pomArray);
        }
    }


    var outputArray = [];
    var activeArray = [];




    for (var i = 0; i < permArray.length; i++) {
        activeArray = [];
        for (var j = 0; j < permArray[i].length; j++) {



            if (permArray[i][j] == "A") {
                activeArray.push(textA.value.replace(/\r\n/g, "\n").split("\n"));
            }
            else if (permArray[i][j] == "B") {
                activeArray.push(textB.value.replace(/\r\n/g, "\n").split("\n"));
            }

            else if (permArray[i][j] == "C") {
                activeArray.push(textC.value.replace(/\r\n/g, "\n").split("\n"));
            }

            else if (permArray[i][j] == "D") {
                activeArray.push(textD.value.replace(/\r\n/g, "\n").split("\n"));
            }

            //console.log(activeArray);

        }

        //for
        var pomArray1 = [];
        var pomArray2 = [];
        var pomArray3 = [];
        var pomArray4 = [];

        activeLength = activeArray.length;

        if (activeLength == 1) {
            var pom = activeArray[0];

            if (diacriticsTest(pom) == true) {

                var changePom = changeDiacritics(pom);


                if (checkExact.checked == true) {

                    outputArray.push(exact(pom));
                    outputArray.push(exact(changePom));

                }

                if (checkPhrase.checked == true) {
                    outputArray.push(phrase(pom));
                    outputArray.push(phrase(changePom));
                }

                if (chcekBroad.checked == true) {
                    outputArray.push(broad(pom));
                    outputArray.push(broad(changePom));
                }

            } else {
                if (checkExact.checked == true) {

                    outputArray.push(exact(pom));
                }

                if (checkPhrase.checked == true) {
                    outputArray.push(phrase(pom));
                }

                if (chcekBroad.checked == true) {
                    outputArray.push(broad(pom));
                }
            }

        }

        else if (activeLength == 2) {
            pomArray1 = activeArray[0];
            pomArray2 = activeArray[1];

            for (var k = 0; k < pomArray1.length; k++) {
                for (var l = 0; l < pomArray2.length; l++) {

                    var pom = [pomArray1[k].toLowerCase(), pomArray2[l].toLowerCase()];

                    if (diacriticsTest(pom) == true) {

                        var changePom = changeDiacritics(pom);


                        if (checkExact.checked == true) {

                            outputArray.push(exact(pom));
                            outputArray.push(exact(changePom));

                        }

                        if (checkPhrase.checked == true) {
                            outputArray.push(phrase(pom));
                            outputArray.push(phrase(changePom));
                        }

                        if (chcekBroad.checked == true) {
                            outputArray.push(broad(pom));
                            outputArray.push(broad(changePom));
                        }

                    } else {
                        if (checkExact.checked == true) {

                            outputArray.push(exact(pom));
                        }

                        if (checkPhrase.checked == true) {
                            outputArray.push(phrase(pom));
                        }

                        if (chcekBroad.checked == true) {
                            outputArray.push(broad(pom));
                        }
                    }

                }
            }

        }
        else if (activeLength == 3) {
            pomArray1 = activeArray[0];
            pomArray2 = activeArray[1];
            pomArray3 = activeArray[2];

            for (var k = 0; k < pomArray1.length; k++) {
                for (var l = 0; l < pomArray2.length; l++) {
                    for (var m = 0; m < pomArray3.length; m++) {
                        var pom = [pomArray1[k].toLowerCase(), pomArray2[l].toLowerCase(), pomArray3[m].toLowerCase()];


                        if (diacriticsTest(pom) == true) {

                            var changePom = changeDiacritics(pom);


                            if (checkExact.checked == true) {

                                outputArray.push(exact(pom));
                                outputArray.push(exact(changePom));

                            }

                            if (checkPhrase.checked == true) {
                                outputArray.push(phrase(pom));
                                outputArray.push(phrase(changePom));
                            }

                            if (chcekBroad.checked == true) {
                                outputArray.push(broad(pom));
                                outputArray.push(broad(changePom));
                            }

                        } else {
                            if (checkExact.checked == true) {

                                outputArray.push(exact(pom));
                            }

                            if (checkPhrase.checked == true) {
                                outputArray.push(phrase(pom));
                            }

                            if (chcekBroad.checked == true) {
                                outputArray.push(broad(pom));
                            }
                        }
                    }
                }
            }
        }

        else if (activeLength == 4) {
            pomArray1 = activeArray[0];
            pomArray2 = activeArray[1];
            pomArray3 = activeArray[2];
            pomArray4 = activeArray[3];

            for (var k = 0; k < pomArray1.length; k++) {
                for (var l = 0; l < pomArray2.length; l++) {
                    for (var m = 0; m < pomArray3.length; m++) {
                        for (var n = 0; n < pomArray4.length; n++) {

                            var pom = [pomArray1[k].toLowerCase(), pomArray2[l].toLowerCase(), pomArray3[m].toLowerCase(), pomArray4[n].toLowerCase()];

                            if (diacriticsTest(pom) == true) {

                                var changePom = changeDiacritics(pom);


                                if (checkExact.checked == true) {

                                    outputArray.push(exact(pom));
                                    outputArray.push(exact(changePom));

                                }

                                if (checkPhrase.checked == true) {
                                    outputArray.push(phrase(pom));
                                    outputArray.push(phrase(changePom));
                                }

                                if (chcekBroad.checked == true) {
                                    outputArray.push(broad(pom));
                                    outputArray.push(broad(changePom));
                                }

                            } else {
                                if (checkExact.checked == true) {

                                    outputArray.push(exact(pom));
                                }

                                if (checkPhrase.checked == true) {
                                    outputArray.push(phrase(pom));
                                }

                                if (chcekBroad.checked == true) {
                                    outputArray.push(broad(pom));
                                }
                            }
                        }
                    }
                }
            }
        }

        //console.log(outputArray);


        //console.log(activeArray);



    }



    var output = "";
    var total =  outputArray.length;

    for (var i = 0; i < outputArray.length; i++) {
        if (i == 0) {
            output = output + outputArray[i];
        }
        else {
            output = output + "\n" + outputArray[i];
        }
    }

    
    document.getElementById("total").innerHTML = total;
    document.getElementById("textConcatenate").value = output;

}

window.onload = function () {
    var checkBoxA = document.getElementById("checkBox0");
    var checkBoxB = document.getElementById("checkBox1");
    var checkBoxC = document.getElementById("checkBox2");
    var checkBoxD = document.getElementById("checkBox3");


    checkBoxA.addEventListener('click', function () {

        checkboxReadOnly(checkBoxA,"checkA","textArea0","dropA",'dA');
        checkBoxes(checkBoxA, checkBoxB, checkBoxC, checkBoxD)

    });

    checkBoxB.addEventListener('click', function () {
        checkboxReadOnly(checkBoxB,"checkB","textArea1","dropB","dB");
        checkBoxes(checkBoxA, checkBoxB, checkBoxC, checkBoxD)

    });

    checkBoxC.addEventListener('click', function () {
        checkboxReadOnly(checkBoxC,"checkC","textArea2","dropC","dC");
        checkBoxes(checkBoxA, checkBoxB, checkBoxC, checkBoxD)

    });

    checkBoxD.addEventListener('click', function () {
        checkboxReadOnly(checkBoxD,"checkD","textArea3","dropD","dD");
        checkBoxes(checkBoxA, checkBoxB, checkBoxC, checkBoxD)

    });

}