input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let randomnumber: number;
    let forwardcounter = 0
    while (forwardcounter < 5) {
        basic.pause(500)
        randomnumber = randint(1, 2)
        if (randomnumber == 1) {
            forwardcounter += 1
            kitronik_servo_lite.driveForwards(100)
            serial.writeLine("forward" + forwardcounter)
        }
        
        if (randomnumber == 2) {
            kitronik_servo_lite.driveBackwards(100)
            serial.writeLine("backward")
        }
        
    }
})
