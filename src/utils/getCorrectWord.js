//change word by count
export const getCorrectWord = (count, arr) => {
    if(!count || !arr.length)
        return ""
    let letter = count.toString()
    let lastTwoLetter = letter.length > 1 && letter.slice(letter.length - 2)
    let lastLetter = lastTwoLetter && Number(lastTwoLetter[lastTwoLetter.length - 1])
    lastTwoLetter = lastTwoLetter && Number(lastTwoLetter)
    let correctWord = arr[2]
    if ((count === 1 || lastLetter === 1) && count !== 11) {
        correctWord = arr[0]
    } else if ((count > 1 && count < 5) || (lastTwoLetter > 20 && lastLetter >= 0 && lastLetter > 1 && lastLetter < 5)) {
        correctWord = arr[1]
    }
    return correctWord
}