function sepeteEkle(ad, fiyat) {
    const sepet = JSON.parse(localStorage.getItem("sepet")) || [];
    sepet.push({ ad, fiyat });
    localStorage.setItem("sepet", JSON.stringify(sepet));
    alert(ad + " sepete eklendi!");
}

function sepetiGoster() {
    const sepetListesi = document.getElementById("sepetListesi");
    const toplamSpan = document.getElementById("toplamTutar");
    const sepet = JSON.parse(localStorage.getItem("sepet")) || [];

    sepetListesi.innerHTML = "";
    let toplam = 0;

    sepet.forEach((urun, index) => {
        toplam += urun.fiyat;
        const li = document.createElement("li");
        li.textContent = `${urun.ad} - ₺${urun.fiyat.toFixed(2)}`;
        sepetListesi.appendChild(li);
    });

    toplamSpan.textContent = toplam.toFixed(2);
}

function odemeYap() {
    const sepet = JSON.parse(localStorage.getItem("sepet")) || [];
    if (sepet.length === 0) {
        alert("Sepetiniz boş!");
        return;
    }
    alert("Ödeme başarılı! Teşekkür ederiz.");
    localStorage.removeItem("sepet");
    window.location.href = "anasayfa.html";
}
