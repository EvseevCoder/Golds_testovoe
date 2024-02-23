function md5(string) {
  function add32(a, b) {
    var lsw = (a & 0xffff) + (b & 0xffff),
      msw = (a >> 16) + (b >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xffff);
  }
  function cmn(q, a, b, x, s, t) {
    a = add32(add32(a, q), add32(x, t));
    return add32((a << s) | (a >>> (32 - s)), b);
  }

  function ff(a, b, c, d, x, s, t) {
    return cmn((b & c) | (~b & d), a, b, x, s, t);
  }

  function gg(a, b, c, d, x, s, t) {
    return cmn((b & d) | (c & ~d), a, b, x, s, t);
  }

  function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
  }

  function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | ~d), a, b, x, s, t);
  }

  function md5cycle(x, k) {
    let a = x[0],
      b = x[1],
      c = x[2],
      d = x[3];

    a = ff(a, b, c, d, k[0], 7, -680876936);
    d = ff(d, a, b, c, k[1], 12, -389564586);
    c = ff(c, d, a, b, k[2], 17, 606105819);
    b = ff(b, c, d, a, k[3], 22, -1044525330);
    a = ff(a, b, c, d, k[4], 7, -176418897);
    d = ff(d, a, b, c, k[5], 12, 1200080426);
    c = ff(c, d, a, b, k[6], 17, -1473231341);
    b = ff(b, c, d, a, k[7], 22, -45705983);
    a = ff(a, b, c, d, k[8], 7, 1770035416);
    d = ff(d, a, b, c, k[9], 12, -1958414417);
    c = ff(c, d, a, b, k[10], 17, -42063);
    b = ff(b, c, d, a, k[11], 22, -1990404162);
    a = ff(a, b, c, d, k[12], 7, 1804603682);
    d = ff(d, a, b, c, k[13], 12, -40341101);
    c = ff(c, d, a, b, k[14], 17, -1502002290);
    b = ff(b, c, d, a, k[15], 22, 1236535329);

    a = gg(a, b, c, d, k[1], 5, -165796510);
    d = gg(d, a, b, c, k[6], 9, -1069501632);
    c = gg(c, d, a, b, k[11], 14, 643717713);
    b = gg(b, c, d, a, k[0], 20, -373897302);
    a = gg(a, b, c, d, k[5], 5, -701558691);
    d = gg(d, a, b, c, k[10], 9, 38016083);
    c = gg(c, d, a, b, k[15], 14, -660478335);
    b = gg(b, c, d, a, k[4], 20, -405537848);
    a = gg(a, b, c, d, k[9], 5, 568446438);
    d = gg(d, a, b, c, k[14], 9, -1019803690);
    c = gg(c, d, a, b, k[3], 14, -187363961);
    b = gg(b, c, d, a, k[8], 20, 1163531501);
    a = gg(a, b, c, d, k[13], 5, -1444681467);
    d = gg(d, a, b, c, k[2], 9, -51403784);
    c = gg(c, d, a, b, k[7], 14, 1735328473);
    b = gg(b, c, d, a, k[12], 20, -1926607734);

    a = hh(a, b, c, d, k[5], 4, -378558);
    d = hh(d, a, b, c, k[8], 11, -2022574463);
    c = hh(c, d, a, b, k[11], 16, 1839030562);
    b = hh(b, c, d, a, k[14], 23, -35309556);
    a = hh(a, b, c, d, k[1], 4, -1530992060);
    d = hh(d, a, b, c, k[4], 11, 1272893353);
    c = hh(c, d, a, b, k[7], 16, -155497632);
    b = hh(b, c, d, a, k[10], 23, -1094730640);
    a = hh(a, b, c, d, k[13], 4, 681279174);
    d = hh(d, a, b, c, k[0], 11, -358537222);
    c = hh(c, d, a, b, k[3], 16, -722521979);
    b = hh(b, c, d, a, k[6], 23, 76029189);
    a = hh(a, b, c, d, k[9], 4, -640364487);
    d = hh(d, a, b, c, k[12], 11, -421815835);
    c = hh(c, d, a, b, k[15], 16, 530742520);
    b = hh(b, c, d, a, k[2], 23, -995338651);

    a = ii(a, b, c, d, k[0], 6, -198630844);
    d = ii(d, a, b, c, k[7], 10, 1126891415);
    c = ii(c, d, a, b, k[14], 15, -1416354905);
    b = ii(b, c, d, a, k[5], 21, -57434055);
    a = ii(a, b, c, d, k[12], 6, 1700485571);
    d = ii(d, a, b, c, k[3], 10, -1894986606);
    c = ii(c, d, a, b, k[10], 15, -1051523);
    b = ii(b, c, d, a, k[1], 21, -2054922799);
    a = ii(a, b, c, d, k[8], 6, 1873313359);
    d = ii(d, a, b, c, k[15], 10, -30611744);
    c = ii(c, d, a, b, k[6], 15, -1560198380);
    b = ii(b, c, d, a, k[13], 21, 1309151649);
    a = ii(a, b, c, d, k[4], 6, -145523070);
    d = ii(d, a, b, c, k[11], 10, -1120210379);
    c = ii(c, d, a, b, k[2], 15, 718787259);
    b = ii(b, c, d, a, k[9], 21, -343485551);

    x[0] = add32(a, x[0]);
    x[1] = add32(b, x[1]);
    x[2] = add32(c, x[2]);
    x[3] = add32(d, x[3]);
  }

  function md5blk(s) {
    var md5blks = [],
      i;
    for (i = 0; i < 64; i += 4) {
      md5blks[i >> 2] =
        s.charCodeAt(i) +
        (s.charCodeAt(i + 1) << 8) +
        (s.charCodeAt(i + 2) << 16) +
        (s.charCodeAt(i + 3) << 24);
    }
    return md5blks;
  }

  function md5blk_array(a) {
    var md5blks = [],
      i;
    for (i = 0; i < 64; i += 4) {
      md5blks[i >> 2] =
        a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
    }
    return md5blks;
  }

  function md51(s) {
    var n = s.length,
      state = [1732584193, -271733879, -1732584194, 271733878],
      i;
    for (i = 64; i <= s.length; i += 64) {
      md5cycle(state, md5blk(s.substring(i - 64, i)));
    }
    s = s.substring(i - 64);
    var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < s.length; i++)
      tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
    tail[i >> 2] |= 0x80 << (i % 4 << 3);
    if (i > 55) {
      md5cycle(state, tail);
      for (i = 0; i < 16; i++) tail[i] = 0;
    }
    tail[14] = n * 8;
    md5cycle(state, tail);
    return state;
  }

  function md51_array(a) {
    var n = a.length,
      state = [1732584193, -271733879, -1732584194, 271733878],
      i;
    for (i = 64; i <= a.length; i += 64) {
      md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
    }
    a = i - 64 < a.length ? a.subarray(i - 64) : new Uint8Array(0);
    var tail = new Uint8Array(64);
    tail.set(a);
    tail[a.length] = 0x80;
    if (a.length > 55) {
      md5cycle(state, tail);
      tail = new Uint8Array(64);
    }
    tail[56] = n * 8;
    md5cycle(state, tail);
    return state;
  }

  function rhex(n) {
    var s = "",
      j;
    for (j = 0; j < 4; j++)
      s += hex_chr[(n >> (j * 8 + 4)) & 0x0f] + hex_chr[(n >> (j * 8)) & 0x0f];
    return s;
  }

  function hex(x) {
    for (var i = 0; i < x.length; i++) x[i] = rhex(x[i]);
    return x.join("");
  }

  md5blks = [];
  var hex_chr = "0123456789abcdef".split("");

  if (string.length > 0) {
    for (var i = 0; i < string.length; i += 64) {
      md5blks = md5blks.concat(
        md5blk(string.substring(i, Math.min(i + 64, string.length)))
      );
    }
    md5blks[md5blks.length >> 2] |= 0x80 << ((md5blks.length % 4) * 8);
    var l = md5blks.length * 32;
    md5blks.push(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l);
  }

  var state = md51(string);

  return hex(state);
}

