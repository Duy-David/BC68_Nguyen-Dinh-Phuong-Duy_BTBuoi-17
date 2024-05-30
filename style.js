const arrSoNguyen = [];

document.getElementById("btNhapSo").onsubmit = function themso(event) {
  event.preventDefault();
  let nhapSo = document.getElementById("nhapSo").value.trim() * 1;

  if (nhapSo == "") {
    alert("Vui lòng nhập số hợp lệ");
    return;
  } //if (!isNaN(nhapSo)) {
  else if (Math.floor(nhapSo) == nhapSo || nhapSo == 0) {
    arrSoNguyen.push(nhapSo);

    document.getElementById("nhapSo").value = ""; //xoa o input;
    displayhtml();

    // Bài 1:Tính tổng các số nguyên dương
    tinhTongSoNguyenDuong();
    console.log(arrSoNguyen);
    // bài 2:ĐẾm số nguyên dương
    demSoNguyenDuong();
    // Bài 3:Tìm số nhỏ nhất trong mảng
    soNhoNhatTrongMang();
    // Bài 4:Tìm số dương nhỏ nhất trong mảng
    soDuongNhoNhatTrongMang();
    // Bài 5: Tìm số chẳn cuối cùng trong mảng. Nếu mảng không có số chẳn kết quả trả về -1
    soChanTrongMang();
    // Bài 6: Đổi chổ 2 giá trị trong mảng theo vị trí
    swapElements();
    // Bài 7: Sắp xếp mảng theo thứ tự tăng dần
    mangTheoThuTuTangDan();
    //Bài 8: Tìm nguyên tố đầu tiên trong mảng. Nếu mảng không có số  nguyên tố kết quả trả về -1
    songuyentoTrongMang();
    //Bài 9: Nhập một mãng số thực, tìm xem trong mãng có bao nhiêu số nguyên
    //Bài 10: So sánh số lượng số âm và số lượng số dương số nào nhiều hơn
    compare();
  } else {
    alert("Vui lòng nhập số nguyên");
  }
  // } else if (isNaN(nhapSo)) {
  //   alert("Vui lòng nhập số hợp lệ");
  //   return;
  //  }
};
function resetArr() {
  // arrSoNguyen=[]
  arrSoNguyen.length = 0;
  document.getElementById("allSoNguyen").innerHTML = "";
  document.getElementById("result-b1").innerHTML = "";
  document.getElementById("result-b2").innerHTML = "";
  document.getElementById("result-b3").innerHTML = "";
  document.getElementById("result-b4").innerHTML = "";
  document.getElementById("result-b5").innerHTML = "";
  document.getElementById("result-b6").innerHTML = "";
  document.getElementById("result-b7").innerHTML = "";
  document.getElementById("result-b8").innerHTML = "";
  document.getElementById("result-b9").innerHTML = "";
  document.getElementById("result-b10").innerHTML = "";
}

function displayhtml() {
  let num = document.getElementById("allSoNguyen");

  num.innerHTML = `${arrSoNguyen.join(", ")}`;
  //   if (arrSoNguyen.length > 0) {
  //     arrSoNguyen.forEach((item, index) => {
  //       const div = document.createElement("div");
  //       if (index < arrSoNguyen.length - 1) {
  //         div.textContent = item + ",  ";
  //       } else {
  //         div.textContent = item;
  //       }
  //       div.className = "d-inline";
  //       num.appendChild(div);
  //     });
  //   } else {
  //     num.innerHTML = "Mảng trống";
  //   }
}

// tính tổng số nguyên dương
function tinhTongSoNguyenDuong() {
  let  sum = 0
  for (let number of arrSoNguyen) {
    if (number>0) {
    sum +=number      
    }    
  }
  const sumoutput = document.getElementById("result-b1");
  sumoutput.innerHTML = `Tổng các số nguyên dương là: ${sum}`;
}

