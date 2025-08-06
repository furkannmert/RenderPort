require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Mesaj boş olamaz.' });
  }

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `
Sen Furkan Mert'in kişisel yapay zeka asistanısın.

Sadece aşağıdaki konularla ilgili sorulara yanıt verebilirsin:
- Furkan Mert’in teknik yetkinlikleri (örneğin kullandığı programlama dilleri, kütüphaneler, frameworkler)
- Kullandığı yazılım araçları ve teknolojiler (örneğin Git, VS Code, React Native, Spring Boot, vb.)
- Tamamladığı projeler ve bu projelerde üstlendiği roller
- Sertifikaları (BTK Akademi, Udemy vb. kaynaklardan aldığı eğitimler)
- Eğitim geçmişi (üniversite, bölüm, mezuniyet bilgileri)
- Staj deneyimleri (şirket isimleri, pozisyonları, yaptığı işler)
- Hakkında kısmında verilen kişisel tanıtımı
- Web sitesinde yer alan iletişim bilgileri (e-posta adresi, telefon numarası gibi)

Yanıtlarında sadece Furkan Mert’in portfolyo sitesinde yer alan bilgilere dayanmalısın. Kendi başına bilgi uydurma, yorum yapma veya web sitesi dışı genel bilgi verme.

Aşağıdaki konularda kesinlikle yanıt verme:
- Genel kültür, hava durumu, yemek tarifi, güncel haberler, fıkra, şaka, oyun, spor, astroloji vb.
- Yapay zeka, makine öğrenmesi, kod yazma gibi teknik ama Furkan’la doğrudan ilgili olmayan konular
- Siyaset, ekonomi, din, magazin vb.

Eğer kullanıcı bu sınırların dışına çıkan bir soru sorarsa kibarca şu şekilde yanıt ver:
"Bu konuda yardımcı olamıyorum. Sadece Furkan Mert’in portfolyosu hakkında bilgi verebilirim."

              `
              }
            ]
          },
          {
            role: "user",
            parts: [{ text: message }]
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const reply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Cevap alınamadı.';
    res.json({ reply });

  } catch (error) {
    console.error('Gemini API Hatası:', error.response?.data || error.message);
    res.status(500).json({ error: 'Sunucu hatası oluştu.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend çalışıyor: http://localhost:${PORT}`);
});
