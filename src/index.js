module.exports = function check(str, bracketsConfig) {
  const arr = str.split("");

  const res = [];
  for (let i = 0; i < arr.length; i = i + 1) {
    if (res.length === 0) {
      res.push(arr[i]);
    } else {
      let br = false;
      bracketsConfig.map((itemArr) => {
        if (itemArr[0] === res[res.length - 1] && itemArr[1] === arr[i]) {
          res.pop();
          br = true;
        }
      });
      if (br === false) {
        res.push(arr[i]);
      }
    }
  }

  return res.length === 0 ? true : false;
};
