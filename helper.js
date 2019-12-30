removeEscapedComma = (line) => {
  const indexFirstQuote = line.indexOf('"')
  const quoteToEnd = line.slice(indexFirstQuote + 1)
  const indexSecondQuote = quoteToEnd.indexOf('"')
  let escapedComma = quoteToEnd.slice(0, indexSecondQuote)
  escapedComma = escapedComma.replace(/,/g, '').replace(/"/g, '')
  return line.substring(0, indexFirstQuote) + escapedComma + line.substring(indexFirstQuote + indexSecondQuote + 2, line.length)
};

exports.removeAllEscapedCommas = (line) => {
  for (let index = 0; index < 10; index++) {
    if (line.includes('"')) {
      line = removeEscapedComma(line)
    }
    else {
      return line
    }

  }
}