// Đếm có bao nhiêu số dương trong mảng
function demSoNguyenDuong() {
 let count = 0 
  for (let number of arrSoNguyen) {
    if (number>0) {
    count+=1      
    }    
  }
  const countoutput = document.getElementById("result-b2");
  countoutput.innerHTML = `Các số nguyên dương trong mảng là: ${count}`;
}

//Tìm số nhỏ nhất trong mảng
function soNhoNhatTrongMang() {
  //   const min = Math.min(...arrSoNguyen);
  let min = arrSoNguyen[0];
  for (let index = 1; index < arrSoNguyen.length; index++) {
    if (arrSoNguyen[index] * 1 < min) {
      min = arrSoNguyen[index];
    }
  }
  //   console.log(min);
  const minoutput = document.getElementById("result-b3");
  minoutput.innerHTML = `Số nhỏ nhất trong mảng là: ${min}`;
}

//Tìm số nhỏ dương nhất trong mảng
function soDuongNhoNhatTrongMang() {
  const arrSoNguyenDuong = arrSoNguyen.filter((value) => {
    return value > 0;
  });
  //   const min = Math.min(...arrSoNguyenDuong);
  let minPositive = arrSoNguyenDuong[0];
  for (let index = 1; index < arrSoNguyenDuong.length; index++) {
    if (arrSoNguyenDuong[index] * 1 < minPositive) {
      minPositive = arrSoNguyenDuong[index];
    }
  }
  //   console.log(minPositive);
  const minPositiveoutput = document.getElementById("result-b4");
  minPositiveoutput.innerHTML = `Số dương nhỏ nhất trong mảng là: ${minPositive}`;
}
//Tìm số chẳn cuối cùng trong mảng. Nếu mảng không có số chẳn kết quả trả về -1
function soChanTrongMang() {
  const arrSoNguyenChan = arrSoNguyen.filter((value) => {
    return value % 2 == 0;
  });

  let evenNum = 0;
  if (arrSoNguyenChan.length == 0) {
    evenNum = -1;
  }
  for (let index = 0; index < arrSoNguyenChan.length; index++) {
    evenNum = arrSoNguyenChan[arrSoNguyenChan.length - 1] * 1;
  }
  //   console.log(evenNum);
  const evenNumOutput = document.getElementById("result-b5");
  evenNumOutput.innerHTML = `Số dương chẳn cuối cùng trong mảng là: ${evenNum}`;
}
// Đổi chổ 2 giá trị trong mảng theo vị trí
function swapElements() {
  const index1 = document.getElementById("bt6-VT1").value * 1;
  const index2 = document.getElementById("bt6-VT2").value * 1;

  if (
    index1 >= 0 &&
    index1 < arrSoNguyen.length &&
    index2 >= 0 &&
    index2 < arrSoNguyen.length
  ) {
    let temp = arrSoNguyen[index1];
    arrSoNguyen[index1] = arrSoNguyen[index2];
    arrSoNguyen[index2] = temp;
    const thayDoiVitriOutput = document.getElementById("result-b6");

    thayDoiVitriOutput.innerHTML = ` Mảng mới: [${arrSoNguyen.join(", ")}]`;
    return thayDoiVitriOutput;
  } else {
    alert("Vui lòng nhập giá trị hợp lý vào vị trí");
  }
}

