/* إعدادات تتعدّل قبل النشر: الرقم بالصيغة الدولية من غير + وصفر */
var CONFIG = { whatsapp: "201145169309" };
(function () {
  document.querySelectorAll("a[data-wa]").forEach(function (a) {
    a.href = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(a.getAttribute("data-wa"));
  });
  var f = document.getElementById("f");
  if (!f) return;
  f.addEventListener("submit", function (e) {
    e.preventDefault();
    var err = document.getElementById("err");
    var name = document.getElementById("name").value.trim();
    var area = document.getElementById("area").value.trim();
    if (!name || !area) { err.hidden = false; err.textContent = "اكتب اسمك ومنطقتك الأول."; return; }
    err.hidden = true;
    var text = "السلام عليكم، أنا " + name + " من " + area + " وعايز أسجّل اهتمامي بتجربة كشّاف.\nالخدمة: " +
      document.getElementById("svc").value + "\n" + document.getElementById("msg").value.trim();
    window.location.href = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(text);
  });
})();
