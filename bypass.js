// ==UserScript==
// @name         Bypass Yeumoney V2m - Offline Key Fixed
// @namespace    http://tampermonkey.net/
// @version      2.2
// @description  Bypass Yeumoney with offline key
// @author       duongthekhoa
// @match        https://yeumoney.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_notification
// @run-at       document-end
// ==/UserScript==

(function () {
  "use strict";

  console.log("Script bắt đầu tải...");

  // Hàm tạo key offline dựa trên ngày hiện tại
  function generateOfflineKey() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const offlineKey = `keyfor${day}${month}${year}`;
    console.log("Key offline được tạo:", offlineKey);
    return offlineKey;
  }

  // Kiểm tra key
  function checkKey(userKey) {
    const validKey = generateOfflineKey();
    console.log("So sánh key:", `"${userKey}" vs "${validKey}"`);
    return userKey === validKey;
  }

  // Cập nhật key
  function updateKey(newKey) {
    const validKey = generateOfflineKey();
    console.log("Kiểm tra key mới:", `"${newKey}" vs "${validKey}"`);
    if (newKey !== validKey) {
      console.log("Key không hợp lệ");
      return false;
    }
    GM_setValue("userKey", newKey);
    console.log("Key đã lưu:", newKey);
    return true;
  }

  // Hàm chính
  (async () => {
    console.log("=== Bắt đầu chạy script ===");

    const _0x1b8b03 = "https://traffic-user.net/GET_VUATRAFFIC.php",
      _0x5409d4 = "https://traffic-user.net/GET_MA.php",
      _0x342b9f = "https://www.google.com/",
      _0x34c038 =
        "https://api.ocr.space/parse/imageurl?apikey=K81664733488957&isOverlayRequired=true&OCREngine=2";

    function _0x6749c7() {
      console.log("Đổi nhiệm vụ...");
      const btn = document.querySelector("#btn-baoloi");
      if (!btn) {
        console.log("Không tìm thấy nút báo lỗi");
        return;
      }
      btn.click();
      setTimeout(() => {
        const link = document.querySelector(
          "#lydo_doima > center > a:nth-child(2)"
        );
        if (link) link.click();
        setTimeout(() => {
          const radio = document.querySelector(
            "#lydo_doima > label:nth-child(8) > input[type=radio]"
          );
          if (radio) radio.click();
          setTimeout(() => {
            const confirm = document.querySelector("#dongy_doima > a");
            if (confirm) confirm.click();
          }, 500);
        }, 500);
      }, 500);
    }

    function _0x2873d5() {
      return new Promise((resolve, reject) => {
        console.log("Nhận diện URL...");
        const site =
          document.querySelector("p#TK1")?.textContent.trim().toLowerCase() ||
          "";
        const img =
          document.querySelector("img#halt_nv") ||
          document.querySelector("img#hinh_nv");
        const imgSrc = img ? img.src : null;
        if (!imgSrc || imgSrc.includes("placehold.co")) {
          console.log("Hình ảnh chưa sẵn sàng, thử lại...");
          setTimeout(() => _0x2873d5().then(resolve).catch(reject), 100);
          return;
        }
        const url = _0x34c038 + "&url=" + imgSrc;
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = () => {
          if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const lines = data.ParsedResults[0].TextOverlay.Lines.filter(
              (line) =>
                line.LineText.match(/\b[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+\b/) &&
                line.Words.some((word) => word.Top < 170)
            ).map((line) => line.LineText);
            let finalUrl = "";
            if (site === "188bet")
              finalUrl = "https://165.22.63.250/" + lines + "/";
            else if (site === "w88") finalUrl = "https://188.166.185.213/";
            else if (site === "bk8")
              finalUrl = "https://188.166.189.40/" + lines + "/";
            else if (site === "fb88")
              finalUrl = "https://fb88xn.com/" + lines + "/";
            else if (site === "m88") finalUrl = "https://bet88" + lines + "/";
            else if (site === "vn88")
              finalUrl = "https://vn88ce.com/" + lines + "/";
            else if (site === "v9bet")
              finalUrl = "https://188.166.224.89/" + lines + "/";
            else finalUrl = "Chưa nhận diện được URL!";
            console.log("URL nhận diện:", finalUrl);
            resolve(finalUrl);
          } else {
            reject("Lỗi tải dữ liệu: " + xhr.status);
          }
        };
        xhr.onerror = () => reject("Lỗi mạng");
        xhr.send();
      });
    }

    function _0x2ede3d() {
      const time = Date.now();
      return `${time},${_0x342b9f},,IOS900,hidden,null`;
    }

    function _0x2fa783(clk) {
      return new Promise((resolve, reject) => {
        const data = _0x2ede3d();
        const url = `${_0x1b8b03}?data=${data}&clk=${clk}`;
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.onload = () => {
          if (xhr.status === 200) {
            const match = xhr.responseText.match(
              /localStorage\.codexn\s*=\s*'([^']+)'/
            );
            if (match) {
              localStorage.codexn = match[1];
              resolve(match[1]);
            } else {
              reject("Không lấy được mã codexn");
            }
          } else {
            reject("Lỗi: " + xhr.status);
          }
        };
        xhr.onerror = () => reject("Lỗi mạng");
        xhr.send();
      });
    }

    function _0x1b4021(codexn, url, traffic, clk) {
      return new Promise((resolve, reject) => {
        const reqUrl = `${_0x5409d4}?codexn=${codexn}&url=${url}&loai_traffic=${traffic}&clk=${clk}`;
        const xhr = new XMLHttpRequest();
        xhr.open("POST", reqUrl, true);
        xhr.onload = () => {
          if (xhr.status === 200) {
            const match = xhr.responseText.match(
              /sessionStorage\.setItem\("ymnclk", (\d+)\)/
            );
            if (match) {
              sessionStorage.setItem("ymnclk", match[1]);
              resolve(match[1]);
            } else {
              const doc = new DOMParser().parseFromString(
                xhr.responseText,
                "text/html"
              );
              const code = doc.querySelector("span#layma_me_vuatraffic");
              if (code) resolve(code.textContent.trim());
              else reject("URL lỗi");
            }
          } else {
            reject("Lỗi: " + xhr.status);
          }
        };
        xhr.onerror = () => reject("Lỗi mạng");
        xhr.send();
      });
    }

    function _0x313435(code) {
      const action =
        document.querySelector("#gt-form")?.getAttribute("action") || "";
      const url = "https://yeumoney.com" + action;
      const form = new FormData();
      form.append("code", code);
      form.append("keyword", "");
      form.append(
        "dieuhanh",
        document.querySelector('input[name="dieuhanh"]')?.value || ""
      );
      form.append(
        "pix",
        document.querySelector('input[name="pix"]')?.value || ""
      );
      form.append(
        "lvp",
        document.querySelector('input[name="lvp"]')?.value || ""
      );
      form.append("ref", "$ref");
      form.append(
        "trinhduyet",
        document.getElementById("trinhduyet")?.value || ""
      );
      form.append(
        "id_traffic",
        document.getElementById("id_donhang")?.value || ""
      );
      form.append("check_index", "1");
      const data = new URLSearchParams(form).toString();
      GM_xmlhttpRequest({
        method: "POST",
        url: url,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": navigator.userAgent,
          Referer: "https://yeumoney.com/",
          Cookie: document.cookie,
        },
        data: data,
        onload: (res) => (window.location.href = res.finalUrl),
        onerror: (err) =>
          (window.location.href = err.error.match(/https?:\/\/[^\s"]+/)),
      });
    }

    async function _0x20c4d5(url) {
      try {
        const code1 = await _0x2fa783(null);
        const cleanUrl = url.replace(/\/$/, "");
        const clk1 = await _0x1b4021(code1, cleanUrl, _0x342b9f, null);
        const code2 = await _0x2fa783(clk1);
        const adminUrl = cleanUrl + "admin";
        const clk2 = await _0x1b4021(code2, adminUrl, cleanUrl, clk1);
        return clk2;
      } catch (err) {
        console.error("Lỗi bypass:", err);
        return null;
      }
    }

    function _0x3d4ed8(detectedUrl) {
      console.log("Tạo giao diện với URL:", detectedUrl);
      const panel = document.createElement("div");
      panel.style.cssText = `
          position: fixed; top: 10px; right: 10px; background: #f9f9f9;
          border: 1px solid #ccc; padding: 10px; z-index: 9999; width: 350px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-radius: 10px;
        `;

      const title = document.createElement("h4");
      title.textContent = "Script By Duongthekhoa";
      title.style.cssText = `
          margin: 0; margin-bottom: 10px; font-size: 10px; font-style: italic; text-align: center;
          background: linear-gradient(90deg, red, orange, brown, green, blue, indigo, violet, indigo, blue, green, brown, orange, red);
          background-size: 200% auto; color: transparent; background-clip: text; -webkit-background-clip: text;
          animation: rainbowMove 5s linear infinite;
        `;
      panel.appendChild(title);

      const style = document.createElement("style");
      style.textContent =
        "@keyframes rainbowMove { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }";
      document.head.appendChild(style);

      const keyLabel = document.createElement("h3");
      keyLabel.textContent = "Nhập Key:";
      keyLabel.style.cssText =
        "margin: 0; font-weight: bold; margin-bottom: 5px; font-size: 16px; color: darkblue;";
      panel.appendChild(keyLabel);

      const keyInput = document.createElement("input");
      keyInput.type = "text";
      keyInput.placeholder = "Nhập key (keyforDDMMYYYY)";
      keyInput.value = GM_getValue("userKey", "");
      keyInput.style.cssText =
        "width: 100%; margin-bottom: 10px; padding: 8px; font-size: 14px;";
      panel.appendChild(keyInput);

      const keyStatus = document.createElement("h4");
      keyStatus.style.cssText =
        "margin: 0; margin-bottom: 10px; font-size: 13px;";
      const storedKey = GM_getValue("userKey", "");
      keyStatus.textContent = storedKey
        ? "Đang kiểm tra key..."
        : "Key chưa nhập";
      keyStatus.style.color = "gray";
      panel.appendChild(keyStatus);

      const urlLabel = document.createElement("h3");
      urlLabel.textContent = "Nhập URL nhiệm vụ:";
      urlLabel.style.cssText =
        "margin: 0; font-weight: bold; margin-bottom: 10px; font-size: 16px; color: darkred;";
      panel.appendChild(urlLabel);

      const urlInput = document.createElement("input");
      urlInput.placeholder = "Nếu để trống sẽ dùng URL nhận diện!";
      urlInput.style.cssText =
        "width: 100%; margin-bottom: 10px; padding: 8px; font-size: 14px;";
      panel.appendChild(urlInput);

      const detected = document.createElement("h4");
      detected.textContent = "URL nhận diện (OCR): " + detectedUrl;
      detected.style.cssText =
        "margin: 0; margin-bottom: 10px; font-size: 13px; color: brown;";
      panel.appendChild(detected);

      const options = document.createElement("div");
      options.style.cssText =
        "display: flex; align-items: center; margin-bottom: 10px; font-size: 14px; color: chocolate;";
      const fetchCheck = document.createElement("input");
      fetchCheck.type = "checkbox";
      fetchCheck.id = "fetchCode";
      fetchCheck.checked = GM_getValue("fetchCode", false);
      fetchCheck.onchange = () => GM_setValue("fetchCode", fetchCheck.checked);
      const fetchLabel = document.createElement("label");
      fetchLabel.htmlFor = "fetchCode";
      fetchLabel.textContent = "Auto chuyển trang";
      fetchLabel.style.margin = "0 5px 0 15px";
      const fetchDiv = document.createElement("div");
      fetchDiv.style.display = "flex";
      fetchDiv.style.alignItems = "center";
      fetchDiv.appendChild(fetchCheck);
      fetchDiv.appendChild(fetchLabel);
      const autoCheck = document.createElement("input");
      autoCheck.type = "checkbox";
      autoCheck.id = "autoStart";
      autoCheck.checked = GM_getValue("autoStart", false);
      autoCheck.onchange = () => GM_setValue("autoStart", autoCheck.checked);
      const autoLabel = document.createElement("label");
      autoLabel.htmlFor = "autoStart";
      autoLabel.textContent = "Auto Bypass (90%)";
      autoLabel.style.marginLeft = "5px";
      const autoDiv = document.createElement("div");
      autoDiv.style.display = "flex";
      autoDiv.style.alignItems = "center";
      autoDiv.appendChild(autoCheck);
      autoDiv.appendChild(autoLabel);
      options.appendChild(fetchDiv);
      options.appendChild(autoDiv);
      panel.appendChild(options);

      const buttons = document.createElement("div");
      buttons.style.cssText =
        "display: flex; justify-content: space-between; font-size: 14px;";

      const bypassBtn = document.createElement("button");
      bypassBtn.textContent = "Bắt đầu Bypass";
      bypassBtn.style.cssText =
        "flex: 1; padding: 7px; background: #4CAF50; color: #fff; border: none; cursor: pointer; margin-right: 5px; border-radius: 5px;";
      bypassBtn.disabled = true;
      bypassBtn.onclick = async () => {
        bypassBtn.disabled = true;
        urlInput.readOnly = true;
        const targetUrl = urlInput.value || detectedUrl;
        urlInput.value = "Đang xử lý...";
        const code = await _0x20c4d5(targetUrl);
        if (code) {
          let countdown = 70;
          const timer = setInterval(() => {
            urlInput.value = "Vui lòng chờ: " + countdown + " giây";
            countdown--;
            if (countdown < 0) {
              clearInterval(timer);
              if (fetchCheck.checked) {
                urlInput.value = "Code: " + code + " - Đang chuyển trang...";
                _0x313435(code);
              } else {
                urlInput.value = "Code: " + code;
                bypassBtn.disabled = false;
              }
            }
          }, 1000);
        } else {
          urlInput.readOnly = false;
          urlInput.value = "Lỗi! Vui lòng xem lại URL.";
          bypassBtn.disabled = false;
        }
        sessionStorage.removeItem("ymnclk");
        localStorage.removeItem("codexn");
      };
      buttons.appendChild(bypassBtn);

      const changeBtn = document.createElement("button");
      changeBtn.textContent = "Đổi Nhiệm Vụ";
      changeBtn.style.cssText =
        "flex: 1; padding: 7px; background: #F44336; color: #fff; border: none; cursor: pointer; margin-right: 5px; border-radius: 5px;";
      changeBtn.disabled = true;
      changeBtn.onclick = () => {
        urlInput.readOnly = true;
        urlInput.value = "Đang Đổi Nhiệm Vụ...";
        _0x6749c7();
      };
      buttons.appendChild(changeBtn);

      const confirmBtn = document.createElement("button");
      confirmBtn.textContent = "Xác nhận Key";
      confirmBtn.style.cssText =
        "flex: 1; padding: 7px; background: #2196F3; color: #fff; border: none; cursor: pointer; border-radius: 5px;";
      confirmBtn.onclick = () => {
        const newKey = keyInput.value.trim();
        if (!newKey) {
          keyStatus.textContent = "Vui lòng nhập key!";
          keyStatus.style.color = "red";
          return;
        }
        keyStatus.textContent = "Đang kiểm tra key...";
        keyStatus.style.color = "gray";
        const isValid = updateKey(newKey);
        keyStatus.textContent = isValid ? "Key hợp lệ" : "Key không hợp lệ!";
        keyStatus.style.color = isValid ? "green" : "red";
        bypassBtn.disabled = !isValid;
        changeBtn.disabled = !isValid;
      };
      buttons.appendChild(confirmBtn);

      panel.appendChild(buttons);
      document.body.appendChild(panel);
      console.log("Giao diện đã thêm vào trang");

      // Kiểm tra key ban đầu
      if (storedKey) {
        const isValid = checkKey(storedKey);
        keyStatus.textContent = isValid ? "Key hợp lệ" : "Key không hợp lệ!";
        keyStatus.style.color = isValid ? "green" : "red";
        bypassBtn.disabled = !isValid;
        changeBtn.disabled = !isValid;
        if (isValid && autoCheck.checked) bypassBtn.click();
      }
    }

    console.log("Chờ nhận diện URL...");
    _0x2873d5()
      .then((url) => {
        console.log("URL nhận diện:", url);
        _0x3d4ed8(url);
      })
      .catch((err) => {
        console.error("Lỗi nhận diện URL:", err);
        _0x3d4ed8("Lỗi! Tự nhập URL hoặc Reload");
      });
  })();
})();
