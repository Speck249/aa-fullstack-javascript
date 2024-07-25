 const targetWords = words.filter(function(item) {
    if (item.endsWith(suffix)) {
      return item;
    }
    return '[]'
  });
  return targetWords;