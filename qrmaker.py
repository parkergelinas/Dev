import "qrcode"


img = qrcode.make("this is a test")

img.save("myqrcode.png")