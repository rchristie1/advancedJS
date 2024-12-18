// /*
// '''
// ❓ PROMPT
// You open up your computer's downloads folder, looking for that cute video of Oliver barking
// at the doorbell you downloaded a few weeks ago. Of course, it's mixed in with all of the other
// silly otter videos and other stuff you just had to save. To make it easier to find, you click 
// on the column to sort the view by date to see the most recent first, at the top.

// For this problem, we're going to implement that file system sort by date. The files themselves are represented by objects:

// {
//   "filename": <string>,
//   "size": <number>,
//   "date": <string>}

// and the date itself is in US format:

// MM-DD-YYYY HH:MM:SS

// Write a function that sorts an array of these file objects, with the most recent at the top.

// Follow-up:
// - What happens if a date like 2 Feb 2021 is compared with 12 Nov 2021 and the day and 
//   month don't have leading zeros: 2-2-2021? How can the code be modified to handle this?
// - If the dates are tied down to the second, add a secondary sort by file name in descending order.

// Example(s)
// Input: sortFiles([
//   {"filename": "otter.mpeg", "size": 512, "date": "01-16-2023 14:23:13"},
//   {"filename": "oliver.mp4", "size": 1024, "date": "01-18-2023 12:46:57"},
// ])

// Output: [
//   {"filename": "oliver.mp4", "size": 1024, "date": "01-18-2023 12:46:57"},
//   {"filename": "otter.mpeg", "size": 512, "date": "01-16-2023 14:23:13"},
// ]


// 🔎 EXPLORE
// List your assumptions & discoveries:


// Insightful & revealing test cases:


// 🧠 BRAINSTORM
// What approaches could work?
// Algorithm 1:
// Time: O()
// Space: O()


// 📆 PLAN
// Outline of algorithm #: 


// 🛠️ IMPLEMENT
// function sortFiles(files) {
// def sortFiles(files: list) -> list:


// 🧪 VERIFY
// Run tests. Methodically debug & analyze issues.

// '''
// */

// function splitDateTime(date) {
//     const dt = date.split(' ')
//     const d = dt[0].split('-')// date
//     const t = dt[1].split(':')// time

//     // swap the month and date positions in the array
//     let tmp = d[0]
//     d[0] = d[1]
//     d[1] = tmp

//     // convert everything to a number. Can be done in the same loop because t and d have same length
//     for (let i = 0; i < d.length; i++) {
//         d[i] = +(d[i])
//         t[i] = +(t[i])
//     }

//     return [d, t]
// }

// function compareDateTimes(f, sortedOutput) {
//     const [newDate, newTime] = splitDateTime(f.date) // most recent item pushed in

//     // compare for the last item in the list first
//     for (let i = sortedOutput.length - 1; i > 0; i--) {
//         const [sortedDate, sortedTime] = splitDateTime(sortedOutput[i].date)

//         // compare from the back ie. year, month, date TODO: maybe revise the order
//         for (let j = sortedDate.length - 1; j >= 0; j--) {
//             console.log(newDate[j], sortedDate[j]);
//             if (newDate[j] < sortedDate[j]) {
//                 console.log('ere');

//                 [sortedOutput[i], sortedOutput[0]] = [sortedOutput[0], sortedOutput[i]]
//             }
//         }
//     }
// }

// function sortFiles(files) {
//     let sortedOutput = []

//     for (f of files) {
//         sortedOutput.push(f)

//         if (sortedOutput.length > 1) {
//             compareDateTimes(f, sortedOutput)
//         }
//     }

//     console.log(sortedOutput);

//     return sortedOutput
// }

