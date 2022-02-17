//A function that will take a sentence and print it out letter by letter
const typeWriter = function (sentence) {
  //sentence = "Hello there from Lower Sackville" + "\n"

  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i])
    }, 50 * i)
  }
}

typeWriter("Hello there from Lower Sackville" + "\n")