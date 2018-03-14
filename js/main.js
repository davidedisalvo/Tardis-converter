//split screen************************************************
document.addEventListener('DOMContentLoaded', function(){
  let wrapper = document.getElementById('wrapper');
  let topLayer = wrapper.querySelector('.top');
  let handle = wrapper.querySelector('.handle');
  let skew = 0;
  let delta = 0;

  if(wrapper.className.indexOf('skewed') != -1){
    skew = 1000;
  }
  
  wrapper.addEventListener('mousemove', function(e){
    delta = (e.clientX - window.innerWidth / 2) * 0.5;
  
    handle.style.left = e.clientX + delta + 'px';

    topLayer.style.width= e.clientX + skew + delta + 'px';
  });
});

//btn scroll **************************************************
var btn;

btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    window.scrollBy(0, 800);
});


//first converter (grams)****************************************


            document.getElementById('lbsInput').addEventListener("input", function(e) {
            let lbs = e.target.value;
            let el = lbs/0.15747;
            document.getElementById('kgOutput').innerHTML = '<div id="kgOutput"><p id="textOutput" class="element-animation">' + el.toFixed(2)+ '</p></div>';
                });


//var x for toggle

var x = 1;

    document.getElementById("switch1").addEventListener('click', function(e) {
        if (x == 1) {
                     document.getElementById('titleconteiner').innerHTML = "<h2 class='text-center subtitle'> Kilograms <i class='fas fa-forward'></i>Stones</h2>";
                    document.getElementById('lbsInput').placeholder = "Enter Kilograms...";
                    document.getElementById('results').innerHTML = '<h4 id="titleOutput">Stones:</h4><div id="kgOutput"</div>';
                    document.getElementById('lbsInput').addEventListener("input", function(e) {
                    let kg = e.target.value;
                    let el = kg*0.15747;
                    document.getElementById('kgOutput').innerHTML ='<div id="kgOutput"><p id="textOutput" class="element-animation">' + el.toFixed(2)+ '</p></div>';
                    });
                    x = 0;
                    } else { 
                            document.getElementById('titleconteiner').innerHTML = "<h2 class='text-center subtitle'>Stones <i class='fas fa-forward'></i>Kilograms</h2>";
                            document.getElementById('lbsInput').placeholder = "Enter Stones...";
                            document.getElementById('results').innerHTML = '<h4 id="titleOutput">Kilograms:</h4><div id="kgOutput"</div>';
                            document.getElementById('lbsInput').addEventListener("input", function(e) {
                            let lbs = e.target.value;
                            let el = lbs/0.15747;
                            document.getElementById('kgOutput').innerHTML = '<div id="kgOutput"><p id="textOutput" class="element-animation">' + el.toFixed(2)+ '</p></div>';
                                });
                            x = 1;
                            }
        });

//second converter (miles)************************************************************
            document.getElementById('milesInput').addEventListener("input", function(e) {
            let miles = e.target.value;
            let el = miles/0.62137;
            document.getElementById('kmOutput').innerHTML = '<div id="kmOutput"><p id="textOutput" class="element-animation">' + el.toFixed(2)+ '</p></div>';
        });


//toggle var y
    
var y = 1;

    document.getElementById("switch2").addEventListener('click', function(e) {
        if (y == 1) {
                     document.getElementById('titleconteiner2').innerHTML = "<h2 class='text-center subtitle'>Kilometres <i class='fas fa-forward'></i>Miles</h2>";
                    
                    document.getElementById('milesInput').placeholder = "Enter Kilometres...";
                    document.getElementById('results2').innerHTML = '<h4 id="titleOutput">Miles:</h4><div id="kmOutput"</div>';
                    document.getElementById('milesInput').addEventListener("input", function(e) {
                    let km = e.target.value;
                    let el = km*0.15747;
                    document.getElementById('kmOutput').innerHTML = '<div id="kmOutput"><p id="textOutput" class="element-animation">' + el.toFixed(2)+ '</p></div>';
                    });
                    y = 0;
                    } else { 
                            document.getElementById('titleconteiner2').innerHTML = "<h2 class='text-center subtitle'>Miles <i class='fas fa-forward'></i>Kilometres</h2></div>";
                                            document.getElementById('titleconteiner2').style.marginTop = '0';

                            document.getElementById('milesInput').placeholder = "Enter Miles...";
                            document.getElementById('results2').innerHTML = '<h4 id="titleOutput">Kilometres:</h4><div id="kmOutput"</div>';
                            document.getElementById('milesInput').addEventListener("input", function(e) {
                            let miles = e.target.value;
                            let el = miles/0.15747;
                            document.getElementById('kmOutput').innerHTML = '<div id="kmOutput"><p id="textOutput" class="element-animation">' + el.toFixed(2)+ '</p></div>';
                                });
                            y = 1;
                            }
        });






