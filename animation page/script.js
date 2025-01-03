//pahle ye pata karo mouse rectangle par aaya aur move hua
//ab ye calculate karo ki hum centre se left par hai yaa right par hai
//ab ye pata karo ki hum centre se kitna left par hai , jitna left par hai, utni intensity se color lagao
// color  - rgb(255, 255, 255)
// hsl color
//Hue is a degree on the color wheel from 0 to 360. 0 (or 360) is red, 120 is green, 240 is blue.
//Saturation can be described as the intensity of a color. It is a percentage value from 0% to 100%.
//100% is full color, no shades of gray.
//50% is 50% gray, but you can still see the color.
//0% is completely gray; you can no longer see the color.
//The lightness of a color can be described as how much light you want to give the color, where 0% means no light (dark), 50% means 50% light (neither dark nor light), and 100% means full light.
//hsl(86, 38%, 54%)

//The getBoundingClientRect() method returns the size of an element and its position relative to the viewport. The getBoundingClientRect() method returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height.
//Note - The scrolling that has been done is taken into account. This means that the rectangle's edges (top, left, bottom, and right) change their values every time the scrolling position changes.

var rect = document.querySelector("#rectangle");

rect.addEventListener("mousemove", function(details){
    var rectanglelocation = rect.getBoundingClientRect();  //rect kaa leftmost upar vaala point ka pos batao
    var insiderectval = details.clientX - rectanglelocation.left;  //rectangle ke andar hum kitna hai

    // Mouse position ko 0 se 100 ke range me normalize karte hain
    var percentage = (insiderectval / rectanglelocation.width) * 100;

    // HSL value calculate karte hain
    // Left (0%) - Dark Red, Center (50%) - White, Right (100%) - Dark Blue
    var hue;
    if (percentage <= 50) {
        // Left to center: Red to white
        hue = 0; // Red hue
        //At percentage = 0: lightness=50
        //At percentage = 50: lightness=100
        var lightness = 50 + (percentage / 50) * 50; // Lightness from 50% to 100%
        rect.style.backgroundColor = `hsl(${hue}, 100%, ${lightness}%)`;
    } else {
        // Center to right: White to blue
        hue = 240; // Blue hue
        //At percentage = 50: lightness=100
        //At percentage = 100: lightness=0
        var lightness = 100 - ((percentage - 50) / 50) * 50; // Lightness from 100% to 50%
        rect.style.backgroundColor = `hsl(${hue}, 100%, ${lightness}%)`;
    }


});

rect.addEventListener("mouseleave", function(){
    rect.style.backgroundColor = "bisque";
});






 