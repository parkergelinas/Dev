from tkinter import *

root = Tk()

e = Entry(root, width=20)
e.pack()
e.insert(0, "Enter Your Name: ")


def myClick():
    hello = "Hello " + e.get()
    myLabel = Label(root, text=hello)
    myLabel.pack()


myButton = Button(root, text="Submit", command=myClick)
myButton.pack()


root.mainloop()
