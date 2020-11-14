var age = [6, 8, 10, 15, 43, 47, 55, 79, 60];
var is_subscribed = [true, true, true, false, false, true, false, true, false];

for (var i = 0; i < age.length; i++) {
    if (is_subscribed[i] == true && age[i] < 18) {
        console.log("User is Subscribed and Under 18")
    }
    else if (is_subscribed[i] == true && age[i] > 18) {
        console.log("User is Subscribed and Over 18")
    }
    else if (is_subscribed[i] == false && age[i] > 18) {
        console.log("User is not Subscribed and over 18")
    }
    else if (is_subscribed[i] == false && age[i] < 18) {
        console.log("User is not Subscribed and under 18")
    } 
else alert("script go boom")
}

