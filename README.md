# 🌐 UTS Web Service Engineering — Events API

Menerapkan **RESTful API dengan CRUD Lengkap dan 7 RESTful Principles** pada Express.js untuk resource `events`.  
Project ini mengimplementasikan CRUD lengkap, validasi input, error handling, PATCH endpoint, dan endpoint info (`/api/info`).

**Topik:** RESTful API — UTS WSE

---

## 🧑‍🎓 Informasi Mahasiswa

| Informasi          | Data                                                  |
|--------------------|-------------------------------------------------------|
| Mata Kuliah        | Web Service Engineering                               |
| Dosen Pengampu     | Muhayat, M.IT                                         |
| Praktikum / Proyek | UTS — Events API                                      |
| Nama Mahasiswa     | Husna Norgina                                         |
| NIM                | 230104040056                                          |
| Kelas              | TI23B                                                 |
| Digit Akhir NIM    | 6                                                     |
| Resource           | events                                                |
| Field Utama        | title, date, location                                 |
| Repo GitHub        | https://github.com/husna-norgina/UTS-WSE-230104040056 |
| Tanggal Praktikum  | 10-11-2025                                            |

---

## 🎯 Tujuan Praktikum / UTS

1. Mendesain endpoint RESTful untuk resource baru (`events`).  
2. Mengimplementasikan CRUD lengkap dengan Express.js.  
3. Menggunakan metode HTTP dan status code sesuai standar REST.  
4. Menerapkan validasi input dan error handling yang tepat.  
5. Menghasilkan representasi data JSON yang konsisten.  
6. Menyusun struktur folder modular dan mudah dibaca.  
7. Menerapkan 7 RESTful Principles secara eksplisit.

---

## 🛠 Tools & Environment

* Node.js 22+ & npm  
* Express.js  
* VS Code / Postman / Thunder Client  
* Nodemon (Dev Dependency)  
* morgan → Logging Request  
* Middleware: `validateEvent.js`, `errorHandler.js`  

---

## 🧩 7 RESTful Principles yang diterapkan

1. **Resource-Oriented URI**: `/api/events`, bukan `/getAllEvents`.  
2. **Proper HTTP Methods**: GET, POST, PUT, PATCH, DELETE sesuai fungsinya.  
3. **Stateless Communication**: Server tidak menyimpan state sesi.  
4. **Consistent HTTP Status Codes**: 200, 201, 204, 400, 404, 500.  
5. **JSON Representation**: Semua response konsisten dalam format JSON.  
6. **Validation & Error Handling**: Middleware untuk input wajib.  
7. **Discoverability / Documentation-Friendly**: Endpoint `/api/info` memberikan metadata service.

---

## ⚙️ Struktur Project

```

src/
├─ routes/events.routes.js
├─ controllers/events.controller.js
├─ data/events.data.js
├─ middlewares/
│   ├─ validateEvent.js
│   └─ errorHandler.js
└─ app.js

```

---

## 🧩 Langkah Implementasi Singkat

1. Buat project folder `UTS-WSE-230104040056`  
2. `npm init -y`  
3. Install dependencies:  
```

npm install express morgan
npm install nodemon --save-dev

```
4. Buat file & struktur folder seperti di atas  
5. Tambahkan CRUD + PATCH endpoint di `events.routes.js`  
6. Gunakan middleware `validateEvent` di POST & PUT  
7. Tambahkan middleware `errorHandler` di akhir route  
8. Jalankan server:  
```

npm run dev

```

---

## 🧾 Dokumentasi Endpoint

| Method  | Path                 | Deskripsi                     | Status Code / Response          |
|---------|----------------------|-------------------------------|---------------------------------|
| GET     | /api/events          | Ambil semua events            | 200 OK                          |
| GET     | /api/events/1        | Ambil event berdasarkan ID    | 200 OK / 404 Not Found          |
| POST    | /api/events          | Tambah event baru             | 201 Created / 400 Bad Request   |
| PUT     | /api/events/1        | Update seluruh field events   | 200 OK / 400 Bad Request / 404  |
| DELETE  | /api/events/2        | Hapus events                  | 204 No Content / 404 Not Found  |
| GET     | /api/info            | Informasi service API         | 200 OK                          |

> Semua hasil uji Postman disimpan di folder: `./evidence/`

---

## 📊 Analisis

* Semua endpoint CRUD + PATCH berjalan sesuai spesifikasi.  
* Status code konsisten: 200, 201, 204, 400, 404.  
* Middleware validasi mencegah input kosong.  
* Endpoint `/api/info` memberikan metadata API.  
* Struktur project modular dan mudah dipelihara.  

---

## ✅ Kesimpulan

UTS Web Service Engineering berhasil diterapkan untuk resource `events`. Semua endpoint berjalan sesuai 7 RESTful Principles, validasi input & error handling aktif, response JSON konsisten, dan dokumentasi lengkap tersedia di README.md.

---

## 📌 Checklist UTS

* ✅ CRUD lengkap berjalan
* ✅ Validasi input & error handling
* ✅ Status code konsisten 
* ✅ Response JSON rapi 
* ✅ Endpoint /api/info aktif 
* ✅ Struktur folder sesuai template
* ✅ Screenshot hasil uji CRUD 
* ✅ Penerapan 7 RESTful Principles 

---