//  Sắp xếp mảng theo thứ tự tăng dần
function mangTheoThuTuTangDan() {
  const ascend = arrSoNguyen
    .map((value) => (isNaN(value) ? value : parseFloat(value)))
    .sort((a, b) => (a > b ? 1 : -1));
  const ascendoutput = document.getElementById("result-b7");
  ascendoutput.innerHTML = `Mảng theo thứ tự tăng dần: [${ascend}]`;
}
//Tìm nguyên tố đầu tiên trong mảng. Nếu mảng không có số  nguyên tố kết quả trả về -1
function songuyentoTrongMang() {
  let isPrime = [];
  for (let index = 0; index < arrSoNguyen.length; index++) {
    if (isPrime1(arrSoNguyen[index]) == 1) {
      isPrime.push(arrSoNguyen[index]);
    }
  }
  let isPrimeNum = 0;
  if (isPrime.length == 0) {
    isPrimeNum = -1;
  } else {
    for (let z = 0; z < isPrime.length; z++) {
      isPrimeNum = isPrime[0] * 1;
    }
  }
  console.log(isPrime);
  if (isPrime == []) {
    document.getElementById(
      "allSoNguyenTo"
    ).innerHTML = `Không có số nguyên tố trong mảng`;
  } else {
    document.getElementById(
      "allSoNguyenTo"
    ).innerHTML = `Tất cả số nguyên tố trong mảng: ${isPrime.join(", ")}`;
  }
  const isPrimeNumOutput = document.getElementById("result-b8");
  isPrimeNumOutput.innerHTML = `Số nguyên tố đầu tiên trong mảng là: ${isPrimeNum}`;
}

function isPrime1(n) {
  let flag = 1;
  if (n < 2) {
    return (flag = 0);
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      flag = 0;
      break;
    }
  }
  return flag;
}

//Nhập một mãng số thực, tìm xem trong mãng có bao nhiêu số nguyên
const arrSoThuc = [];
document.getElementById("btsothuc").onsubmit = (event) => {
  event.preventDefault();
  soThuc = document.getElementById("nhapSoThuc").value;
  if (!isNaN(soThuc)) {
    if (soThuc != "") {
      arrSoThuc.push(soThuc);
      console.log(arrSoThuc);

      document.getElementById("nhapSoThuc").value = ""; //xoa o input;
      const mangSoThuc = document.getElementById("mangSoThuc");
      mangSoThuc.innerHTML = arrSoThuc.join(", ");
    } else {
      alert("vui lòng nhập số");
    }

    // filterSoNguyen();
  }
};

function filterSoNguyen() {
  const arrSoNguyenMoi = [];
  let countSoNguyen = 0;

  for (let y = 0; y < arrSoThuc.length; y++) {
    if (arrSoThuc[y] * 1 == Math.floor(arrSoThuc[y]) * 1) {
      arrSoNguyenMoi.push(arrSoThuc[y]);
      countSoNguyen++;
      // break;
    }
  }

  console.log(arrSoThuc);
  console.log(arrSoNguyenMoi);
  console.log(countSoNguyen);
  const soNguyenOutput = document.getElementById("result-b9");
  soNguyenOutput.innerHTML = `Trong mảng[${arrSoThuc}] có ${countSoNguyen} số nguyên bao gồm ${arrSoNguyenMoi.join(
    ", "
  )}`;
}

//So sánh số lượng số âm và số lượng số dương số nào nhiều hơn
function compare() {
  const soAm = [];
  const soDuong = [];
  let countSoAM = 0;
  let countSoDuong = 0;
  for (let index = 0; index < arrSoNguyen.length; index++) {
    if (arrSoNguyen[index] >= 0) {
      soDuong.push(arrSoNguyen[index]);
      countSoDuong++;
    } else {
      soAm.push(arrSoNguyen[index]);
      countSoAM++;
    }
  }
  document.getElementById("soAm").innerHTML = soAm.join(", ");
  document.getElementById("soDuong").innerHTML = soDuong.join(", ");
  const compareOutput = document.getElementById("result-b10");
  if (countSoAM > countSoDuong) {
    compareOutput.innerHTML = `Số lượng số âm(${countSoAM}) lớn hơn số lượng số dương(${countSoDuong})`;
  } else if (countSoAM < countSoDuong) {
    compareOutput.innerHTML = `Số lượng số âm(${countSoAM}) nhỏ hơn số lượng số dương(${countSoDuong})`;
  } else {
    compareOutput.innerHTML = `Số lượng số âm(${countSoAM}) bằng số lượng số dương(${countSoDuong})`;
  }
}
