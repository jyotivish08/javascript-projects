setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
  //   console.log(hrotation, mrotation, srotation);
}, 1000);

// 12 hr -> 360deg
// 1hr = 360/12 = 30deg
// 60min = 30deg
// 1 = 1/2deg
// m=m/2deg rotation
// for h hour = 30hdeg + m/2deg **********
// (minute ki wajah se bhi toh kuch deg ghumega, seconds ke liye negligible hoga)

// 60 min = 360deg
// 1 min = 6deg
// m minutes = 6m deg **********

// 60seconds=360deg
// 1sec=6deg
// s seconds = 6sdeg **********