const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
const password = "Valantis";
const xAuthValue = md5(password + "_" + date);

document.addEventListener("DOMContentLoaded", () => {
  let filters = document.querySelectorAll(".filter .button");
  let input = document.querySelector(".input");
  let table = document.querySelector(".table");
  let next = document.querySelector(".next");
  let prev = document.querySelector(".prev");

  let nowPage = 0;
  let nowPageVerst = document.querySelector(".nowPage");

  next.onclick = () => {
    nowPage += 1;
    console.log(nowPage);
    nowPageVerst.textContent = nowPage + 1;
    Zapros(nowPage);
  };

  prev.onclick = () => {
    if (nowPage != 0) {
      nowPage -= 1;
      console.log(nowPage);
      nowPageVerst.textContent = nowPage + 1;
      Zapros(nowPage);
    }
  };

  // Переменные для фильтра
  let actFilter = "Не фильтровать";
  let fieldFilter = document.querySelector(".input");
  let filterButton = document.querySelector(".filter-button");

  // Настройка параметров фильтрации
  filterButton.addEventListener("click", () => {
    console.log(fieldFilter.value);
    console.log(`Фильтрация по ${actFilter} - ${fieldFilter.value}`);

    Zapros(nowPage);
  });

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      //Сброс стиля и назначение active

      filters.forEach((item) => {
        item.classList.remove("button__active");
      });

      button.classList += " button__active";
      if (button.textContent == "Не фильтровать") {
        input.style.display = "none";
      } else {
        input.style.display = "block";
      }
      actFilter = button.textContent;

      if (actFilter == "Не фильтровать") {
        Zapros(nowPage);
      }

      fieldFilter.value = "";
    });
  });

  // Работа с Api
  function Zapros(page, retryCount = 0) {
    table.innerHTML = "...загрузка";

    const maxRetries = 3; // Максимальное количество попыток повтора
    const url = "https://api.valantis.store:40000/";

    let requestData = null;

    if (actFilter == "Не фильтровать") {
      requestData = {
        action: "get_ids",
        params: {
          offset: 0 + 50 * page,
          limit: 50,
        },
      };
    } else if (actFilter == "Названию") {
      requestData = {
        action: "filter",
        params: { product: fieldFilter.value },
      };
    } else if (actFilter == "Цена") {
      requestData = {
        action: "filter",
        params: { price: Number(fieldFilter.value) },
      };
    } else if (actFilter == "Бренду") {
      requestData = {
        action: "filter",
        params: { brand: fieldFilter.value },
      };
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth": xAuthValue,
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Ошибка сервера");
        return response.json();
      })
      .then((data) => {
        console.log(data);

        const requestItems = {
          action: "get_items",
          params: {
            ids: data.result,
          },
        };

        return fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Auth": xAuthValue,
          },
          body: JSON.stringify(requestItems),
        });
      })
      .then((response) => {
        if (!response.ok) throw new Error("Ошибка сервера");
        return response.json();
      })
      .then((data) => {
        // Удаление дублей
        function replaceDubles(list) {
          let newList = [];
          let ids = [];

          for (let item of list) {
            if (ids.indexOf(item.id) == -1) {
              ids.push(item.id);
              newList.push(item);
            }
          }

          return newList;
        }

        items = replaceDubles(data.result);

        table.innerHTML = "";
        items.forEach((item) => {
          table.innerHTML += `
          <div class="table_item">
            <p class="id">${item.id}</p>
            <div class="names">
              <p class="name">${item.product}</p>
              <p class="brand">${item.brand}</p>
            </div>
            <p class="price">${item.price}</p>
          </div>
        `;
        });
      })
      .catch((error) => {
        console.error("Возникла ошибка:", error.message);
        if (retryCount < maxRetries) {
          console.log(`Попытка ${retryCount + 1} из ${maxRetries}`);
          Zapros(page, retryCount + 1);
        } else {
          console.log("Превышено максимальное количество попыток запроса");
        }
      });
  }

  Zapros(nowPage);
});
