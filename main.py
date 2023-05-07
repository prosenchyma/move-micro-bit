def on_button_pressed_a():
    forwardcounter = 0
    while forwardcounter < 5:
        randomnumber = randint(1,2)
        if randomnumber == 1:
            forwardcounter += 1
            kitronik_servo_lite.drive_forwards(100)
            # serial.write_line("forward" + forwardcounter) for testing
        if randomnumber == 2:
            kitronik_servo_lite.drive_backwards(100)
            # serial.write_line("backward") for testing
        basic.pause(500) 
input.on_button_pressed(Button.A, on_button_pressed_a)
