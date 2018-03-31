//vAar on the top   
var keys = document.querySelectorAll('.key')
var notes = {
    cKey: document.querySelector('#cAudio'),
    dKey: document.querySelector('#dAudio'),
    eKey: document.querySelector('#eAudio'),
    fKey: document.querySelector('#fAudio'),
    gKey: document.querySelector('#gAudio'),
    aKey: document.querySelector('#aAudio'),
    bKey: document.querySelector('#bAudio')
}
// console.log(keys);++


// Functions Definitions

function playNote(letter) {
    notes[letter].currentTime = 0
    notes[letter].play()


}



//Calling functions / add Event Listeners

keys.forEach(function (key) {
    key.addEventListener('mousedown', function () {
        playNote(key.id)
        
    })

})


document.addEventListener('keydown', function (event) {
    console.log(event)
    


    if (event.key == 'c') {
        playNote("cKey")
        document.getElementById("cKey").style.backgroundColor = "lightblue";
    }

    else if (event.key == 'd' ) {
        playNote("dKey")
        document.getElementById("dKey").style.backgroundColor = "lightblue";
    }

    else if (event.key == 'e') {
        playNote("eKey")
        document.getElementById("eKey").style.backgroundColor = "lightblue";
    }
    


    else if (event.key == 'f') {
        playNote("fKey")
        document.getElementById("fKey").style.backgroundColor = "lightblue";
    }

    else if (event.key == 'g') {
        playNote("gKey")
        document.getElementById("gKey").style.backgroundColor = "lightblue";
    }
    else if (event.key == 'a') {
        playNote("aKey")
        document.getElementById("aKey").style.backgroundColor = "lightblue";
    }

    else if (event.key == 'b') {
        playNote("bKey")
        document.getElementById("bKey").style.backgroundColor = "lightblue";
    }
    

})