//third converter (pints) *********************************************************
            document.getElementById('pintInput').addEventListener("input", function(e) {
            let pints = e.target.value;
            let el = pints/1.7598;
            document.getElementById('litresOutput').innerHTML = '<div id="litresOutput"><p id="textOutput" class="element-animation">' + el.toFixed(2)+ '</p></div>';
        });

//toggle var z

var z = 1

    document.getElementById("switch3").addEventListener('click', function(e) {
        if (z == 1) { 
                    document.getElementById('titleconteiner3').innerHTML = "<h2 class='text-center subtitle'>Litres <i class='fas fa-forward'></i>Pints</h2>";
                    document.getElementById('pintInput').placeholder = "Enter Litres...";
                    document.getElementById('results3').innerHTML = '<h4 id="titleOutput">Pints:</h4><div id="litresOutput"</div>';
                    document.getElementById('pintInput').addEventListener("input", function(e) {
                    let litres = e.target.value;
                    let el = litres*1.7598;
                    document.getElementById('litresOutput').innerHTML = '<div id="litresOutput"><p id="textOutput" class="element-animation">' + el.toFixed(2)+ '</p></div>';
                        });
                    z = 0;
                    } else { 
                            document.getElementById('titleconteiner3').innerHTML = "<h2 class='text-center subtitle'>Pints <i class='fas fa-forward'></i>Litres</h2>";
                            document.getElementById('pintInput').placeholder = "Enter Pints...";
                            document.getElementById('results3').innerHTML = '<h4 id="titleOutput">Litres:</h4><div id="litresOutput"</div>';
                            document.getElementById('pintInput').addEventListener("input", function(e) {
                            let pints = e.target.value;
                            let el = pints/1.7598;
                            document.getElementById('litresOutput').innerHTML = '<div id="litresOutput"><p id="textOutput" class="element-animation">' + el.toFixed(2)+ '</p></div>';
                            });
                            z = 1;
                            }
        });

   

// converter fourth (pounds) *************************************************
document.getElementById('poundsInput').addEventListener("input", function(e) {
    let pounds = e.target.value;
    let el = pounds/0.886570;
    document.getElementById('euroOutput').innerHTML = '<div id="euroOutput"><p id="textOutput" class="element-animation">' + el.toFixed(2)+ '</p></div>';
});


//toggle var v

var v = 1;

document.getElementById("switch4").addEventListener('click', function(e) {
        if (v == 1) { 
                    document.getElementById('titleconteiner4').innerHTML = "<h2 class='text-center subtitle'>Euros <i class='fas fa-forward'></i>Pounds</h2>";
                    document.getElementById('poundsInput').placeholder = "Enter Euros...";
                    document.getElementById('results4').innerHTML = '<h4 id="titleOutput">Pounds:</h4><div id="euroOutput"</div>';
                    document.getElementById('poundsInput').addEventListener("input", function(e) {
                    let euros = e.target.value;
                    let el = euros*0.886570;
                    document.getElementById('euroOutput').innerHTML = '<div id="euroOutput"><p id="textOutput" class="element-animation">' + el.toFixed(2)+ '</p></div>';
                        });
                    v = 0;
                    } else { 
                            document.getElementById('titleconteiner4').innerHTML = "<h2 class='text-center subtitle'>Pounds <i class='fas fa-forward'></i>Euros</h2>";
                            document.getElementById('poundsInput').placeholder = "Enter Pounds...";
                            document.getElementById('results4').innerHTML = '<h4 id="titleOutput">Euro:</h4><div id="euroOutput"</div>';
                            document.getElementById('poundsInput').addEventListener("input", function(e) {
                            let pounds = e.target.value;
                            let el = pounds/0.886570;
                            document.getElementById('euroOutput').innerHTML = '<div id="euroOutput"><p id="textOutput" class="element-animation">' + el.toFixed(2)+ '</p></div>';
                            });
                            v = 1;
                            }
        });