function sortFiles(files) {
    const lexicographic = {};
    files.forEach(file => {
      const [date, time] = file.date.split(" ");
      const [m, d, y] = date.split("-");
      const formattedDate = `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
      lexicographic[file.date] = `${formattedDate} ${time}`;
    });

    console.log(lexicographic);
    console.log(files);
    
  
    return files.sort((a, b) => {
      if (lexicographic[a.date] === lexicographic[b.date])
        return a.filename > b.filename ? -1 : 1;
      else
        return lexicographic[a.date] > lexicographic[b.date] ? -1 : 1;
    });
  }

// single file
let files = [{filename: "file1.txt", size: 10, date: "03-28-2023 12:00:00"}]
let expected = files
console.log(JSON.stringify(sortFiles(files)) == JSON.stringify(expected))

files = [
  {filename: "otter.mpeg", size: 512, date: "01-16-2023 14:23:13"},
  {filename: "oliver.mp4", size: 1024, date: "01-18-2023 12:46:57"},
]
expected = [
  {filename: "oliver.mp4", size: 1024, date: "01-18-2023 12:46:57"},
  {filename: "otter.mpeg", size: 512, date: "01-16-2023 14:23:13"},
]
console.log(JSON.stringify(sortFiles(files)) == JSON.stringify(expected))

// files sorted descending
files = [
  {filename: "file1.txt", size: 10, date: "03-28-2023 12:00:00"},
  {filename: "file2.txt", size: 20, date: "03-27-2023 13:00:00"},
  {filename: "file3.txt", size: 30, date: "03-26-2023 14:00:00"},
]
expected = [
  {filename: "file1.txt", size: 10, date: "03-28-2023 12:00:00"},
  {filename: "file2.txt", size: 20, date: "03-27-2023 13:00:00"},
  {filename: "file3.txt", size: 30, date: "03-26-2023 14:00:00"},
]
console.log(JSON.stringify(sortFiles(files)) == JSON.stringify(expected))

// files sorted ascending
files = [
  {filename: "file3.txt", size: 30, date: "03-26-2023 14:00:00"},
  {filename: "file2.txt", size: 20, date: "03-27-2023 13:00:00"},
  {filename: "file1.txt", size: 10, date: "03-28-2023 12:00:00"},
]
expected = [
  {filename: "file1.txt", size: 10, date: "03-28-2023 12:00:00"},
  {filename: "file2.txt", size: 20, date: "03-27-2023 13:00:00"},
  {filename: "file3.txt", size: 30, date: "03-26-2023 14:00:00"},
]
console.log(JSON.stringify(sortFiles(files)) == JSON.stringify(expected))

// same year/month but different day
files = [
  {filename: "file2.txt", size: 20, "date": "03-27-2023 05:00:00"},
  {filename: "file6.txt", size: 10, "date": "03-28-2023 10:00:00"},
  {filename: "file4.txt", size: 30, "date": "03-22-2023 14:00:00"},
  {filename: "file3.txt", size: 30, "date": "03-26-2023 02:00:00"},
]
expected = [
  {filename: "file6.txt", size: 10, "date": "03-28-2023 10:00:00"},
  {filename: "file2.txt", size: 20, "date": "03-27-2023 05:00:00"},
  {filename: "file3.txt", size: 30, "date": "03-26-2023 02:00:00"},
  {filename: "file4.txt", size: 30, "date": "03-22-2023 14:00:00"},
]
console.log(JSON.stringify(sortFiles(files)) == JSON.stringify(expected))

// same year/day but different month
files = [
  {filename: "file2.txt", size: 20, "date": "06-15-2023 05:10:14"},
  {filename: "file6.txt", size: 10, "date": "08-15-2023 12:47:13"},
  {filename: "file4.txt", size: 30, "date": "03-15-2023 11:23:32"},
  {filename: "file3.txt", size: 30, "date": "05-15-2023 18:54:08"},
]
expected = [
  {filename: "file6.txt", size: 10, "date": "08-15-2023 12:47:13"},
  {filename: "file2.txt", size: 20, "date": "06-15-2023 05:10:14"},
  {filename: "file3.txt", size: 30, "date": "05-15-2023 18:54:08"},
  {filename: "file4.txt", size: 30, "date": "03-15-2023 11:23:32"},
]
console.log(JSON.stringify(sortFiles(files)) == JSON.stringify(expected))

// earlier year but later date
files = [
  {filename: "file6.txt", size: 10, "date": "03-28-2019 10:00:00"},
  {filename: "file3.txt", size: 30, "date": "01-16-2023 02:00:00"},
  {filename: "file1.txt", size: 30, "date": "10-05-2022 06:00:00"},
]
expected = [
  {filename: "file3.txt", size: 30, "date": "01-16-2023 02:00:00"},
  {filename: "file1.txt", size: 30, "date": "10-05-2022 06:00:00"},
  {filename: "file6.txt", size: 10, "date": "03-28-2019 10:00:00"},
]
console.log(JSON.stringify(sortFiles(files)) == JSON.stringify(expected))

// same date different times
files = [
  {filename: "file6.txt", size: 10, "date": "03-11-2020 10:59:29"},
  {filename: "file2.txt", size: 30, "date": "03-11-2020 10:23:30"},
  {filename: "file3.txt", size: 30, "date": "03-11-2020 10:59:31"},
  {filename: "file1.txt", size: 30, "date": "03-11-2020 10:46:30"},
]
expected = [
  {filename: "file3.txt", size: 30, "date": "03-11-2020 10:59:31"},
  {filename: "file6.txt", size: 10, "date": "03-11-2020 10:59:29"},
  {filename: "file1.txt", size: 30, "date": "03-11-2020 10:46:30"},
  {filename: "file2.txt", size: 30, "date": "03-11-2020 10:23:30"},
]
console.log(JSON.stringify(sortFiles(files)) == JSON.stringify(expected))

console.log("Tests for follow-ups...")

// files sorted by date but not file name
files = [
  {filename: "file3.txt", size: 30, "date": "03-27-2023 13:00:00"},
  {filename: "file4.txt", size: 40, "date": "03-27-2023 13:00:00"},
  {filename: "file5.txt", size: 50, "date": "03-27-2023 13:00:00"},
  {filename: "file1.txt", size: 10, "date": "03-27-2023 13:00:00"},
  {filename: "file2.txt", size: 20, "date": "03-27-2023 13:00:00"},
]
expected = [
  {filename: "file5.txt", size: 50, "date": "03-27-2023 13:00:00"},
  {filename: "file4.txt", size: 40, "date": "03-27-2023 13:00:00"},
  {filename: "file3.txt", size: 30, "date": "03-27-2023 13:00:00"},
  {filename: "file2.txt", size: 20, "date": "03-27-2023 13:00:00"},
  {filename: "file1.txt", size: 10, "date": "03-27-2023 13:00:00"},
]
console.log(JSON.stringify(sortFiles(files)) == JSON.stringify(expected))

// some files with 1 digit dates
files = [
  {filename: "file2.txt", size: 20, "date": "3-27-2023 05:00:00"},
  {filename: "file6.txt", size: 10, "date": "12-28-2023 10:00:00"},
  {filename: "file4.txt", size: 30, "date": "5-2-2023 14:00:00"},
  {filename: "file3.txt", size: 30, "date": "2-26-2023 02:00:00"},
]
expected = [
  {filename: "file6.txt", size: 10, "date": "12-28-2023 10:00:00"},
  {filename: "file4.txt", size: 30, "date": "5-2-2023 14:00:00"},
  {filename: "file2.txt", size: 20, "date": "3-27-2023 05:00:00"},
  {filename: "file3.txt", size: 30, "date": "2-26-2023 02:00:00"},
]
console.log(JSON.stringify(sortFiles(files)) == JSON.stringify(expected))