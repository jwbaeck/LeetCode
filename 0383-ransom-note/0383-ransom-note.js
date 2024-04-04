function canConstruct(ransomNote, magazine) {
  const ransomNoteRecords = {};
  const magazineRecords = {};
  let result = false;
  
  for (const element of ransomNote) {
    if (!ransomNoteRecords[element]) {
      ransomNoteRecords[element] = 1;
    } else {
      ransomNoteRecords[element] += 1;
    }
  }
  
  for (const element of magazine) {
    if (!magazineRecords[element]) {
      magazineRecords[element] = 1;
    } else {
      magazineRecords[element] += 1;
    }
  }
  
  for (const element of magazine) {
    if (ransomNoteRecords[element]) {
      if (magazineRecords[element] >= ransomNoteRecords[element]) {
        result = true;
      } else {
        return false
      }
    }
  }
  
  for (const element of ransomNote) {
    if (!magazineRecords[element]) {
      result = false;
    }
  }
  
  return result;
}